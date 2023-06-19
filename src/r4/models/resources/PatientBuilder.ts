import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IPatient } from '../../interfaces/resources';
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
import { validateReference } from '../../../globals/helpers/validateReference';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import Patient from './Patient';

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

export interface IPatientBuilder
  extends IBuildable<Patient>,
    ISerializable,
    IDomainResourceBuilder<IPatientBuilder>,
    IResourceBuilder<IPatientBuilder> {
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

  setDeceasedBoolean(deceasedBoolean: boolean): this;

  setDeceasedDateTime(deceasedDateTime: string): this;

  addAddress(address: IAddress): this;

  setMultipleAddress(addresses: IAddress[]): this;

  setMaritalStatus(maritalStatus: ICodeableConcept): this;

  setMultipleBirthBoolean(multipleBirthBoolean: boolean): this;

  setMultipleBirthInteger(multipleBirthInteger: number): this;

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

export class PatientBuilder extends DomainResourceBuilder<PatientBuilder> implements IPatientBuilder {
  private readonly patient: IPatient;

  constructor() {
    super();
    this.patient = new Patient();
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

  compileAsDefault(): Patient {
    return {
      ...this.patient,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): Patient {
    return JSON.parse(this.buildAsString());
  }
}
