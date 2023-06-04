import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Build } from '../../interfaces/base/Build';
import { RelatedPerson } from '../../interfaces/resources/RelatedPerson';
import { Serialize } from '../../interfaces/base/Serialize';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { validateReference } from '../../helpers/validateReference';
import { HumanName } from '../../interfaces/datatypes/HumanName';
import { Reference } from '../../interfaces/base/Reference';
import { ContactPoint } from '../../interfaces/datatypes/ContactPoint';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Address } from '../../interfaces/datatypes/Address';
import { Attachment } from '../../interfaces/datatypes/Attachment';
import { Period } from '../../interfaces/datatypes/Period';
import { RelatedPersonCommunication } from '../../interfaces/backbones/RelatedPersonCommunication';
import { Element } from '../../interfaces/base/Element';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';

export class RelatedPersonBuilder
  extends DomainResourceBuilder<RelatedPersonBuilder>
  implements Build<RelatedPerson>, Serialize
{
  private readonly relatedPerson: RelatedPerson;

  constructor() {
    super();
    this.relatedPerson = {} as RelatedPerson;
    this.relatedPerson.resourceType = 'RelatedPerson';
  }

  addRelatedPersonParamExtension(param: 'active' | 'gender' | 'birthDate', extension: Element): RelatedPersonBuilder {
    this.relatedPerson[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: Identifier): RelatedPersonBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner?.reference, ['Organization']);
    }

    this.relatedPerson.identifier = this.relatedPerson.identifier || [];
    this.relatedPerson.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: Identifier[]): RelatedPersonBuilder {
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

  addName(name: HumanName): RelatedPersonBuilder {
    this.relatedPerson.name = this.relatedPerson.name || [];
    this.relatedPerson.name.push(name);
    return this;
  }

  setMultipleName(names: HumanName[]): RelatedPersonBuilder {
    this.relatedPerson.name = names;
    return this;
  }

  setPatient(patient: Reference): RelatedPersonBuilder {
    if (patient.reference) {
      validateReference(patient.reference, ['Patient']);
    }

    this.relatedPerson.patient = patient;
    return this;
  }

  addRelationship(relationship: CodeableConcept): RelatedPersonBuilder {
    this.relatedPerson.relationship = this.relatedPerson.relationship || [];
    this.relatedPerson.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationships: CodeableConcept[]): RelatedPersonBuilder {
    this.relatedPerson.relationship = relationships;
    return this;
  }

  addTelecom(telecom: ContactPoint): RelatedPersonBuilder {
    this.relatedPerson.telecom = this.relatedPerson.telecom || [];
    this.relatedPerson.telecom.push(telecom);
    return this;
  }
  setMultipleTelecom(telecoms: ContactPoint[]): RelatedPersonBuilder {
    this.relatedPerson.telecom = telecoms;
    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): RelatedPersonBuilder {
    this.relatedPerson.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): RelatedPersonBuilder {
    this.relatedPerson.birthDate = birthDate;
    return this;
  }

  addAddress(address: Address): RelatedPersonBuilder {
    this.relatedPerson.address = this.relatedPerson.address || [];
    this.relatedPerson.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: Address[]): RelatedPersonBuilder {
    this.relatedPerson.address = addresses;
    return this;
  }

  addPhoto(photo: Attachment): RelatedPersonBuilder {
    this.relatedPerson.photo = this.relatedPerson.photo || [];
    this.relatedPerson.photo.push(photo);
    return this;
  }

  setMultiplePhoto(photos: Attachment[]): RelatedPersonBuilder {
    this.relatedPerson.photo = photos;
    return this;
  }

  setPeriod(period: Period): RelatedPersonBuilder {
    this.relatedPerson.period = period;
    return this;
  }

  addCommunication(communication: RelatedPersonCommunication): RelatedPersonBuilder {
    this.relatedPerson.communication = this.relatedPerson.communication || [];
    this.relatedPerson.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: RelatedPersonCommunication[]): RelatedPersonBuilder {
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
