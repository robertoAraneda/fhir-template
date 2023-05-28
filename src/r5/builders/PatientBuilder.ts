import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { Patient } from '../resources/Patient';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { BackboneElement } from '../datatypes/BackboneElement';
import { Organization } from '../resources/Organization';
import { Reference } from '../datatypes/Reference';
import { PatientCommunication } from '../datatypes/PatientCommunication';
import { PatientLink } from '../datatypes/PatientLink';
import { PatientContact } from '../datatypes/PatientContact';
import { Attachment } from '../datatypes/Attachment';

export class PatientBuilder {
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
  private _contact: PatientContact[];
  private _communication: PatientCommunication[];
  private _managingOrganization: Reference<Organization | string>;
  private _link: PatientLink[];

  setId(id: number): PatientBuilder {
    this._id = id;

    return this;
  }

  getId(): number | undefined {
    return this._id;
  }

  addName(name: HumanName): PatientBuilder {
    if (!this._name) this._name = [];
    this._name.push(name);

    return this;
  }

  setName(index: number, name: HumanName): PatientBuilder {
    if (!this._name) this._name = [];
    this._name[index] = name;

    return this;
  }

  setNames(names: HumanName[]): PatientBuilder {
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

  setActive(active: boolean): PatientBuilder {
    this._active = active;

    return this;
  }

  getActive(): boolean {
    return this._active;
  }

  addIdentifier(identifier: Identifier): PatientBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier.push(identifier);

    return this;
  }

  setIdentifier(index: number, identifier: Identifier): PatientBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier[index] = identifier;

    return this;
  }

  setIdentifiers(identifiers: Identifier[]): PatientBuilder {
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

  addTelecom(telecom: ContactPoint): PatientBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom.push(telecom);

    return this;
  }

  setTelecom(index: number, telecom: ContactPoint): PatientBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom[index] = telecom;

    return this;
  }

  setTelecoms(telecoms: ContactPoint[]): PatientBuilder {
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

  setGender(gender: AdministrativeGenderVS): PatientBuilder {
    this._gender = gender;

    return this;
  }

  getGender(): AdministrativeGender | AdministrativeGenderType {
    return this._gender;
  }

  setBirthDate(birthDate: string): PatientBuilder {
    this._birthDate = birthDate;

    return this;
  }

  getBirthDate(): string | undefined {
    return this._birthDate;
  }

  setMaritalStatus(maritalStatus: CodeableConcept): PatientBuilder {
    this._maritalStatus = maritalStatus;

    return this;
  }

  getMaritalStatus(): CodeableConcept {
    return this._maritalStatus;
  }

  addLink(link: PatientLink): PatientBuilder {
    if (typeof link.other.reference === 'string') {
      if (!link.other.reference?.startsWith('Patient/'))
        throw new Error('Link.other.reference must start with Patient/');
    }

    if (link.other.reference) {
      link.other = new Reference<Patient | string>(link.other);
    }

    if (!this._link) this._link = [];
    this._link.push(link);

    return this;
  }

  setLink(index: number, link: PatientLink): PatientBuilder {
    this._link[index] = link;

    return this;
  }

  setLinks(links: PatientLink[]): PatientBuilder {
    this._link = links;

    return this;
  }

  getLink(index: number): BackboneElement {
    return this._link[index];
  }

  getLinks(): BackboneElement[] {
    return this._link;
  }

  setMultipleBirth(multipleBirth: boolean | number): PatientBuilder {
    this._multipleBirth = multipleBirth;

    return this;
  }

  getMultipleBirth(): boolean | number {
    return this._multipleBirthBoolean || this._multipleBirthInteger;
  }

  setManagingOrganization(args: Reference<Organization | string>): PatientBuilder {
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

  addCommunication(communication: PatientCommunication): PatientBuilder {
    if (!this._communication) this._communication = [];
    this._communication.push(communication);

    return this;
  }

  setCommunication(index: number, communication: PatientCommunication): PatientBuilder {
    this._communication[index] = communication;

    return this;
  }

  setCommunications(communications: PatientCommunication[]): PatientBuilder {
    this._communication = communications;

    return this;
  }

  getCommunication(index: number) {
    return this._communication[index];
  }

  getCommunications() {
    return this._communication;
  }

  addContact(contact: PatientContact): PatientBuilder {
    if (!this._contact) this._contact = [];

    if (contact.organization) {
      if (typeof contact.organization.reference === 'string') {
        if (!contact.organization.reference.startsWith('Organization/')) {
          throw new Error('Contact.organization.reference must start with Organization/');
        }
      }
      contact.organization = new Reference<Organization | string>(contact.organization);
    }
    this._contact.push(contact);

    return this;
  }

  setContact(index: number, contact: PatientContact): PatientBuilder {
    if (contact.organization) {
      if (typeof contact.organization.reference === 'string') {
        if (!contact.organization.reference.startsWith('Organization/')) {
          throw new Error('Contact.organization.reference must start with Organization/');
        }
      }
      contact.organization = new Reference<Organization | string>(contact.organization);
    }

    this._contact[index] = contact;

    return this;
  }

  setMultipleContact(contacts: PatientContact[]): PatientBuilder {
    for (const contact of contacts) {
      if (contact.organization) {
        if (typeof contact.organization.reference === 'string') {
          if (!contact.organization.reference.startsWith('Organization/')) {
            throw new Error('Contact.organization.reference must start with Organization/');
          }
        }
        contact.organization = new Reference<Organization | string>(contact.organization);
      }
    }
    this._contact = contacts;

    return this;
  }

  getContact(index: number) {
    return this._contact[index];
  }

  getContacts() {
    return this._contact;
  }

  addPhoto(attachment: Attachment): PatientBuilder {
    if (!this._photo) this._photo = [];
    this._photo.push(attachment);

    return this;
  }

  setPhoto(index: number, attachment: Attachment): PatientBuilder {
    this._photo[index] = attachment;

    return this;
  }

  setMultiplePhoto(attachments: Attachment[]): PatientBuilder {
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
    return new Patient({
      id: this._id,
      resourceType: 'Person',
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
      contact: this._contact,
      managingOrganization: this._managingOrganization,
      multipleBirthBoolean: this._multipleBirthBoolean,
      multipleBirthInteger: this._multipleBirthInteger,
    });
  }
}
