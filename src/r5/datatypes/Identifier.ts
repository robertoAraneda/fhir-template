import { Period } from './Period';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';
import { ReferenceInterface } from '../interfaces/ReferenceInterface';
import { PeriodInterface } from '../interfaces/PeriodInterface';
import { IdentifierUse } from '../enums/IdentifierUse';
import { IdentifierUseType } from '../types/IdentifierUseType';
import { validateIdentifier } from '../validators/ValidateIdentifier';

export class Identifier {
  use?: IdentifierUse | IdentifierUseType;
  system?: string;
  value?: string;
  period?: Period;
  assigner?: Reference<Organization | string>;

  constructor(args?: Partial<Identifier>) {
    Object.assign(this, args);
    validateIdentifier(this);
  }
}
