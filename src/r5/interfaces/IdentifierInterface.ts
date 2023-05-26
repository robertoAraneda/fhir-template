import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { ReferenceInterface } from './ReferenceInterface';
import { PeriodInterface } from './PeriodInterface';

export class IdentifierInterface {
  use?: string;
  system?: string;
  value?: string;
  period?: Period | PeriodInterface;
  assigner?: Reference<Organization> | ReferenceInterface<Organization>;
}
