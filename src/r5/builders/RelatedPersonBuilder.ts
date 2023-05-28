import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { Reference } from '../datatypes/Reference';
import { Patient } from '../resources/Patient';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { Attachment } from '../datatypes/Attachment';
import { Period } from '../datatypes/Period';
import { PersonCommunication } from '../datatypes/PersonCommunication';
import { DomainResourceBuilder } from './DomainResourceBuilder';
import { RelatedPerson } from '../resources/RelatedPerson';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { PatientLink } from '../datatypes/PatientLink';
import { BackboneElement } from '../datatypes/BackboneElement';
import { Organization } from '../resources/Organization';
import { PatientCommunication } from '../datatypes/PatientCommunication';
import { PatientContact } from '../datatypes/PatientContact';
import { Address } from '../datatypes/Address';

export class RelatedPersonBuilder extends DomainResourceBuilder<RelatedPersonBuilder, RelatedPerson> {
  private _identifier: Identifier[];
  private _active: boolean;
  private _name: HumanName[];
  private _patient: Reference<string | Patient>;
  private _relationship: CodeableConcept[];
  private _telecom: ContactPoint[];
  private _gender: AdministrativeGender | AdministrativeGenderType;
  private _birthDate: string;
  private _address: Address[];
  private _photo: Attachment[];
  private _period: Period;
  private _communication: PersonCommunication[];

  addName(name: HumanName): RelatedPersonBuilder {
    if (!this._name) this._name = [];
    this._name.push(name);

    return this;
  }

  setName(index: number, name: HumanName): RelatedPersonBuilder {
    if (!this._name) this._name = [];
    this._name[index] = name;

    return this;
  }

  setNames(names: HumanName[]): RelatedPersonBuilder {
    this._name = names;

    return this;
  }

  getHumanName(index: number) {
    if (!this._name) return null;
    return this._name[index];
  }

  getHumanNames() {
    if (!this._name) return [];
    return this._name;
  }

  setActive(active: boolean): RelatedPersonBuilder {
    this._active = active;

    return this;
  }

  getActive(): boolean {
    return this._active;
  }

  addIdentifier(identifier: Identifier): RelatedPersonBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier.push(identifier);

    return this;
  }

  setIdentifier(index: number, identifier: Identifier): RelatedPersonBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier[index] = identifier;

    return this;
  }

  setIdentifiers(identifiers: Identifier[]): RelatedPersonBuilder {
    this._identifier = identifiers;

    return this;
  }

  getIdentifier(index: number) {
    if (!this._identifier) return null;
    return this._identifier[index];
  }

  getIdentifiers() {
    if (!this._identifier) return [];
    return this._identifier;
  }

  addTelecom(telecom: ContactPoint): RelatedPersonBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom.push(telecom);

    return this;
  }

  setTelecom(index: number, telecom: ContactPoint): RelatedPersonBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom[index] = telecom;

    return this;
  }

  setTelecoms(telecoms: ContactPoint[]): RelatedPersonBuilder {
    this._telecom = telecoms;

    return this;
  }

  getTelecom(index: number) {
    if (!this._telecom) return null;
    return this._telecom[index];
  }

  getTelecoms() {
    if (!this._telecom) return [];
    return this._telecom;
  }

  setGender(gender: AdministrativeGenderVS): RelatedPersonBuilder {
    this._gender = gender;

    return this;
  }

  getGender(): AdministrativeGender | AdministrativeGenderType {
    return this._gender;
  }

  setBirthDate(birthDate: string): RelatedPersonBuilder {
    this._birthDate = birthDate;

    return this;
  }

  getBirthDate(): string | undefined {
    return this._birthDate;
  }

  addCommunication(communication: PatientCommunication): RelatedPersonBuilder {
    if (!this._communication) this._communication = [];
    this._communication.push(communication);

    return this;
  }

  setCommunication(index: number, communication: PatientCommunication): RelatedPersonBuilder {
    this._communication[index] = communication;

    return this;
  }

  setCommunications(communications: PatientCommunication[]): RelatedPersonBuilder {
    this._communication = communications;

    return this;
  }

  getCommunication(index: number) {
    return this._communication[index];
  }

  getCommunications() {
    return this._communication;
  }

  addPhoto(attachment: Attachment): RelatedPersonBuilder {
    if (!this._photo) this._photo = [];
    this._photo.push(attachment);

    return this;
  }

  setPhoto(index: number, attachment: Attachment): RelatedPersonBuilder {
    this._photo[index] = attachment;

    return this;
  }

  setMultiplePhoto(attachments: Attachment[]): RelatedPersonBuilder {
    this._photo = attachments;

    return this;
  }

  getPhoto(index: number) {
    return this._photo[index];
  }

  getPhotos() {
    return this._photo;
  }

  setPatient(patient: Reference<string | Patient>): RelatedPersonBuilder {
    this._patient = patient;

    return this;
  }

  getPatient(): Reference<string | Patient> {
    return this._patient;
  }

  addRelationship(relationship: CodeableConcept): RelatedPersonBuilder {
    if (!this._relationship) this._relationship = [];
    this._relationship.push(relationship);

    return this;
  }

  setRelationship(index: number, relationship: CodeableConcept): RelatedPersonBuilder {
    this._relationship[index] = relationship;

    return this;
  }

  setRelationships(relationships: CodeableConcept[]): RelatedPersonBuilder {
    this._relationship = relationships;

    return this;
  }

  getRelationship(index: number) {
    return this._relationship[index];
  }

  getRelationships() {
    return this._relationship;
  }

  setPeriod(period: Period): RelatedPersonBuilder {
    this._period = period;

    return this;
  }

  getPeriod(): Period {
    return this._period;
  }

  build(): RelatedPerson {
    const domain = super.build();

    return new RelatedPerson({
      ...domain,
      identifier: this._identifier,
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
