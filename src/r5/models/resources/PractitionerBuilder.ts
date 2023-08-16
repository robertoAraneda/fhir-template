import { IPractitioner } from '../../interfaces/resources';
import { IContactPoint, IAttachment, IHumanName, IIdentifier, IAddress } from '../../interfaces/datatypes';
import { IPractitionerQualification, IPractitionerCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Practitioner } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';

type ParamExtensionType = 'active' | 'birthDate' | 'deceasedBoolean' | 'deceasedDateTime';

interface IPractitionerBuilder
  extends IBuildable<Practitioner>,
    IDomainResourceBuilder<PractitionerBuilder>,
    IResourceBuilder<PractitionerBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  addName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  addAddress(address: IAddress): this;
  addPhoto(photo: IAttachment): this;
  addQualification(qualification: IPractitionerQualification): this;
  addCommunication(communication: IPractitionerCommunication): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setMultipleName(names: IHumanName[]): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setMultipleAddress(addresses: IAddress[]): this;
  setMultiplePhoto(photos: IAttachment[]): PractitionerBuilder;
  setMultipleQualification(qualifications: IPractitionerQualification[]): this;
  setMultipleCommunication(communications: IPractitionerCommunication[]): this;
  setDeceasedBoolean(deceasedBoolean: boolean): this;
  setDeceasedDateTime(deceasedDateTime: string): this;
  setActive(active: boolean): this;
  setBirthDate(birthDate: string): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
}

export default class PractitionerBuilder
  extends DomainResourceBuilder<PractitionerBuilder>
  implements IPractitionerBuilder
{
  private readonly practitioner: IPractitioner;

  constructor() {
    super();

    this.practitioner = {} as IPractitioner;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
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

  setDeceasedBoolean(deceasedBoolean: boolean): this {
    this.practitioner.deceasedBoolean = deceasedBoolean;
    return this;
  }

  setDeceasedDateTime(deceasedDateTime: string): this {
    this.practitioner.deceasedDateTime = deceasedDateTime;
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

  build(): Practitioner {
    Object.assign(this.practitioner, { ...super.entity() });
    return new Practitioner(this.practitioner).toJson();
  }
}
