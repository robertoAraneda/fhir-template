import {
  IAddress,
  IIdentifier,
  ICodeableConcept,
  IHumanName,
  IAttachment,
  IContactPoint,
  IReference,
} from '../../interfaces/datatypes';
import { IPatientCommunication, IPatientContact, IPatientLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Patient } from '../../models/resources';
import { IPatient } from '../../interfaces/resources';

type ParamType =
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';
export class PatientBuilder
  extends DomainResourceBuilder<PatientBuilder>
  implements IBuildable<Patient>, ISerializable
{
  private readonly patient: IPatient;

  constructor() {
    super();
    this.patient = new Patient();
  }

  addParamExtension(param: ParamType, extension: IElement): PatientBuilder {
    this.patient[`_${param}`] = extension;

    return this;
  }

  addName(name: IHumanName): PatientBuilder {
    this.patient.name = this.patient.name || [];
    this.patient.name.push(name);
    return this;
  }

  setActive(active: boolean): PatientBuilder {
    this.patient.active = active;
    return this;
  }

  addIdentifier(identifier: IIdentifier): PatientBuilder {
    this.patient.identifier = this.patient.identifier || [];
    this.patient.identifier.push(identifier);
    return this;
  }

  addTelecom(telecom: IContactPoint): PatientBuilder {
    this.patient.telecom = this.patient.telecom || [];
    this.patient.telecom.push(telecom);
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PatientBuilder {
    this.patient.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): PatientBuilder {
    this.patient.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: ICodeableConcept): PatientBuilder {
    this.patient.maritalStatus = maritalStatus;

    return this;
  }

  addLink(link: IPatientLink): PatientBuilder {
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

  setMultipleLinks(links: IPatientLink[]): PatientBuilder {
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

  setManagingOrganization(args: IReference): PatientBuilder {
    this.patient.managingOrganization = args;

    return this;
  }

  addCommunication(communication: IPatientCommunication): PatientBuilder {
    this.patient.communication = this.patient.communication || [];
    this.patient.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IPatientCommunication[]): PatientBuilder {
    this.patient.communication = communications;
    return this;
  }

  addContact(contact: IPatientContact): PatientBuilder {
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

  setMultipleContact(contacts: IPatientContact[]): PatientBuilder {
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

  addPhoto(attachment: IAttachment): PatientBuilder {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: IAttachment[]): PatientBuilder {
    this.patient.photo = attachments;
    return this;
  }

  addAddress(address: IAddress): PatientBuilder {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): PatientBuilder {
    this.patient.address = addresses;
    return this;
  }

  addGeneralPractitioner(generalPractitioner: IReference): PatientBuilder {
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): PatientBuilder {
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
