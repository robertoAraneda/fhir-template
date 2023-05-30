import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Attachment } from '../datatypes/Attachment';
import { PatientContact } from '../backbones/PatientContact';
import { PatientCommunication } from '../backbones/PatientCommunication';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { PatientLink } from '../backbones/PatientLink';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { Patient } from '../resources/Patient';
import { BackboneElement } from '../datatypes/BackboneElement';
import { Person } from '../resources/Person';
import { PersonLink } from '../backbones/PersonLink';
import { PersonCommunication } from '../backbones/PersonCommunication';

export class PersonBuilder {
  private _id: number;
  private _identifier: Identifier[];
  private _active: boolean;
  private _name: HumanName[];
  private _telecom: ContactPoint[];
  private _gender: AdministrativeGender | AdministrativeGenderType;
  private _birthDate: string;
  private _maritalStatus: CodeableConcept;
  private _multipleBirth: boolean | number;
  private _multipleBirthBoolean: boolean;
  private _multipleBirthInteger: number;
  private _photo: Attachment[];
  private _communication: PersonCommunication[];
  private _managingOrganization: Reference<Organization | string>;
  private _link: PersonLink[];

  setId(id: number): PersonBuilder {
    this._id = id;

    return this;
  }

  getId(): number | undefined {
    return this._id;
  }

  addName(name: HumanName): PersonBuilder {
    if (!this._name) this._name = [];
    this._name.push(name);

    return this;
  }

  setName(index: number, name: HumanName): PersonBuilder {
    if (!this._name) this._name = [];
    this._name[index] = name;

    return this;
  }

  setNames(names: HumanName[]): PersonBuilder {
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

  setActive(active: boolean): PersonBuilder {
    this._active = active;

    return this;
  }

  getActive(): boolean {
    return this._active;
  }

  addIdentifier(identifier: Identifier): PersonBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier.push(identifier);

    return this;
  }

  setIdentifier(index: number, identifier: Identifier): PersonBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier[index] = identifier;

    return this;
  }

  setIdentifiers(identifiers: Identifier[]): PersonBuilder {
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

  addTelecom(telecom: ContactPoint): PersonBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom.push(telecom);

    return this;
  }

  setTelecom(index: number, telecom: ContactPoint): PersonBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom[index] = telecom;

    return this;
  }

  setTelecoms(telecoms: ContactPoint[]): PersonBuilder {
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

  setGender(gender: AdministrativeGenderVS): PersonBuilder {
    this._gender = gender;

    return this;
  }

  getGender(): AdministrativeGender | AdministrativeGenderType {
    return this._gender;
  }

  setBirthDate(birthDate: string): PersonBuilder {
    this._birthDate = birthDate;

    return this;
  }

  getBirthDate(): string | undefined {
    return this._birthDate;
  }

  setMaritalStatus(maritalStatus: CodeableConcept): PersonBuilder {
    this._maritalStatus = maritalStatus;

    return this;
  }

  getMaritalStatus(): CodeableConcept {
    return this._maritalStatus;
  }

  addLink(link: PersonLink): PersonBuilder {
    if (typeof link.target.reference === 'string') {
      const target = link.target.reference as string;
      if (
        !target.startsWith('Patient/') &&
        !target.startsWith('Practitioner/') &&
        !target.startsWith('RelatedPerson/') &&
        !target.startsWith('Person/')
      ) {
        throw new Error('Link.other.reference must start with Patient/ or Practitioner/ or RelatedPerson/ or Person/');
      }
    }

    if (link.target.reference) {
      link.target = new Reference<Person>(link.target as Reference<Person>);
    }

    if (!this._link) this._link = [];
    this._link.push(link);

    return this;
  }

  setLink(index: number, link: PersonLink): PersonBuilder {
    this._link[index] = link;

    return this;
  }

  setLinks(links: PersonLink[]): PersonBuilder {
    this._link = links;

    return this;
  }

  getLink(index: number): BackboneElement {
    return this._link[index];
  }

  getLinks(): BackboneElement[] {
    return this._link;
  }

  setMultipleBirth(multipleBirth: boolean | number): PersonBuilder {
    this._multipleBirth = multipleBirth;

    return this;
  }

  getMultipleBirth(): boolean | number {
    return this._multipleBirthBoolean || this._multipleBirthInteger;
  }

  setManagingOrganization(args: Reference<Organization | string>): PersonBuilder {
    if (!args) throw new Error('Managing organization reference is required');

    if (!(args.reference instanceof Organization) && typeof args.reference !== 'string') {
      throw new Error('Managing organization reference must be an instance of Organization');
    }

    if (typeof args.reference === 'string' && !args.reference.startsWith('Organization/')) {
      throw new Error('Managing organization reference must start with Organization/');
    }

    if (typeof args.reference !== 'string') {
      const reference = args.reference as Organization;
      args.reference = `Organization/${reference.id}`;
    }

    this._managingOrganization = args;

    return this;
  }

  getManagingOrganization(): Reference<Organization | string> {
    return this._managingOrganization;
  }

  addCommunication(communication: PatientCommunication): PersonBuilder {
    if (!this._communication) this._communication = [];
    this._communication.push(communication);

    return this;
  }

  setCommunication(index: number, communication: PatientCommunication): PersonBuilder {
    this._communication[index] = communication;

    return this;
  }

  setCommunications(communications: PersonCommunication[]): PersonBuilder {
    this._communication = communications;

    return this;
  }

  getCommunication(index: number) {
    return this._communication[index];
  }

  getCommunications() {
    return this._communication;
  }

  addPhoto(attachment: Attachment): PersonBuilder {
    if (!this._photo) this._photo = [];
    this._photo.push(attachment);

    return this;
  }

  setPhoto(index: number, attachment: Attachment): PersonBuilder {
    this._photo[index] = attachment;

    return this;
  }

  setMultiplePhoto(attachments: Attachment[]): PersonBuilder {
    this._photo = attachments;

    return this;
  }

  getPhoto(index: number) {
    return this._photo[index];
  }

  getPhotos() {
    return this._photo;
  }

  build() {
    if (typeof this._multipleBirth === 'number') {
      this._multipleBirthInteger = this._multipleBirth;
    } else {
      this._multipleBirthBoolean = this._multipleBirth;
    }
    return new Person({
      id: this._id,
      name: this._name,
      active: this._active,
      identifier: this._identifier,
      telecom: this._telecom,
      birthDate: this._birthDate,
      link: this._link,
      gender: this._gender,
      maritalStatus: this._maritalStatus,
      communication: this._communication,
      photo: this._photo,
      managingOrganization: this._managingOrganization,
      multipleBirthBoolean: this._multipleBirthBoolean,
      multipleBirthInteger: this._multipleBirthInteger,
    });
  }
}
