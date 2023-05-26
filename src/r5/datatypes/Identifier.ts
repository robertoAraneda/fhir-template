import { Period } from './Period';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';
import { ReferenceInterface } from '../interfaces/ReferenceInterface';
import { PeriodInterface } from '../interfaces/PeriodInterface';

export class Identifier {
  use?: string;
  system?: string;
  value?: string;
  period?: Period | PeriodInterface;
  assigner?: Reference<Organization> | ReferenceInterface<Organization>;

  constructor(args?: Partial<Identifier>) {
    Object.assign(this, args);
  }
}
