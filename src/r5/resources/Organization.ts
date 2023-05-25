import { Identifier } from '../datatypes/Identifier';
import { ResourceR5 } from './Resource';

export interface OrganizationParams {
  identifiers?: Identifier[];
}

export class OrganizationR5 extends ResourceR5 {
  identifiers?: Identifier[];
  constructor(args?: OrganizationParams) {
    super('Organization');
    Object.assign(this, args);
  }
}
