import { Identifier } from '../datatypes/Identifier';

import { DomainResource } from '../datatypes/DomainResource';

export interface OrganizationParams {
  identifiers?: Identifier[];
}

export class Organization extends DomainResource {
  resourceType = 'Organization';
  identifier?: Identifier[];
  constructor(args?: Partial<Organization>) {
    super();
    Object.assign(this, args);
  }
}
