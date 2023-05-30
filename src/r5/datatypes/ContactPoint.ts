import { Period } from './Period';
import { ContactPointSystem } from '../enums/ContactPointSystem';
import { ContactPointUse } from '../enums/ContactPointUse';
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
