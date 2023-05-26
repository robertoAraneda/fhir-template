import { ResourceR5 } from './Resource';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { ContactPoint } from '../datatypes/ContactPoint';
import { HumanName } from '../datatypes/HumanName';
import { Identifier } from '../datatypes/Identifier';

export interface PatientParams {
  id?: string;
  identifiers?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGenderVS;
  birthDate?: string;
}

type SetIdentifier = Omit<ISetterPatient, 'SetIdentifier'>;
type SetId = Omit<ISetterPatient, 'SetId'>;
type SetIdentifiers = Omit<ISetterPatient, 'SetIdentifiers'>;
type SetHumanName = Omit<ISetterPatient, 'SetHumanName'>;
type SetHumanNames = Omit<ISetterPatient, 'SetHumanNames'>;

export interface ISetterPatient {
  setId(id: string): SetId;
  setIdentifier(index: number, identifier: Identifier): SetIdentifier;
  setIdentifiers(identifiers: Identifier[]): SetIdentifiers;
  setHumanName(index: number, name: HumanName): SetHumanName;
  setHumanNames(names: HumanName[]): SetHumanNames;
}

export class PatientR5 extends ResourceR5 {
  private identifiers: Identifier[];
  private active?: boolean;
  private name?: HumanName[];
  private telecom?: ContactPoint[];
  private gender?: AdministrativeGenderVS;
  private birthDate?: string;

  setHumanName(index: number, name: HumanName) {
    if (!this.name) this.name = [];
    this.name[index] = name;

    return this;
  }

  getHumanName(index: number) {
    if (!this.name) return null;
    return this.name[index];
  }

  getHumanNames() {
    return this.name;
  }

  setActive(active: boolean) {
    this.active = active;

    return this;
  }

  getActive() {
    return this.active;
  }

  addIdentifier(identifier: Identifier) {
    if (!this.identifiers) this.identifiers = [];
    this.identifiers.push(identifier);

    return this;
  }

  getIdentifier(index: number) {
    if (!this.identifiers) return null;
    return this.identifiers[index];
  }
  getIdentifiers() {
    return this.identifiers;
  }

  setIdentifiers(identifiers: Identifier[]) {
    this.identifiers = identifiers;

    return this;
  }

  setIdentifier(index: number, identifier: Identifier) {
    if (!this.identifiers) this.identifiers = [];
    this.identifiers[index] = identifier;

    return this;
  }

  toString() {
    return JSON.stringify(this, null, 2);
  }

  toJson(json: string) {
    return JSON.parse(json);
  }

  constructor(args?: PatientParams) {
    super('Patient');
    Object.assign(this, args);
  }
}
