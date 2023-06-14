import { BackboneElementValidator, Wait } from './validators/BackboneElementValidator';
import { DataTypesValidator } from './validators/ElementValidator';
import { ResourceValidator } from './validators/ResourceValidator';
import { ResourceBuilder } from './ResourceBuilder';
import { ElementBuilder } from './ElementBuilder';
import { BackboneElementBuilder } from './BackboneElementBuilder';
import { DataType, DatatypeTypeR5, IDatatypeValidatorProperties } from './GlobalDatatypes';
import { generateInstanceDatatype } from './InstanceBuilderDatatype';
import { generateInstanceResource } from './InstanceBuilderResource';
import { IResourceValidatorProperties, ParseResourceTypeR5, ResourceTypeR5 } from './GlobalResourceTypes';
import { BackboneElementTypeR5, ParseBackboneElementTypeR5 } from './GlobalBackboneElements';
import { generateInstanceBackboneElement } from './InstanceBuilderBackboneElement';

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

export interface IValidatorContext {
  backboneElements: IBackboneValidatorProperties;
  dataTypes: IDatatypeValidatorProperties;
  resources: IResourceValidatorProperties;
}

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

export class FhirContextR5 {
  createResource<T extends ResourceTypeR5>(resourceType: T, data?: ParseResourceTypeR5<T>) {
    return generateInstanceResource(resourceType, data) as ParseResourceTypeR5<T>;
  }

  createDatatype<T extends DatatypeTypeR5>(datatypeType: T, d: DataType<T>) {
    return generateInstanceDatatype(datatypeType, d) as DataType<T>;
  }

  createBackboneElement<T extends BackboneElementTypeR5>(backboneType: T, data?: ParseBackboneElementTypeR5<T>) {
    return generateInstanceBackboneElement(backboneType, data) as ParseBackboneElementTypeR5<T>;
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
