import { Element } from '../base/Element';
import { ContactPointSystem } from '../../enums/ContactPointSystem';
import { ContactPointSystemType } from '../../types/ContactPointSystemType';
import { ContactPointUse } from '../../enums/ContactPointUse';
import { ContactPointUseType } from '../../types/ContactPointUseType';
import { Period } from './Period';

export interface ContactPoint extends Element {
  system?: ContactPointSystem | ContactPointSystemType;
  value?: string;
  use?: ContactPointUse | ContactPointUseType;
  rank?: number;
  period?: Period;
  _system?: Element;
  _value?: Element;
  _use?: Element;
  _rank?: Element;
}
