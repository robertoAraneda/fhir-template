import { ResourceR5 } from './Resource';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { ContactPoint } from '../datatypes/ContactPoint';
import { HumanName } from '../datatypes/HumanName';
import { Identifier } from '../datatypes/Identifier';

export class PatientR5 extends ResourceR5 {
  identifiers: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGenderVS;
  birthDate?: string;
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
