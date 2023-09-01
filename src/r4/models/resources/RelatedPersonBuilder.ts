import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IRelatedPerson } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import RelatedPerson from './RelatedPerson';

type ParamExtensionType = 'implicitRules' | 'language' | 'active' | 'gender' | 'birthDate';

export interface IRelatedPersonBuilder
  extends IBuildable<RelatedPerson>,
    IDomainResourceBuilder<RelatedPersonBuilder>,
    IResourceBuilder<RelatedPersonBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;

  addIdentifier(identifier: IIdentifier): this;

  setMultipleIdentifier(identifiers: IIdentifier[]): this;

  setActive(active: boolean): this;

  setPatient(patient: IReference): this;

  addRelationship(relationship: ICodeableConcept): this;

  setMultipleRelationship(relationships: ICodeableConcept[]): this;

  addName(name: IHumanName): this;

  setMultipleName(names: IHumanName[]): this;

  addTelecom(telecom: IContactPoint): this;

  setMultipleTelecom(telecoms: IContactPoint[]): this;

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;

  setBirthDate(birthDate: string): this;

  addAddress(address: IAddress): this;

  setMultipleAddress(addresses: IAddress[]): this;

  addPhoto(photo: IAttachment): this;

  setMultiplePhoto(photos: IAttachment[]): this;

  setPeriod(period: IPeriod): this;

  addCommunication(communication: IRelatedPersonCommunication): this;

  setMultipleCommunication(communications: IRelatedPersonCommunication[]): this;
}

export class RelatedPersonBuilder extends DomainResourceBuilder<RelatedPersonBuilder> implements IRelatedPersonBuilder {
  private readonly relatedPerson: IRelatedPerson;

  constructor() {
    super();
    this.relatedPerson = {} as IRelatedPerson;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.relatedPerson[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.relatedPerson.identifier = this.relatedPerson.identifier || [];
    this.relatedPerson.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.relatedPerson.identifier = identifiers;
    return this;
  }

  setActive(active: boolean): this {
    this.relatedPerson.active = active;
    return this;
  }

  addName(name: IHumanName): this {
    this.relatedPerson.name = this.relatedPerson.name || [];
    this.relatedPerson.name.push(name);
    return this;
  }

  setMultipleName(names: IHumanName[]): this {
    this.relatedPerson.name = names;
    return this;
  }

  setPatient(patient: IReference): this {
    this.relatedPerson.patient = patient;
    return this;
  }

  addRelationship(relationship: ICodeableConcept): this {
    this.relatedPerson.relationship = this.relatedPerson.relationship || [];
    this.relatedPerson.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationships: ICodeableConcept[]): this {
    this.relatedPerson.relationship = relationships;
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.relatedPerson.telecom = this.relatedPerson.telecom || [];
    this.relatedPerson.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.relatedPerson.telecom = telecoms;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.relatedPerson.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.relatedPerson.birthDate = birthDate;
    return this;
  }

  addAddress(address: IAddress): this {
    this.relatedPerson.address = this.relatedPerson.address || [];
    this.relatedPerson.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): this {
    this.relatedPerson.address = addresses;
    return this;
  }

  addPhoto(photo: IAttachment): this {
    this.relatedPerson.photo = this.relatedPerson.photo || [];
    this.relatedPerson.photo.push(photo);
    return this;
  }

  setMultiplePhoto(photos: IAttachment[]): this {
    this.relatedPerson.photo = photos;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.relatedPerson.period = period;
    return this;
  }

  addCommunication(communication: IRelatedPersonCommunication): this {
    this.relatedPerson.communication = this.relatedPerson.communication || [];
    this.relatedPerson.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IRelatedPersonCommunication[]): this {
    this.relatedPerson.communication = communications;
    return this;
  }

  build(): RelatedPerson {
    Object.assign(this.relatedPerson, { ...super.entity() });
    return new RelatedPerson(this.relatedPerson).toJson();
  }
}
