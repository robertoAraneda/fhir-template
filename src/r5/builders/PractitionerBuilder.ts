import { DomainResourceBuilder } from './DomainResourceBuilder';
import { Practitioner } from '../resources/Practitioner';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { Address } from '../datatypes/Address';
import { Attachment } from '../datatypes/Attachment';
import { PractitionerQualification } from '../datatypes/PractitionerQualification';
import { PractitionerCommunication } from '../datatypes/PractitionerCommunication';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { PractitionerCommunicationBuilder } from './PractitionerCommunicationBuilder';

type deceased = boolean | string;

export class PractitionerBuilder extends DomainResourceBuilder<PractitionerBuilder, Practitioner> {
  private _identifier: Identifier[];
  private _active: boolean;
  private _name: HumanName[];
  private _telecom: ContactPoint[];
  private _gender: AdministrativeGender | AdministrativeGenderType;
  private _birthDate: string;
  private _deceased: boolean | string;
  private _deceasedBoolean: boolean;
  private _deceasedDateTime: string;
  private _address: Address[];
  private _photo: Attachment[];
  private _qualification: PractitionerQualification[];
  private _communication: PractitionerCommunication[];

  addIdentifier(identifier: Identifier): PractitionerBuilder {
    this._identifier = this._identifier || [];
    this._identifier.push(identifier);
    return this;
  }

  addName(name: HumanName): PractitionerBuilder {
    this._name = this._name || [];
    this._name.push(name);
    return this;
  }

  addTelecom(telecom: ContactPoint): PractitionerBuilder {
    this._telecom = this._telecom || [];
    this._telecom.push(telecom);
    return this;
  }

  addAddress(address: Address): PractitionerBuilder {
    this._address = this._address || [];
    this._address.push(address);
    return this;
  }

  addPhoto(photo: Attachment): PractitionerBuilder {
    this._photo = this._photo || [];
    this._photo.push(photo);
    return this;
  }

  addQualification(qualification: PractitionerQualification): PractitionerBuilder {
    this._qualification = this._qualification || [];

    if (typeof qualification.issuer?.reference === 'string') {
      qualification.issuer = { reference: qualification.issuer.reference };
    }

    if (typeof qualification.issuer?.reference !== 'string') {
      qualification.issuer = new Reference<Organization | string>(qualification.issuer);
    }

    if (qualification.identifier) {
      qualification.identifier.forEach((identifier) => {
        if (typeof identifier.assigner?.reference === 'string') {
          identifier.assigner = { reference: identifier.assigner.reference };
        }
        if (typeof identifier.assigner?.reference !== 'string') {
          identifier.assigner = new Reference<Organization>(identifier.assigner as Reference<Organization>);
        }
      });
    }
    this._qualification.push(qualification);
    return this;
  }

  addCommunication(communication: PractitionerCommunication): PractitionerBuilder {
    this._communication = this._communication || [];
    this._communication.push(communication);
    return this;
  }

  setMultipleIdentifier(identifier: Identifier[]): PractitionerBuilder {
    this._identifier = identifier;
    return this;
  }

  setMultipleName(name: HumanName[]): PractitionerBuilder {
    this._name = name;
    return this;
  }

  setMultipleTelecom(telecom: ContactPoint[]): PractitionerBuilder {
    this._telecom = telecom;
    return this;
  }

  setMultipleAddress(address: Address[]): PractitionerBuilder {
    this._address = address;
    return this;
  }

  setMultiplePhoto(photo: Attachment[]): PractitionerBuilder {
    this._photo = photo;
    return this;
  }

  setMultipleQualification(qualification: PractitionerQualification[]): PractitionerBuilder {
    this._qualification = qualification;
    return this;
  }

  setMultipleCommunication(communication: PractitionerCommunication[]): PractitionerBuilder {
    this._communication = communication;
    return this;
  }

  setIdentifier(index: number, identifier: Identifier): PractitionerBuilder {
    this._identifier = this._identifier || [];
    this._identifier[index] = identifier;
    return this;
  }

  setName(index: number, name: HumanName): PractitionerBuilder {
    this._name = this._name || [];
    this._name[index] = name;
    return this;
  }

  setTelecom(index: number, telecom: ContactPoint): PractitionerBuilder {
    this._telecom = this._telecom || [];
    this._telecom[index] = telecom;
    return this;
  }

  setAddress(index: number, address: Address): PractitionerBuilder {
    this._address = this._address || [];
    this._address[index] = address;
    return this;
  }

  setPhoto(index: number, photo: Attachment): PractitionerBuilder {
    this._photo = this._photo || [];
    this._photo[index] = photo;
    return this;
  }

  setQualification(index: number, qualification: PractitionerQualification): PractitionerBuilder {
    this._qualification = this._qualification || [];
    this._qualification[index] = qualification;
    return this;
  }

  setCommunication(index: number, communication: PractitionerCommunication): PractitionerBuilder {
    this._communication = this._communication || [];
    this._communication[index] = communication;
    return this;
  }

  getIdentifier(index: number) {
    return {
      get: () => this._identifier[index],
      set: (value: Identifier) => this.setIdentifier(index, value),
    };
  }

  getName(index: number) {
    return {
      get: () => this._name[index],
      set: (value: HumanName) => this.setName(index, value),
    };
  }

  getTelecom(index: number) {
    return {
      get: () => this._telecom[index],
      set: (value: ContactPoint) => this.setTelecom(index, value),
    };
  }

  getAddress(index: number) {
    return {
      get: () => this._address[index],
      set: (value: Address) => this.setAddress(index, value),
    };
  }

  getPhoto(index: number) {
    return {
      get: () => this._photo[index],
      set: (value: Attachment) => this.setPhoto(index, value),
    };
  }

  getQualification(index: number) {
    return {
      get: () => this._qualification[index],
      set: (value: PractitionerQualification) => this.setQualification(index, value),
    };
  }

  getCommunication(index: number) {
    return {
      get: () => this._communication[index],
      set: (value: PractitionerCommunication) => this.setCommunication(index, value),
    };
  }

  setDeceased<R extends boolean | string>(deceased: R): PractitionerBuilder {
    if (typeof deceased === 'string') {
      this._deceasedDateTime = deceased;
    } else if (typeof deceased === 'boolean') {
      this._deceasedBoolean = deceased;
    }

    return this;
  }

  setActive(active: boolean): PractitionerBuilder {
    this._active = active;
    return this;
  }

  setBirthDate(birthDate: string): PractitionerBuilder {
    this._birthDate = birthDate;
    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): PractitionerBuilder {
    this._gender = gender;

    return this;
  }

  build(): Practitioner {
    const domainResource = super.build();

    if (this._deceased && typeof this._deceased === 'string') {
      this._deceasedDateTime = this._deceased;
    }

    if (this._deceased && typeof this._deceased === 'boolean') {
      this._deceasedBoolean = this._deceased;
    }

    return new Practitioner({
      ...domainResource,
      identifier: this._identifier,
      active: this._active,
      name: this._name,
      telecom: this._telecom,
      gender: this._gender,
      birthDate: this._birthDate,
      deceasedBoolean: this._deceasedBoolean,
      deceasedDateTime: this._deceasedDateTime,
      address: this._address,
      photo: this._photo,
      qualification: this._qualification,
      communication: this._communication,
    });
  }
}
