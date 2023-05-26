import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { Patient } from '../resources/Patient';

export class PatientBuilder {
  private _id?: number;
  private _identifiers: Identifier[];
  private _active?: boolean;
  private _name?: HumanName[];
  private _telecom?: ContactPoint[];
  private _gender?: AdministrativeGenderVS;
  private _birthDate?: string;

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

  getActive(): boolean | undefined {
    return this._active;
  }

  addIdentifier(identifier: Identifier): PatientBuilder {
    if (!this._identifiers) this._identifiers = [];
    this._identifiers.push(identifier);

    return this;
  }

  setIdentifier(index: number, identifier: Identifier): PatientBuilder {
    if (!this._identifiers) this._identifiers = [];
    this._identifiers[index] = identifier;

    return this;
  }

  setIdentifiers(identifiers: Identifier[]): PatientBuilder {
    this._identifiers = identifiers;

    return this;
  }

  getIdentifier(index: number) {
    if (!this._identifiers) return null;
    return this._identifiers[index];
  }

  getIdentifiers() {
    if (!this._identifiers) return [];
    return this._identifiers;
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

  getGender(): AdministrativeGenderVS | undefined {
    return this._gender;
  }

  setBirthDate(birthDate: string): PatientBuilder {
    this._birthDate = birthDate;

    return this;
  }

  getBirthDate(): string | undefined {
    return this._birthDate;
  }

  build() {
    const patient = new Patient();

    patient.id = this._id;
    patient.name = this._name;
    patient.active = this._active;
    patient.identifiers = this._identifiers;
    patient.telecom = this._telecom;
    patient.birthDate = this._birthDate;
    patient.gender = this._gender;
  }
}
