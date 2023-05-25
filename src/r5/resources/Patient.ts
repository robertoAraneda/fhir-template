import { ResourceR5 } from './Resource';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { ContactPoint } from '../datatypes/ContactPoint';
import { HumanName } from '../datatypes/HumanName';
import { Identifier } from '../datatypes/Identifier';

export class PatientR5 extends ResourceR5 {
  private identifiers: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGenderVS;
  birthDate?: string;

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

  constructor() {
    super('Patient');

    this.identifiers = [];
  }
}
