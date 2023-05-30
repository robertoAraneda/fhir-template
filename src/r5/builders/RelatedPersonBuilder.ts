import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { Reference } from '../datatypes/Reference';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { Attachment } from '../datatypes/Attachment';
import { Period } from '../datatypes/Period';
import { DomainResourceBuilder } from './DomainResourceBuilder';
import { RelatedPerson } from '../resources/RelatedPerson';
import { Address } from '../datatypes/Address';
import { RelatedPersonPatientReferenceType } from '../types/RelatedPersonTypes';
import { transformReference } from '../helpers/transformReference';
import { RelatedPersonCommunication } from '../backbones/RelatedPersonCommunication';

export class RelatedPersonBuilder extends DomainResourceBuilder<RelatedPersonBuilder, RelatedPerson> {
  private _identifier: Identifier[];
  private _active: boolean;
  private _name: HumanName[];
  private _patient: Reference<RelatedPersonPatientReferenceType>;
  private _relationship: CodeableConcept[];
  private _telecom: ContactPoint[];
  private _gender: AdministrativeGender | AdministrativeGenderType;
  private _birthDate: string;
  private _address: Address[];
  private _photo: Attachment[];
  private _period: Period;
  private _communication: RelatedPersonCommunication[];

  addName(name: HumanName): RelatedPersonBuilder {
    this._name = this._name || [];
    this._name.push(name);

    return this;
  }

  setMultipleName(names: HumanName[]): RelatedPersonBuilder {
    this._name = names;

    return this;
  }

  addAddress(address: Address): RelatedPersonBuilder {
    this._address = this._address || [];
    this._address.push(address);

    return this;
  }

  setMultipleAddress(addresses: Address[]): RelatedPersonBuilder {
    this._address = addresses;

    return this;
  }

  setActive(active: boolean): RelatedPersonBuilder {
    this._active = active;

    return this;
  }

  addIdentifier(identifier: Identifier): RelatedPersonBuilder {
    this._identifier = this._identifier || [];
    this._identifier.push(identifier);

    return this;
  }

  setMultipleIdentifier(identifiers: Identifier[]): RelatedPersonBuilder {
    this._identifier = identifiers;

    return this;
  }

  addTelecom(telecom: ContactPoint): RelatedPersonBuilder {
    this._telecom = this._telecom || [];
    this._telecom.push(telecom);

    return this;
  }

  setMultipleTelecom(telecoms: ContactPoint[]): RelatedPersonBuilder {
    this._telecom = telecoms;

    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): RelatedPersonBuilder {
    this._gender = gender;

    return this;
  }

  setBirthDate(birthDate: string): RelatedPersonBuilder {
    this._birthDate = birthDate;

    return this;
  }

  addCommunication(communication: RelatedPersonCommunication): RelatedPersonBuilder {
    this._communication = this._communication || [];
    this._communication.push(communication);

    return this;
  }

  setMultipleCommunication(communications: RelatedPersonCommunication[]): RelatedPersonBuilder {
    this._communication = communications;

    return this;
  }

  addPhoto(attachment: Attachment): RelatedPersonBuilder {
    this._photo = this._photo || [];
    this._photo.push(attachment);

    return this;
  }

  setMultiplePhoto(attachments: Attachment[]): RelatedPersonBuilder {
    this._photo = attachments;

    return this;
  }

  setPatient<T extends RelatedPersonPatientReferenceType>(patient: Reference<T>): RelatedPersonBuilder {
    this._patient = transformReference(patient, 'patient', ['Patient']);

    return this;
  }

  addRelationship(relationship: CodeableConcept): RelatedPersonBuilder {
    this._relationship = this._relationship || [];
    this._relationship.push(relationship);

    return this;
  }

  setMultipleRelationship(relationships: CodeableConcept[]): RelatedPersonBuilder {
    this._relationship = relationships;

    return this;
  }

  setPeriod(period: Period): RelatedPersonBuilder {
    this._period = period;

    return this;
  }

  build(): RelatedPerson {
    const domain = super.build();

    return new RelatedPerson({
      ...domain,
      identifier: this._identifier || undefined,
      active: this._active,
      name: this._name,
      patient: this._patient,
      relationship: this._relationship,
      telecom: this._telecom,
      gender: this._gender,
      birthDate: this._birthDate,
      address: this._address,
      photo: this._photo,
      period: this._period,
      communication: this._communication,
    });
  }
}
