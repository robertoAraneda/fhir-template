import { BackboneElementType } from './r5/types';
import { BackboneElementValidator } from './r5/validators/BackboneElementValidator';
import { DataTypesValidator } from './r5/validators/ElementValidator';
import { ResourceValidator } from './r5/validators/ResourceValidator';
import {
  createBackboneElementBuilderType,
  createDatatypeBuilderType,
  createResourceBuilderType,
  createResourceType,
} from './helpers';
import { Endpoint, Patient, Organization, Practitioner, PractitionerRole, RelatedPerson, Person } from './r5/resources';
import {
  EndpointBuilder,
  OrganizationBuilder,
  PatientBuilder,
  PersonBuilder,
  PractitionerBuilder,
  PractitionerRoleBuilder,
  RelatedPersonBuilder,
} from './r5/builders/resources';
import { IValidatorContext } from './r5';
import {
  AddressBuilder,
  AttachmentBuilder,
  CodeableConceptBuilder,
  ContactPointBuilder,
  HumanNameBuilder,
  IdentifierBuilder,
  MetaBuilder,
  PeriodBuilder,
  ReferenceBuilder,
} from './r5/builders/datatypes';
import {
  EndpointPayloadBuilder,
  OrganizationQualificationBuilder,
  PatientCommunicationBuilder,
  PatientContactBuilder,
  PatientLinkBuilder,
  PersonCommunicationBuilder,
  PersonLinkBuilder,
  PractitionerCommunicationBuilder,
  PractitionerQualificationBuilder,
  RelatedPersonCommunicationBuilder,
} from './r5/builders/backbones';

type ResourceType =
  | 'Patient'
  | 'Organization'
  | 'Endpoint'
  | 'Person'
  | 'Practitioner'
  | 'PractitionerRole'
  | 'RelatedPerson';

type BackboneType =
  | 'PatientContact'
  | 'PatientCommunication'
  | 'PatientLink'
  | 'PersonCommunication'
  | 'PersonLink'
  | 'PractitionerCommunication'
  | 'PractitionerQualification'
  | 'RelatedPersonCommunication'
  | 'OrganizationQualification'
  | 'EndpointPayload';

type DatatypeType =
  | 'Address'
  | 'Attachment'
  | 'CodeableConcept'
  | 'Coding'
  | 'ContactPoint'
  | 'HumanName'
  | 'Identifier'
  | 'Meta'
  | 'Period'
  | 'Reference';

class FhirContextR5 {
  /*
  public async createResource<T extends IDomainResource>(
    resourceType: ResourceType,
    payload: T extends IDomainResource ? T : unknown,
  ) {
    const builder = await import(`./r5/resources/${resourceType}`);

    return new builder[`${resourceType}`](payload) as T;
  }
  


  public async createResource(resourceType: ResourceType) {
    const entityType = createResourceTypeInstance(resourceType);
    if (!entityType) throw new Error(`Resource type ${resourceType} not found`);

    const entity = await import(`./r5/resources/${resourceType}`);

    return {
      payload: (payload: typeof entityType) => new entity[`${resourceType}`](payload) as typeof entityType,
    };
  }

   */

  public createResource<T extends ResourceType>(resourceType: T) {
    type ResourceInstance = T extends 'Patient'
      ? Patient
      : T extends 'Endpoint'
      ? Endpoint
      : T extends 'Person'
      ? Person
      : T extends 'Practitioner'
      ? Practitioner
      : T extends 'RelatedPerson'
      ? RelatedPerson
      : T extends 'Organization'
      ? Organization
      : T extends 'PractitionerRole'
      ? PractitionerRole
      : unknown;
    return {
      payload: (payload: ResourceInstance) => createResourceType<ResourceInstance>(resourceType, payload),
    };
  }

  public async createResourceWithBuilder<T extends ResourceType>(resourceType: ResourceType) {
    type ResourceInstance = T extends 'Patient'
      ? PatientBuilder
      : T extends 'Endpoint'
      ? EndpointBuilder
      : T extends 'Person'
      ? PersonBuilder
      : T extends 'Practitioner'
      ? PractitionerBuilder
      : T extends 'RelatedPerson'
      ? RelatedPersonBuilder
      : T extends 'Organization'
      ? OrganizationBuilder
      : T extends 'PractitionerRole'
      ? PractitionerRoleBuilder
      : unknown;

    return createResourceBuilderType<ResourceInstance>(resourceType);
  }

  public async createBackboneElementWithBuilder<T extends BackboneType>(resourceType: BackboneType) {
    type ResourceInstance = T extends 'PatientContact'
      ? PatientContactBuilder
      : T extends 'PatientCommunication'
      ? PatientCommunicationBuilder
      : T extends 'PatientLink'
      ? PatientLinkBuilder
      : T extends 'PersonCommunication'
      ? PersonCommunicationBuilder
      : T extends 'PersonLink'
      ? PersonLinkBuilder
      : T extends 'PractitionerCommunication'
      ? PractitionerCommunicationBuilder
      : T extends 'PractitionerQualification'
      ? PractitionerQualificationBuilder
      : T extends 'RelatedPersonCommunication'
      ? RelatedPersonCommunicationBuilder
      : T extends 'OrganizationQualification'
      ? OrganizationQualificationBuilder
      : T extends 'EndpointPayload'
      ? EndpointPayloadBuilder
      : unknown;

    return createBackboneElementBuilderType<ResourceInstance>(resourceType);
  }

  public async createDatatypeWithBuilder<T extends DatatypeType>(resourceType: DatatypeType) {
    type ResourceInstance = T extends 'Address'
      ? AddressBuilder
      : T extends 'Attachment'
      ? AttachmentBuilder
      : T extends 'CodeableConcept'
      ? CodeableConceptBuilder
      : T extends 'ContactPoint'
      ? ContactPointBuilder
      : T extends 'HumanName'
      ? HumanNameBuilder
      : T extends 'Identifier'
      ? IdentifierBuilder
      : T extends 'Meta'
      ? MetaBuilder
      : T extends 'Period'
      ? PeriodBuilder
      : T extends 'Reference'
      ? ReferenceBuilder
      : unknown;

    return createDatatypeBuilderType<ResourceInstance>(resourceType);
  }

  public getValidator(): IValidatorContext {
    return {
      backboneElements: BackboneElementValidator,
      dataTypes: DataTypesValidator,
      resources: ResourceValidator,
    };
  }
}

class FHIRContext {
  forR5() {
    return {
      createResource: <T extends ResourceType>(resourceType: T) => {
        return new FhirContextR5().createResource<T>(resourceType);
      },
      createResourceWithBuilder: <T extends ResourceType>(resourceType: T) => {
        return new FhirContextR5().createResourceWithBuilder<T>(resourceType);
      },
      createBackboneElementWithBuilder: <T extends BackboneType>(resourceType: T) => {
        return new FhirContextR5().createBackboneElementWithBuilder<T>(resourceType);
      },
      createDataTypeWithBuilder: <T extends DatatypeType>(resourceType: T) => {
        return new FhirContextR5().createDatatypeWithBuilder<T>(resourceType);
      },
      validators: new FhirContextR5().getValidator(),
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
