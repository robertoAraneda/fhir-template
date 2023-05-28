import { Identifier } from '../datatypes/Identifier';
import { Resource } from './Resource';

export interface OrganizationParams {
  id?: number;
  identifiers?: Identifier[];
}

export class Organization extends Resource {
  identifiers?: Identifier[];
  constructor(args?: OrganizationParams) {
    super('Organization');
    Object.assign(this, args);
  }
}
