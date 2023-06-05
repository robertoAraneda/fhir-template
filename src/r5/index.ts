import { BackboneElementValidator } from './validators/BackboneElementValidator';
import { DataTypesValidator } from './validators/ElementValidator';
import { ResourceValidator } from './validators/ResourceValidator';
import { IValidateProperties } from './interfaces/IValidateProperties';

export interface IFHIRContextR5 {
  validators: IValidatorContext;
}

export interface IValidatorContext {
  EndpointPayload: (data: unknown) => Promise<IValidateProperties>;
  OrganizationQualification: (data: unknown) => Promise<IValidateProperties>;
  PatientContact: (data: unknown) => Promise<IValidateProperties>;
  PatientCommunication: (data: unknown) => Promise<IValidateProperties>;
  PatientLink: (data: unknown) => Promise<IValidateProperties>;
  PersonCommunication: (data: unknown) => Promise<IValidateProperties>;
  PersonLink: (data: unknown) => Promise<IValidateProperties>;
  PractitionerCommunication: (data: unknown) => Promise<IValidateProperties>;
  PractitionerQualification: (data: unknown) => Promise<IValidateProperties>;
  RelatedPersonCommunication: (data: unknown) => Promise<IValidateProperties>;
  Address: (data: unknown) => Promise<IValidateProperties>;
  Attachment: (data: unknown) => Promise<IValidateProperties>;
  CodeableConcept: (data: unknown) => Promise<IValidateProperties>;
  Coding: (data: unknown) => Promise<IValidateProperties>;
  ContactPoint: (data: unknown) => Promise<IValidateProperties>;
  HumanName: (data: unknown) => Promise<IValidateProperties>;
  Identifier: (data: unknown) => Promise<IValidateProperties>;
  Meta: (data: unknown) => Promise<IValidateProperties>;
  Period: (data: unknown) => Promise<IValidateProperties>;
  Reference: (data: unknown) => Promise<IValidateProperties>;
  Patient: (data: unknown) => Promise<IValidateProperties>;
  Organization: (data: unknown) => Promise<IValidateProperties>;
  Endpoint: (data: unknown) => Promise<IValidateProperties>;
  Person: (data: unknown) => Promise<IValidateProperties>;
  Practitioner: (data: unknown) => Promise<IValidateProperties>;
  PractitionerRole: (data: unknown) => Promise<IValidateProperties>;
  RelatedPerson: (data: unknown) => Promise<IValidateProperties>;
}

export const FhirContextR5: IFHIRContextR5 = {
  validators: {
    ...BackboneElementValidator,
    ...DataTypesValidator,
    ...ResourceValidator,
  },
};

/*
export class FhirContextR5 {
  public validate(resourceType: ResourceType | ResourceTypeType, payload: any): boolean {
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
