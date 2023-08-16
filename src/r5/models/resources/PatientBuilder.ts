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
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Patient } from './index';
import { IPatient } from '../../interfaces/resources';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IResourceBuilder } from '../base/ResourceBuilder';

type ParamExtensionType =
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';

interface IPatientBuilder
  extends IBuildable<Patient>,
    IDomainResourceBuilder<PatientBuilder>,
    IResourceBuilder<PatientBuilder> {
  addParamExtension(param: ParamExtensionType, extension: IElement): this;
  addName(name: IHumanName): this;
  setActive(active: boolean): this;
  addIdentifier(identifier: IIdentifier): this;
  addTelecom(telecom: IContactPoint): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  setMaritalStatus(maritalStatus: ICodeableConcept): this;
  addLink(link: IPatientLink): this;
  setManagingOrganization(managingOrganization: IReference): this;
  addCommunication(communication: IPatientCommunication): this;
  addContact(contact: IPatientContact): this;
  addAddress(address: IAddress): this;
  addPhoto(photo: IAttachment): this;
  addGeneralPractitioner(generalPractitioner: IReference): this;
  setMultipleName(names: IHumanName[]): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setMultipleLink(links: IPatientLink[]): this;
  setMultipleCommunication(communications: IPatientCommunication[]): this;
  setMultipleContact(contacts: IPatientContact[]): this;
  setMultipleAddress(addresses: IAddress[]): this;
  setMultiplePhoto(photos: IAttachment[]): this;
  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): this;
  setDeceasedDateTime(deceasedDateTime: string): this;
  setDeceasedBoolean(deceasedBoolean: boolean): this;
  setMultipleBirthInteger(multipleBirthInteger: number): this;
  setMultipleBirthBoolean(multipleBirthBoolean: boolean): this;
}

export default class PatientBuilder extends DomainResourceBuilder<PatientBuilder> implements IPatientBuilder {
  private readonly patient: IPatient;

  constructor() {
    super();
    this.patient = {} as IPatient;
  }

  addParamExtension(param: ParamExtensionType, extension: IElement): this {
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
    this.patient.link = this.patient.link || [];
    this.patient.link.push(link);
    return this;
  }

  setMultipleLink(links: IPatientLink[]): this {
    links.forEach((link) => this.addLink(link));
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
    communications.forEach((communication) => this.addCommunication(communication));
    return this;
  }

  addContact(contact: IPatientContact): this {
    this.patient.contact = this.patient.contact || [];

    this.patient.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IPatientContact[]): this {
    contacts.forEach((contact) => this.addContact(contact));
    return this;
  }

  addPhoto(attachment: IAttachment): this {
    this.patient.photo = this.patient.photo || [];
    this.patient.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: IAttachment[]): this {
    attachments.forEach((attachment) => this.addPhoto(attachment));
    return this;
  }

  addAddress(address: IAddress): this {
    this.patient.address = this.patient.address || [];
    this.patient.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): this {
    addresses.forEach((address) => this.addAddress(address));
    return this;
  }

  addGeneralPractitioner(generalPractitioner: IReference): this {
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): this {
    generalPractitioners.forEach((generalPractitioner) => this.addGeneralPractitioner(generalPractitioner));
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => this.addIdentifier(identifier));
    return this;
  }

  setMultipleName(names: IHumanName[]): this {
    names.forEach((name) => this.addName(name));
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    telecoms.forEach((telecom) => this.addTelecom(telecom));
    return this;
  }

  setDeceasedBoolean(deceasedBoolean: boolean): this {
    this.patient.deceasedBoolean = deceasedBoolean;
    return this;
  }

  setDeceasedDateTime(deceasedDateTime: string): this {
    this.patient.deceasedDateTime = deceasedDateTime;
    return this;
  }

  setMultipleBirthBoolean(multipleBirthBoolean: boolean): this {
    this.patient.multipleBirthBoolean = multipleBirthBoolean;
    return this;
  }

  setMultipleBirthInteger(multipleBirthInteger: number): this {
    this.patient.multipleBirthInteger = multipleBirthInteger;
    return this;
  }

  build(): Patient {
    Object.assign(this.patient, { ...super.entity() });
    return new Patient(this.patient).toJson();
  }
}
