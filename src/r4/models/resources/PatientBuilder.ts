import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPatientCommunication, IPatientContact, IPatientLink } from '../../interfaces/backbones';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import Patient from './Patient';

type ParamExtensionType =
  | 'implicitRules'
  | 'language'
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';

export interface IPatientBuilder
  extends IBuildable<Patient>,
    IDomainResourceBuilder<PatientBuilder>,
    IResourceBuilder<PatientBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PatientBuilder;

  addIdentifier(identifier: IIdentifier): PatientBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): PatientBuilder;

  setActive(active: boolean): PatientBuilder;

  addName(name: IHumanName): PatientBuilder;

  setMultipleName(names: IHumanName[]): PatientBuilder;

  addTelecom(telecom: IContactPoint): PatientBuilder;

  setMultipleTelecom(telecoms: IContactPoint[]): PatientBuilder;

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PatientBuilder;

  setBirthDate(birthDate: string): PatientBuilder;

  setDeceasedBoolean(deceasedBoolean: boolean): PatientBuilder;

  setDeceasedDateTime(deceasedDateTime: string): PatientBuilder;

  addAddress(address: IAddress): PatientBuilder;

  setMultipleAddress(addresses: IAddress[]): PatientBuilder;

  setMaritalStatus(maritalStatus: ICodeableConcept): PatientBuilder;

  setMultipleBirthBoolean(multipleBirthBoolean: boolean): PatientBuilder;

  setMultipleBirthInteger(multipleBirthInteger: number): PatientBuilder;

  addPhoto(photo: IAttachment): PatientBuilder;

  setMultiplePhoto(photos: IAttachment[]): PatientBuilder;

  addContact(contact: IPatientContact): PatientBuilder;

  setMultipleContact(contacts: IPatientContact[]): PatientBuilder;

  addCommunication(communication: IPatientCommunication): PatientBuilder;

  setMultipleCommunication(communications: IPatientCommunication[]): PatientBuilder;

  addGeneralPractitioner(generalPractitioner: IReference): PatientBuilder;

  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): PatientBuilder;

  setManagingOrganization(managingOrganization: IReference): PatientBuilder;

  addLink(link: IPatientLink): PatientBuilder;

  setMultipleLink(links: IPatientLink[]): PatientBuilder;
}

export class PatientBuilder extends DomainResourceBuilder<PatientBuilder> implements IPatientBuilder {
  private readonly patient: Patient;

  constructor() {
    super();
    this.patient = new Patient();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PatientBuilder {
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
      validateReferenceHelper(link.other.reference, ['Patient']);
    }
    this.patient.link = this.patient.link || [];
    this.patient.link.push(link);
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

    if (contact.organization?.reference) {
      validateReferenceHelper(contact.organization.reference, ['Organization']);
    }
    this.patient.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IPatientContact[]): PatientBuilder {
    for (const contact of contacts) {
      if (contact.organization?.reference) {
        validateReferenceHelper(contact.organization.reference, ['Organization']);
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
    if (generalPractitioner.reference) {
      validateReferenceHelper(generalPractitioner.reference, ['Practitioner', 'Organization', 'PractitionerRole']);
    }
    this.patient.generalPractitioner = this.patient.generalPractitioner || [];
    this.patient.generalPractitioner.push(generalPractitioner);
    return this;
  }

  setMultipleGeneralPractitioner(generalPractitioners: IReference[]): PatientBuilder {
    for (const generalPractitioner of generalPractitioners) {
      if (generalPractitioner.reference) {
        validateReferenceHelper(generalPractitioner.reference, ['Practitioner', 'Organization', 'PractitionerRole']);
      }
    }
    this.patient.generalPractitioner = generalPractitioners;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): PatientBuilder {
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReferenceHelper(identifier.assigner.reference, ['Organization']);
      }
    }
    this.patient.identifier = identifiers;
    return this;
  }

  setMultipleLink(links: IPatientLink[]): PatientBuilder {
    for (const link of links) {
      if (link.other?.reference) {
        validateReferenceHelper(link.other.reference, ['Patient', 'RelatedPerson']);
      }
    }
    this.patient.link = links;
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

  build(): Patient {
    Object.assign(this.patient, { ...super.entity() });
    return this.patient.toJson();
  }
}
