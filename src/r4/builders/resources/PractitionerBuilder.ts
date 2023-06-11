import { IPractitioner } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IContactPoint,
  IAttachment,
  IHumanName,
  IIdentifier,
  IAddress,
  ICodeableConcept,
} from '../../interfaces/datatypes';
import { IPractitionerQualification, IPractitionerCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Practitioner } from '../../models/resources';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamType = 'active' | 'birthDate' | 'gender';

interface IPractitionerBuilder extends IBuildable<Practitioner>, ISerializable {
  addParamExtension(param: ParamType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  addName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  addAddress(address: IAddress): this;
  addPhoto(photo: IAttachment): this;
  addQualification(qualification: IPractitionerQualification): this;
  addCommunication(communication: ICodeableConcept): this;
  setMultipleIdentifier(identifier: IIdentifier[]): this;
  setMultipleName(name: IHumanName[]): this;
  setMultipleTelecom(telecom: IContactPoint[]): this;
  setMultipleAddress(address: IAddress[]): this;
  setMultiplePhoto(photo: IAttachment[]): this;
  setMultipleQualification(qualification: IPractitionerQualification[]): this;
  setMultipleCommunication(communication: ICodeableConcept[]): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setActive(active: boolean): this;
  setBirthDate(birthDate: string): this;
}

export class PractitionerBuilder extends DomainResourceBuilder<PractitionerBuilder> implements IPractitionerBuilder {
  private readonly practitioner: IPractitioner;

  constructor() {
    super();

    this.practitioner = new Practitioner();
  }

  addParamExtension(param: ParamType, extension: IElement): this {
    this.practitioner[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.practitioner.identifier = this.practitioner.identifier || [];
    this.practitioner.identifier.push(identifier);
    return this;
  }

  addName(name: IHumanName): this {
    this.practitioner.name = this.practitioner.name || [];
    this.practitioner.name.push(name);
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.practitioner.telecom = this.practitioner.telecom || [];
    this.practitioner.telecom.push(telecom);
    return this;
  }

  addAddress(address: IAddress): this {
    this.practitioner.address = this.practitioner.address || [];
    this.practitioner.address.push(address);
    return this;
  }

  addPhoto(photo: IAttachment): this {
    this.practitioner.photo = this.practitioner.photo || [];
    this.practitioner.photo.push(photo);
    return this;
  }

  addQualification(qualification: IPractitionerQualification): this {
    if (qualification.issuer?.reference) {
      validateReference(qualification.issuer.reference, ['Organization']);
    }

    if (qualification.identifier) {
      qualification.identifier.forEach((identifier) => {
        if (identifier.assigner?.reference) {
          validateReference(identifier.assigner.reference, ['Organization']);
        }
      });
    }

    this.practitioner.qualification = this.practitioner.qualification || [];
    this.practitioner.qualification.push(qualification);
    return this;
  }

  addCommunication(communication: IPractitionerCommunication): this {
    this.practitioner.communication = this.practitioner.communication || [];
    this.practitioner.communication.push(communication);
    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): this {
    this.practitioner.identifier = identifier;
    return this;
  }

  setMultipleName(name: IHumanName[]): this {
    this.practitioner.name = name;
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): this {
    this.practitioner.telecom = telecom;
    return this;
  }

  setMultipleAddress(address: IAddress[]): this {
    this.practitioner.address = address;
    return this;
  }

  setMultiplePhoto(photo: IAttachment[]): this {
    this.practitioner.photo = photo;
    return this;
  }

  setMultipleQualification(qualification: IPractitionerQualification[]): this {
    this.practitioner.qualification = qualification;
    return this;
  }

  setMultipleCommunication(communication: IPractitionerCommunication[]): this {
    this.practitioner.communication = communication;
    return this;
  }

  setActive(active: boolean): this {
    this.practitioner.active = active;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.practitioner.birthDate = birthDate;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.practitioner.gender = gender;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Practitioner {
    return JSON.parse(this.serialize());
  }

  raw(): Practitioner {
    return {
      ...this.practitioner,
      ...super.entity(),
    };
  }
}
