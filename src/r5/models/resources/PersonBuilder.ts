import { IPersonCommunication, IPersonLink, IPatientCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import {
  IIdentifier,
  ICodeableConcept,
  IHumanName,
  IAttachment,
  IContactPoint,
  IReference,
} from '../../interfaces/datatypes';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Person } from './index';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IPerson } from '../../interfaces/resources';

type ParamExtensionType = 'active' | 'birthDate' | 'gender' | 'deceasedBoolean' | 'deceasedDateTime';

export interface IPersonBuilder
  extends IBuildable<Person>,
    IDomainResourceBuilder<PersonBuilder>,
    IResourceBuilder<PersonBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  addName(name: IHumanName): this;
  addMultipleName(names: IHumanName[]): this;
  setActive(active: boolean): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  setMaritalStatus(maritalStatus: ICodeableConcept): this;
  addLink(link: IPersonLink): this;
  setMultipleLink(links: IPersonLink[]): this;
  setManagingOrganization(managingOrganization: IReference): this;
  addCommunication(communication: IPersonCommunication): this;
  setMultipleCommunication(communications: IPersonCommunication[]): this;
  addPhoto(photo: IAttachment): this;
  setMultiplePhoto(photos: IAttachment[]): this;
}

export default class PersonBuilder extends DomainResourceBuilder<PersonBuilder> implements IPersonBuilder {
  private readonly person: IPerson;
  constructor() {
    super();
    this.person = {} as IPerson;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.person[`_${param}`] = extension;
    return this;
  }

  addName(name: IHumanName): this {
    this.person.name = this.person.name || [];
    this.person.name.push(name);
    return this;
  }

  addMultipleName(names: IHumanName[]): this {
    this.person.name = names;
    return this;
  }

  setActive(active: boolean): this {
    this.person.active = active;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.person.identifier = this.person.identifier || [];
    this.person.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => this.addIdentifier(identifier));
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.person.telecom = this.person.telecom || [];
    this.person.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    telecoms.forEach((telecom) => this.addTelecom(telecom));
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.person.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.person.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: ICodeableConcept): this {
    this.person.maritalStatus = maritalStatus;
    return this;
  }

  addLink(link: IPersonLink): this {
    this.person.link = this.person.link || [];
    this.person.link.push(link);
    return this;
  }

  setMultipleLink(links: IPersonLink[]): this {
    links.forEach((link) => this.addLink(link));

    return this;
  }

  setManagingOrganization(args: IReference): this {
    this.person.managingOrganization = args;
    return this;
  }

  addCommunication(communication: IPatientCommunication): this {
    this.person.communication = this.person.communication || [];
    this.person.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IPersonCommunication[]): this {
    this.person.communication = communications;
    return this;
  }

  addPhoto(attachment: IAttachment): this {
    this.person.photo = this.person.photo || [];
    this.person.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: IAttachment[]): this {
    attachments.forEach((attachment) => this.addPhoto(attachment));
    return this;
  }

  build(): Person {
    Object.assign(this.person, { ...super.entity() });
    return new Person(this.person).toJson();
  }
}
