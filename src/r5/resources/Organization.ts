import { Identifier } from '../datatypes/Identifier';
import { ResourceR5 } from './Resource';

export class OrganizationR5 extends ResourceR5 {
  identifiers?: Identifier[];
  constructor() {
    super('Organization');
  }
}
