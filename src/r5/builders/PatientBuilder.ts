import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { Patient } from '../resources/Patient';
import { AdministrativeGender } from '../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { BackboneElement } from '../datatypes/BackboneElement';
import { Organization } from '../resources/Organization';
import { Reference } from '../datatypes/Reference';
import { PatientCommunication } from '../backbones/PatientCommunication';
import { PatientLink } from '../backbones/PatientLink';
import { PatientContact } from '../backbones/PatientContact';
import { Attachment } from '../datatypes/Attachment';
import { DomainResourceBuilder } from './DomainResourceBuilder';
import { Address } from '../datatypes/Address';
import { Practitioner } from '../resources/Practitioner';
import { DomainResource } from '../datatypes/DomainResource';
import { transformReference } from '../helpers/transformReference';

type GeneralPractitionerType = Organization | Practitioner | string;
type ManagingOrganizationType = Organization | string;

export class PatientBuilder extends DomainResourceBuilder<PatientBuilder, Patient> {
  private _identifier: Identifier[];
  private _active: boolean;
  private _name: HumanName[];
  private _telecom: ContactPoint[];
  private _gender: AdministrativeGender | AdministrativeGenderType;
  private _birthDate: string;
  private _address: Address[];
  private _generalPractitioner?: Reference<GeneralPractitionerType>[];
  private _maritalStatus: CodeableConcept;
  private _multipleBirthBoolean: boolean;
  private _multipleBirthInteger: number;
  private _photo: Attachment[];
  private _contact: PatientContact[];
  private _communication: PatientCommunication[];
  private _managingOrganization: Reference<ManagingOrganizationType>;
  private _link: PatientLink[];

  createFrom(patient: Patient): PatientBuilder {
    this._id = patient.id!;
    this._meta = patient.meta!;
    this._implicitRules = patient.implicitRules!;
    this._language = patient.language!;
    this._text = patient.text!;
    this._contained = patient.contained!;
    this._extension = patient.extension!;
    this._modifierExtension = patient.modifierExtension!;
    this._identifier = patient.identifier!;
    this._active = patient.active!;
    this._name = patient.name!;
    this._telecom = patient.telecom!;
    this._gender = patient.gender!;
    this._birthDate = patient.birthDate!;
    this._address = patient.address!;
    this._generalPractitioner = patient.generalPractitioner!;
    this._maritalStatus = patient.maritalStatus!;
    this._multipleBirthBoolean = patient.multipleBirthBoolean!;
    this._multipleBirthInteger = patient.multipleBirthInteger!;
    this._photo = patient.photo!;
    this._contact = patient.contact!;
    this._communication = patient.communication!;
    this._managingOrganization = patient.managingOrganization!;
    this._link = patient.link!;

    return this;
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

  setMultipleBirth<R extends boolean | number>(multipleBirth: R): PatientBuilder {
    if (typeof multipleBirth === 'boolean') this._multipleBirthBoolean = multipleBirth;
    else if (typeof multipleBirth === 'number') this._multipleBirthInteger = multipleBirth;

    return this;
  }

  getMultipleBirth(): boolean | number {
    return this._multipleBirthBoolean || this._multipleBirthInteger;
  }

  setManagingOrganization<T extends ManagingOrganizationType>(args: Reference<T>): PatientBuilder {
    this._managingOrganization = transformReference(args, 'Organization', ['Organization']);

    return this;
  }

  getManagingOrganization(): Reference<ManagingOrganizationType> {
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

  addAddress(address: Address): PatientBuilder {
    this._address = this._address || [];
    this._address.push(address);

    return this;
  }

  setMultipleAddress(addresses: Address[]): PatientBuilder {
    this._address = addresses;

    return this;
  }

  setAddress(index: number, address: Address): PatientBuilder {
    this._address = this._address || [];
    this._address[index] = address;

    return this;
  }

  private getAddressByIndex(index: number): Address {
    this._address = this._address || [];
    return this._address[index];
  }

  findAddressByIndex(index: number) {
    return {
      get: (): Address => this.getAddressByIndex(index),
      set: (address: Address) => this.setAddress(index, address),
    };
  }

  addGeneralPractitioner<T extends GeneralPractitionerType>(generalPractitioner: Reference<T>): PatientBuilder {
    this._generalPractitioner = this._generalPractitioner || [];
    this._generalPractitioner.push(generalPractitioner);

    return this;
  }

  setMultipleGeneralPractitioner<T extends GeneralPractitionerType>(
    generalPractitioners: Reference<T>[],
  ): PatientBuilder {
    this._generalPractitioner = generalPractitioners;

    return this;
  }

  getGeneralPractitioner<T extends GeneralPractitionerType>(index: number): Reference<GeneralPractitionerType> {
    this._generalPractitioner = this._generalPractitioner || [];
    return this._generalPractitioner[index];
  }

  findGeneralPractitionerByIndex<T extends GeneralPractitionerType>(
    index: number,
  ): {
    get: () => Reference<GeneralPractitionerType>;
    set: (generalPractitioner: Reference<T>) => PatientBuilder;
  } {
    return {
      get: (): Reference<GeneralPractitionerType> => this.getGeneralPractitioner<GeneralPractitionerType>(index),
      set: (generalPractitioner: Reference<T>) => this.setGeneralPractitioner<T>(index, generalPractitioner),
    };
  }

  setGeneralPractitioner<T extends GeneralPractitionerType>(
    index: number,
    generalPractitioner: Reference<T>,
  ): PatientBuilder {
    this._generalPractitioner = this._generalPractitioner || [];
    this._generalPractitioner[index] = generalPractitioner;

    return this;
  }

  build(): Patient {
    const domainBuilder = super.build();
    const patient = new Patient({
      resourceType: 'Patient',
      ...domainBuilder,
      generalPractitioner: this._generalPractitioner,
      address: this._address,
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

    return patient;
  }
}
