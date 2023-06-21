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
import { validateReference } from '../../../globals/helpers/validateReference';
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
  addParamExtension(param: ParamExtensionType, extension: IElement): PatientBuilder;
  addName(name: IHumanName): PatientBuilder;
  setActive(active: boolean): PatientBuilder;
  addIdentifier(identifier: IIdentifier): PatientBuilder;
  addTelecom(telecom: IContactPoint): PatientBuilder;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PatientBuilder;
  setBirthDate(birthDate: string): PatientBuilder;
  setMaritalStatus(maritalStatus: ICodeableConcept): PatientBuilder;
  addLink(link: IPatientLink): PatientBuilder;
  setManagingOrganization(managingOrganization: IReference): PatientBuilder;
  addCommunication(communication: IPatientCommunication): PatientBuilder;
  addContact(contact: IPatientContact): PatientBuilder;
  addAddress(address: IAddress): PatientBuilder;
  addPhoto(photo: IAttachment): PatientBuilder;
  addGeneralPractitioner(generalPractitioner: IReference): PatientBuilder;
  setMultipleName(names: IHumanName[]): PatientBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): PatientBuilder;
  setMultipleTelecom(telecoms: IContactPoint[]): PatientBuilder;
  setMultipleLink(links: IPatientLink[]): PatientBuilder;
  setMultipleCommunication(communications: IPatientCommunication[]): PatientBuilder;
  setMultipleContact(contacts: IPatientContact[]): PatientBuilder;
  setMultipleAddress(addresses: IAddress[]): PatientBuilder;
  setMultiplePhoto(photos: IAttachment[]): PatientBuilder;
  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): PatientBuilder;
  setDeceasedDateTime(deceasedDateTime: string): PatientBuilder;
  setDeceasedBoolean(deceasedBoolean: boolean): PatientBuilder;
  setMultipleBirthInteger(multipleBirthInteger: number): PatientBuilder;
  setMultipleBirthBoolean(multipleBirthBoolean: boolean): PatientBuilder;
}

export default class PatientBuilder extends DomainResourceBuilder<PatientBuilder> implements IPatientBuilder {
  private readonly patient: Patient;

  constructor() {
    super();
    this.patient = new Patient();
  }

  addParamExtension(param: ParamExtensionType, extension: IElement): PatientBuilder {
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
    if (link.other?.reference) {
      validateReference(link.other.reference, ['Patient']);
    }
    this.patient.link = this.patient.link || [];
    this.patient.link.push(link);
    return this;
  }

  setMultipleLink(links: IPatientLink[]): PatientBuilder {
    this.patient.link = links;
    return this;
  }

  setManagingOrganization(args: IReference): PatientBuilder {
    if (args?.reference) {
      validateReference(args.reference, ['Organization']);
    }
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
    if (contact.organization?.reference) {
      validateReference(contact.organization.reference, ['Organization']);
    }

    this.patient.contact = this.patient.contact || [];

    this.patient.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IPatientContact[]): PatientBuilder {
    for (const contact of contacts) {
      if (contact.organization?.reference) {
        validateReference(contact.organization.reference, ['Organization']);
      }
    }
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

  setMultipleIdentifier(identifiers: IIdentifier[]): PatientBuilder {
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    }

    this.patient.identifier = identifiers;
    return this;
  }

  setMultipleName(names: IHumanName[]): PatientBuilder {
    this.patient.name = names;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): PatientBuilder {
    this.patient.telecom = telecoms;
    return this;
  }

  setDeceasedBoolean(deceasedBoolean: boolean): PatientBuilder {
    this.patient.deceasedBoolean = deceasedBoolean;
    return this;
  }

  setDeceasedDateTime(deceasedDateTime: string): PatientBuilder {
    this.patient.deceasedDateTime = deceasedDateTime;
    return this;
  }

  setMultipleBirthBoolean(multipleBirthBoolean: boolean): PatientBuilder {
    this.patient.multipleBirthBoolean = multipleBirthBoolean;
    return this;
  }

  setMultipleBirthInteger(multipleBirthInteger: number): PatientBuilder {
    this.patient.multipleBirthInteger = multipleBirthInteger;
    return this;
  }

  build(): Patient {
    Object.assign(this.patient, { ...super.entity() });
    return this.patient.toJson();
  }
}
