import { Period } from './Period';
import { ContactPointSystem } from '../enumerators/ContactPointSystem';
import { ContactPointUse } from '../enumerators/ContactPointUse';
import { ContactPointSystemType } from '../types/ContactPointSystemType';
import { ContactPointUseType } from '../types/ContactPointUseType';

export class ContactPoint {
  system?: ContactPointSystem | ContactPointSystemType;
  value?: string;
  use?: ContactPointUse | ContactPointUseType;
  rank?: number;
  period?: Period;

  constructor(args?: Partial<ContactPoint>) {
    Object.assign(this, args);
  }
}
