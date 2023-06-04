import { Patient } from '../../interfaces/resources';
import { Address, Identifier, CodeableConcept, HumanName, Attachment, ContactPoint } from '../../interfaces/datatypes';
import { PatientCommunication, PatientContact, PatientLink } from '../../interfaces/backbones';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Reference, Element, Buildable, Serializable } from '../../interfaces/base';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';

type ParamType =
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';
export class PatientBuilder extends DomainResourceBuilder<PatientBuilder> implements Buildable<Patient>, Serializable {
  private readonly patient: Patient;

  constructor() {
    super();
    this.patient = {} as Patient;
    this.patient.resourceType = 'Patient';
  }

  addParamExtension(param: ParamType, extension: Element): PatientBuilder {
    this.patient[`_${param}`] = extension;

    return this;
  }

  addName(name: HumanName): PatientBuilder {
    this.patient.name = this.patient.name || [];
    this.patient.name.push(name);
    return this;
  }

  setActive(active: boolean): PatientBuilder {
    this.patient.active = active;
    return this;
  }

  addIdentifier(identifier: Identifier): PatientBuilder {
    this.patient.identifier = this.patient.identifier || [];
    this.patient.identifier.push(identifier);
    return this;
  }

  addTelecom(telecom: ContactPoint): PatientBuilder {
    this.patient.telecom = this.patient.telecom || [];
    this.patient.telecom.push(telecom);
    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): PatientBuilder {
    this.patient.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): PatientBuilder {
    this.patient.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: CodeableConcept): PatientBuilder {
    this.patient.maritalStatus = maritalStatus;

    return this;
  }

  addLink(link: PatientLink): PatientBuilder {
    /*
    if (typeof link.other.reference === 'string') {
      if (!link.other.reference?.startsWith('Patient/'))
        throw new Error('Link.other.reference must start with Patient/');
    }

    if (link.other.reference) {
      link.other = new Reference<Patient | string>(link.other);
    }

     */

    if (!this.patient.link) this.patient.link = this.patient.link || [];
    this.patient.link.push(link);
    return this;
  }

  setMultipleLinks(links: PatientLink[]): PatientBuilder {
    this.patient.link = links;
    return this;
  }

  setDeceased<R extends boolean | string>(deceased: R): PatientBuilder {
    if (typeof deceased === 'boolean') this.patient.deceasedBoolean = deceased;
    else if (typeof deceased === 'string') this.patient.deceasedDateTime = deceased;

    return this;
  }

  setMultipleBirth<R extends boolean | number>(multipleBirth: R): PatientBuilder {
    if (typeof multipleBirth === 'boolean') this.patient.multipleBirthBoolean = multipleBirth;
    else if (typeof multipleBirth === 'number') this.patient.multipleBirthInteger = multipleBirth;

    return this;
  }

  setManagingOrganization(args: Reference): PatientBuilder {
    this.patient.managingOrganization = args;

    return this;
  }

  addCommunication(communication: PatientCommunication): PatientBuilder {
    this.patient.communication = this.patient.communication || [];
    this.patient.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: PatientCommunication[]): PatientBuilder {
    this.patient.communication = communications;
    return this;
  }

  addContact(contact: PatientContact): PatientBuilder {
    this.patient.contact = this.patient.contact || [];

    /*
    if (contact.organization) {
      if (typeof contact.organization.reference === 'string') {
        if (!contact.organization.reference.startsWith('Organization/')) {
          throw new Error('Contact.organization.reference must start with Organization/');
        }
      }
      contact.organization = new Reference<Organization | string>(contact.organization);
    }

     */
    this.patient.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: PatientContact[]): PatientBuilder {
    /*
    for (const contact of contacts) {
      if (contact.organization) {
        if (typeof contact.organization.reference === 'string') {
          if (!contact.organization.reference.startsWith('Organization/')) {
            throw new Error('Contact.organization.reference must start with Organization/');
          }
        }
        contact.organization = new Reference(contact.organization);
      }
    }

     */
    this.patient.contact = contacts;
    return this;
  }

  addPhoto(attachment: Attachment): PatientBuilder {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: Attachment[]): PatientBuilder {
    this.patient.photo = attachments;
    return this;
  }

  addAddress(address: Address): PatientBuilder {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: Address[]): PatientBuilder {
    this.patient.address = addresses;
    return this;
  }

  addGeneralPractitioner(generalPractitioner: Reference): PatientBuilder {
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  setMultipleGeneralPractitioner(generalPractitioners: Reference[]): PatientBuilder {
    this.patient.generalPractitioner = generalPractitioners;
    return this;
  }

  raw(): Patient {
    return {
      ...this.patient,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Patient {
    return JSON.parse(this.serialize());
  }
}
