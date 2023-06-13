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
import { IElement } from '../../interfaces/base';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Patient } from '../../models/resources';
import { IPatient } from '../../interfaces/resources';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { createBuildAndSerializeMethods } from '../../../globals/helpers/buildAndSerialize';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamType =
  | 'implicitRules'
  | 'language'
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';

interface IPatientBuilder extends IBuildable<IPatient>, ISerializable {
  addParamExtension(param: ParamType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setActive(active: boolean): this;
  addName(name: IHumanName): this;
  setMultipleName(names: IHumanName[]): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  setDeceased(deceased: boolean | string): this;
  addAddress(address: IAddress): this;
  setMultipleAddress(addresses: IAddress[]): this;
  setMaritalStatus(maritalStatus: ICodeableConcept): this;
  setMultipleBirth(multipleBirth: boolean | number): this;
  addPhoto(photo: IAttachment): this;
  setMultiplePhoto(photos: IAttachment[]): this;
  addContact(contact: IPatientContact): this;
  setMultipleContact(contacts: IPatientContact[]): this;
  addCommunication(communication: IPatientCommunication): this;
  setMultipleCommunication(communications: IPatientCommunication[]): this;
  addGeneralPractitioner(generalPractitioner: IReference): this;
  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): this;
  setManagingOrganization(managingOrganization: IReference): this;
  addLink(link: IPatientLink): this;
  setMultipleLink(links: IPatientLink[]): this;
}
export default class PatientBuilder extends DomainResourceBuilder<PatientBuilder> implements IPatientBuilder {
  private readonly patient: IPatient;

  constructor() {
    super();
    this.patient = new Patient();
  }

  fromJSON(data: IPatient): Pick<IPatientBuilder, 'serialize' | 'build'> {
    const patient = new Patient(data);
    return createBuildAndSerializeMethods(patient);
  }

  addParamExtension(param: ParamType, extension: IElement): this {
    this.patient[`_${param}`] = extension;

    return this;
  }

  addName(name: IHumanName): this {
    this.patient.name = this.patient.name || [];
    this.patient.name.push(name);
    return this;
  }

  setActive(active: boolean): this {
    this.patient.active = active;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.patient.identifier = this.patient.identifier || [];
    this.patient.identifier.push(identifier);
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.patient.telecom = this.patient.telecom || [];
    this.patient.telecom.push(telecom);
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.patient.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.patient.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: ICodeableConcept): this {
    this.patient.maritalStatus = maritalStatus;

    return this;
  }

  addLink(link: IPatientLink): this {
    if (link.other?.reference) {
      validateReference(link.other.reference, ['Patient']);
    }
    this.patient.link = this.patient.link || [];
    this.patient.link.push(link);
    return this;
  }

  setMultipleLinks(links: IPatientLink[]): this {
    for (const link of links) {
      if (link.other?.reference) {
        validateReference(link.other.reference, ['Patient']);
      }
    }
    this.patient.link = links;
    return this;
  }

  setDeceased<R extends boolean | string>(deceased: R): this {
    if (typeof deceased === 'boolean') {
      this.patient.deceasedBoolean = deceased;
      this.patient.deceasedDateTime = undefined;
    } else if (typeof deceased === 'string') {
      this.patient.deceasedDateTime = deceased;
      this.patient.deceasedBoolean = undefined;
    }

    return this;
  }

  setMultipleBirth<R extends boolean | number>(multipleBirth: R): this {
    if (typeof multipleBirth === 'boolean') {
      this.patient.multipleBirthBoolean = multipleBirth;
      this.patient.multipleBirthInteger = undefined;
    } else if (typeof multipleBirth === 'number') {
      this.patient.multipleBirthInteger = multipleBirth;
      this.patient.multipleBirthBoolean = undefined;
    }

    return this;
  }

  setManagingOrganization(args: IReference): this {
    this.patient.managingOrganization = args;

    return this;
  }

  addCommunication(communication: IPatientCommunication): this {
    this.patient.communication = this.patient.communication || [];
    this.patient.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IPatientCommunication[]): this {
    this.patient.communication = communications;
    return this;
  }

  addContact(contact: IPatientContact): this {
    this.patient.contact = this.patient.contact || [];

    if (contact.organization?.reference) {
      validateReference(contact.organization.reference, ['Organization']);
    }
    this.patient.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IPatientContact[]): this {
    for (const contact of contacts) {
      if (contact.organization?.reference) {
        validateReference(contact.organization.reference, ['Organization']);
      }
    }
    this.patient.contact = contacts;
    return this;
  }

  addPhoto(attachment: IAttachment): this {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: IAttachment[]): this {
    this.patient.photo = attachments;
    return this;
  }

  addAddress(address: IAddress): this {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): this {
    this.patient.address = addresses;
    return this;
  }

  addGeneralPractitioner(generalPractitioner: IReference): this {
    if (generalPractitioner.reference) {
      validateReference(generalPractitioner.reference, ['Practitioner', 'Organization', 'PractitionerRole']);
    }
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): this {
    for (const generalPractitioner of generalPractitioners) {
      if (generalPractitioner.reference) {
        validateReference(generalPractitioner.reference, ['Practitioner', 'Organization', 'PractitionerRole']);
      }
    }
    this.patient.generalPractitioner = generalPractitioners;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    }
    this.patient.identifier = identifiers;
    return this;
  }

  setMultipleLink(links: IPatientLink[]): this {
    for (const link of links) {
      if (link.other?.reference) {
        validateReference(link.other.reference, ['Patient', 'RelatedPerson']);
      }
    }
    this.patient.link = links;
    return this;
  }

  setMultipleName(names: IHumanName[]): this {
    this.patient.name = names;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.patient.telecom = telecoms;
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
