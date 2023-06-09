import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable, ISerializable, IReference, IElement } from '../../interfaces/base';
import { IRelatedPerson } from '../../interfaces/resources';
import {
  IIdentifier,
  IHumanName,
  IContactPoint,
  IAddress,
  IAttachment,
  IPeriod,
  ICodeableConcept,
} from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { RelatedPerson } from '../../models/resources/RelatedPerson';

export class RelatedPersonBuilder
  extends DomainResourceBuilder<RelatedPersonBuilder>
  implements IBuildable<RelatedPerson>, ISerializable
{
  private readonly relatedPerson: IRelatedPerson;

  constructor() {
    super();
    this.relatedPerson = new RelatedPerson();
  }

  addRelatedPersonParamExtension(param: 'active' | 'gender' | 'birthDate', extension: IElement): RelatedPersonBuilder {
    this.relatedPerson[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): RelatedPersonBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner?.reference, ['Organization']);
    }

    this.relatedPerson.identifier = this.relatedPerson.identifier || [];
    this.relatedPerson.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): RelatedPersonBuilder {
    identifiers.forEach((identifier) => {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner?.reference, ['Organization']);
      }
    });

    this.relatedPerson.identifier = identifiers;
    return this;
  }

  setActive(active: boolean): RelatedPersonBuilder {
    this.relatedPerson.active = active;
    return this;
  }

  addName(name: IHumanName): RelatedPersonBuilder {
    this.relatedPerson.name = this.relatedPerson.name || [];
    this.relatedPerson.name.push(name);
    return this;
  }

  setMultipleName(names: IHumanName[]): RelatedPersonBuilder {
    this.relatedPerson.name = names;
    return this;
  }

  setPatient(patient: IReference): RelatedPersonBuilder {
    if (patient.reference) {
      validateReference(patient.reference, ['Patient']);
    }

    this.relatedPerson.patient = patient;
    return this;
  }

  addRelationship(relationship: ICodeableConcept): RelatedPersonBuilder {
    this.relatedPerson.relationship = this.relatedPerson.relationship || [];
    this.relatedPerson.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationships: ICodeableConcept[]): RelatedPersonBuilder {
    this.relatedPerson.relationship = relationships;
    return this;
  }

  addTelecom(telecom: IContactPoint): RelatedPersonBuilder {
    this.relatedPerson.telecom = this.relatedPerson.telecom || [];
    this.relatedPerson.telecom.push(telecom);
    return this;
  }
  setMultipleTelecom(telecoms: IContactPoint[]): RelatedPersonBuilder {
    this.relatedPerson.telecom = telecoms;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): RelatedPersonBuilder {
    this.relatedPerson.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): RelatedPersonBuilder {
    this.relatedPerson.birthDate = birthDate;
    return this;
  }

  addAddress(address: IAddress): RelatedPersonBuilder {
    this.relatedPerson.address = this.relatedPerson.address || [];
    this.relatedPerson.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): RelatedPersonBuilder {
    this.relatedPerson.address = addresses;
    return this;
  }

  addPhoto(photo: IAttachment): RelatedPersonBuilder {
    this.relatedPerson.photo = this.relatedPerson.photo || [];
    this.relatedPerson.photo.push(photo);
    return this;
  }

  setMultiplePhoto(photos: IAttachment[]): RelatedPersonBuilder {
    this.relatedPerson.photo = photos;
    return this;
  }

  setPeriod(period: IPeriod): RelatedPersonBuilder {
    this.relatedPerson.period = period;
    return this;
  }

  addCommunication(communication: IRelatedPersonCommunication): RelatedPersonBuilder {
    this.relatedPerson.communication = this.relatedPerson.communication || [];
    this.relatedPerson.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IRelatedPersonCommunication[]): RelatedPersonBuilder {
    this.relatedPerson.communication = communications;
    return this;
  }
  build(): RelatedPerson {
    return JSON.parse(this.serialize());
  }

  raw(): RelatedPerson {
    return {
      ...this.relatedPerson,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }
}
