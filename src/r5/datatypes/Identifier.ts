import { Period } from './Period';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';
import { ReferenceInterface } from '../interfaces/ReferenceInterface';
import { PeriodInterface } from '../interfaces/PeriodInterface';
import { IdentifierUse } from '../enumerators/IdentifierUse';
import { IdentifierUserType } from '../types/IdentifierUserType';
import { validateIdentifier } from '../validators/ValidateIdentifier';

export class Identifier {
  use?: IdentifierUse | IdentifierUserType;
  system?: string;
  value?: string;
  period?: Period | PeriodInterface;
  assigner?: Reference<Organization> | ReferenceInterface<Organization>;

  constructor(args?: Partial<Identifier>) {
    Object.assign(this, args);
    validateIdentifier(this);
  }
}
