import { BackboneElementValidator, Wait } from './validators/BackboneElementValidator';
import { Endpoint, Organization, Patient, Person, Practitioner, PractitionerRole, RelatedPerson } from './resources';
import {
  createBackboneElementBuilderType,
  createDatatypeBuilderType,
  createInstance,
  createResourceBuilderType,
  createResourceType,
} from '../helpers';
import {
  EndpointBuilder,
  OrganizationBuilder,
  PatientBuilder,
  PersonBuilder,
  PractitionerBuilder,
  PractitionerRoleBuilder,
  RelatedPersonBuilder,
} from './builders/resources';
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
} from './builders/backbones';
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
} from './builders/datatypes';
import { DataTypesValidator } from './validators/ElementValidator';
import { ResourceValidator } from './validators/ResourceValidator';

export interface IBackboneValidatorProperties {
  EndpointPayload: (data: unknown) => Wait;
  OrganizationQualification: (data: unknown) => Wait;
  PatientContact: (data: unknown) => Wait;
  PatientCommunication: (data: unknown) => Wait;
  PatientLink: (data: unknown) => Wait;
  PersonCommunication: (data: unknown) => Wait;
  PersonLink: (data: unknown) => Wait;
  PractitionerCommunication: (data: unknown) => Wait;
  PractitionerQualification: (data: unknown) => Wait;
  RelatedPersonCommunication: (data: unknown) => Wait;
}

export interface IResourceValidatorProperties {
  Patient: (data: unknown) => Wait;
  Organization: (data: unknown) => Wait;
  Endpoint: (data: unknown) => Wait;
  Person: (data: unknown) => Wait;
  Practitioner: (data: unknown) => Wait;
  PractitionerRole: (data: unknown) => Wait;
  RelatedPerson: (data: unknown) => Wait;
}

export interface IDatatypeValidatorProperties {
  Address: (data: unknown) => Wait;
  Attachment: (data: unknown) => Wait;
  CodeableConcept: (data: unknown) => Wait;
  Coding: (data: unknown) => Wait;
  ContactPoint: (data: unknown) => Wait;
  HumanName: (data: unknown) => Wait;
  Identifier: (data: unknown) => Wait;
  Meta: (data: unknown) => Wait;
  Period: (data: unknown) => Wait;
  Reference: (data: unknown) => Wait;
}

export interface IValidatorContext {
  backboneElements: IBackboneValidatorProperties;
  dataTypes: IDatatypeValidatorProperties;
  resources: IResourceValidatorProperties;
}

export type ResourceTypeR5 =
  | 'Patient'
  | 'Organization'
  | 'Endpoint'
  | 'Person'
  | 'Practitioner'
  | 'PractitionerRole'
  | 'RelatedPerson';

export type BackboneTypeR5 =
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

export type DatatypeTypeR5 =
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

const mapResourceTypeToBuilder = {
  Patient: new Patient(),
  Organization: new Organization(),
  Endpoint: new Endpoint(),
  Person: new Person(),
  Practitioner: new Practitioner(),
  PractitionerRole: new PractitionerRole(),
  RelatedPerson: new RelatedPerson(),
};

export class FhirContextR5 {
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

  public createResource<T extends ResourceTypeR5>(resourceType: T) {
    return {
      payload: (
        payload: T extends 'Patient'
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
          : unknown,
      ) =>
        createInstance(resourceType, payload) as T extends 'Patient'
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
          : unknown,
    };
  }

  /*

  public createResource<T extends ResourceTypeR5>(resourceType: T) {
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
  
   */

  public async createResourceWithBuilder<T extends ResourceTypeR5>(resourceType: ResourceTypeR5) {
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

  public async createBackboneElementWithBuilder<T extends BackboneTypeR5>(resourceType: BackboneTypeR5) {
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

  public async createDatatypeWithBuilder<T extends DatatypeTypeR5>(resourceType: DatatypeTypeR5) {
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

/*
export class FhirContextR5 {
  public validate(resourceType: ResourceEnum | ResourceTypeType, payload: any): boolean {
    switch (resourceType) {
      case 'Patient':
        return this.validatePatient(payload);
      case 'Organization':
        return this.validateOrganization(payload);
      default:
        return false;
    }
  }

  private validatePatient(patient: Patient): boolean {
    // validate identifier
    if (patient.identifier) {
      patient.identifier.forEach((_identifier: Identifier) => {
        const id = new Identifier(_identifier);
      });
    }

    // validate contact
    if (patient.contact) {
      patient.contact.forEach((_contact: any) => {
        if (!_contact.name && !_contact.telecom && !_contact.address && !_contact.organization) {
          throw new Error(
            `[Constraints: Patient.contact] SHALL at least contain a contact's details or a reference to an organization`,
          );
        }
      });
    }

    return true;
  }

  private validateOrganization(organization: Organization): boolean {
    if (!organization.identifier && !organization.name) {
      throw new Error(
        `[Constraints: (base)] The organization SHALL at least have a name or an identifier, and possibly more than one.`,
      );
    }

    if (organization.identifier) {
      organization.identifier.forEach((_identifier: Identifier) => {
        const id = new Identifier(_identifier);
      });
    }

    if (organization.contact) {
      organization.contact.forEach((_contact: any) => {
        if (_contact.telecom) {
          _contact.telecom.forEach((_telecom: any) => {
            if (_telecom.use && _telecom.use === 'home') {
              throw new Error(
                `[Constraints: Organization.contact] The telecom of an organization can never be of use 'home'.`,
              );
            }
          });
        }

        if (_contact.address) {
          _contact.address.forEach((_address: any) => {
            if (_address.use && _address.use === 'home') {
              throw new Error(
                `[Constraints: Organization.contact] The address of an organization can never be of use 'home'.`,
              );
            }
          });
        }
      });
    }

    return true;
  }
}

 */
