import { Resource } from './Resource';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { ContactPoint } from '../datatypes/ContactPoint';
import { HumanName } from '../datatypes/HumanName';
import { Identifier } from '../datatypes/Identifier';

export class Patient extends Resource {
  identifiers: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGenderVS;
  birthDate?: string;

  constructor(args?: Partial<Patient>) {
    super('Patient');
    Object.assign(this, args);
  }
}
