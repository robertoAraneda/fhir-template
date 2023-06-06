import { BackboneElementValidator, Wait } from './validators/BackboneElementValidator';
import { DataTypesValidator } from './validators/ElementValidator';
import { ResourceValidator } from './validators/ResourceValidator';
import { ResourceBuilder } from './ResourceBuilder';
import { ElementBuilder } from './ElementBuilder';
import { BackboneElementBuilder } from './BackboneElementBuilder';
import { Address } from './models/datatypes/Address';
import { Attachment } from './models/datatypes/Attachment';
import {
  IAddress,
  IAttachment,
  IAvailability,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
} from './interfaces/datatypes';
import { IReference } from './interfaces/base';
import { Endpoint } from './models/resources';
import { EndpointBuilder } from './builders/resources';
import { AddressBuilder, AttachmentBuilder } from './builders/datatypes';
import { AvailabilityBuilder } from './builders/datatypes/AvailabilityBuilder';

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
  Availability: (data: unknown) => Wait;
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
  | 'Availability'
  | 'Reference';

const generateInstanceResource = (resourceType: ResourceTypeR5) => {
  switch (resourceType) {
    case 'Patient':
      return { data: (data: Partial<Endpoint>) => new EndpointBuilder().fromJSON(data).build() };
    case 'Organization':
    case 'Endpoint':
    case 'Person':
    case 'Practitioner':
    case 'PractitionerRole':
    case 'RelatedPerson':
      return { data: (data: Partial<Endpoint>) => new EndpointBuilder().fromJSON(data).build() };
  }
};

const generateInstanceDatatype = (resourceType: DatatypeTypeR5) => {
  switch (resourceType) {
    case 'Address':
      return { data: (data: IAddress) => new AddressBuilder().fromJSON(data).build() };
    case 'Availability':
      return { data: (data: IAvailability) => new AvailabilityBuilder().fromJSON(data).build() };
    case 'CodeableConcept':
    case 'Period':
    case 'Coding':
    case 'Meta':
    case 'Reference':
    case 'Identifier':
    case 'HumanName':
    case 'ContactPoint':
    case 'Attachment':
      return { data: (data: IAttachment) => new AttachmentBuilder().fromJSON(data).build() };
  }
};

export class FhirContextR5 {
  createResource<T extends ResourceTypeR5>(resourceType: T) {
    return generateInstanceResource(resourceType);
  }

  createDatatype<T extends DatatypeTypeR5>(datatypeType: T) {
    type dataType = T extends 'Address'
      ? IAddress
      : T extends 'Attachment'
      ? IAttachment
      : T extends 'CodeableConcept'
      ? ICodeableConcept
      : T extends 'Coding'
      ? ICoding
      : T extends 'ContactPoint'
      ? IContactPoint
      : T extends 'HumanName'
      ? IHumanName
      : T extends 'Identifier'
      ? IIdentifier
      : T extends 'Meta'
      ? IMeta
      : T extends 'Period'
      ? IPeriod
      : T extends 'Reference'
      ? IReference
      : T extends 'Availability'
      ? IAvailability
      : unknown;
    return generateInstanceDatatype(datatypeType) as unknown as { data: (data: dataType) => dataType };
  }
  public getBuilders() {
    return {
      backboneElements: BackboneElementBuilder,
      dataTypes: ElementBuilder,
      resources: ResourceBuilder,
    };
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
