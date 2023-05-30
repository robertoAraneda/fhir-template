import { Period } from './Period';
import { NameUse } from '../enums/NameUse';
import { NameUseType } from '../types/NameUseType';

export class HumanName {
  use?: NameUse | NameUseType;
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: Period;

  constructor(args?: Partial<HumanName>) {
    Object.assign(this, args);
  }
}
