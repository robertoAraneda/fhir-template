import { IRelatedPerson } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  INarrative,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../../builders/base/DomainResourceBuilder';
import { validateReference } from '../../../globals/helpers/validateReference';
import { IResourceBuilder } from '../../builders/base/ResourceBuilder';
import DomainResource from './DomainResource';

export default class RelatedPerson extends DomainResource implements IRelatedPerson {
  resourceType = 'RelatedPerson';

  // RelatedPerson attributes
  identifier?: IIdentifier[];
  active?: boolean;
  patient?: IReference;
  relationship?: ICodeableConcept[];
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment[];
  period?: IPeriod;
  communication?: IRelatedPersonCommunication[];

  _active?: IElement;
  _birthDate?: IElement;
  _gender?: IElement;

  static get resourceType(): string {
    return 'RelatedPerson';
  }

  static builder(): IRelatedPersonBuilder {
    return new RelatedPersonBuilder();
  }

  constructor(args?: RelatedPerson) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'implicitRules' | 'language' | 'active' | 'gender' | 'birthDate';

export interface IRelatedPersonBuilder
  extends IBuildable<RelatedPerson>,
    ISerializable,
    IDomainResourceBuilder<IRelatedPersonBuilder>,
    IResourceBuilder<IRelatedPersonBuilder> {
  addParamExtension(param: ParamType, extension: IElement): this;
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

class RelatedPersonBuilder extends DomainResourceBuilder<RelatedPersonBuilder> implements IRelatedPersonBuilder {
  private readonly relatedPerson: IRelatedPerson;

  constructor() {
    super();
    this.relatedPerson = new RelatedPerson();
  }

  addParamExtension(param: ParamType, extension: IElement): this {
    this.relatedPerson[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner?.reference, ['Organization']);
    }

    this.relatedPerson.identifier = this.relatedPerson.identifier || [];
    this.relatedPerson.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner?.reference, ['Organization']);
      }
    });

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
    if (patient.reference) {
      validateReference(patient.reference, ['Patient']);
    }

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
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): RelatedPerson {
    return {
      ...this.relatedPerson,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }
}
