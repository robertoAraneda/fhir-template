import { IdentifierUse } from '../../enums/IdentifierUse';
import { IdentifierUseType } from '../../types/IdentifierUseType';
import { Element } from '../base/Element';
import { Period } from './Period';
import { Reference } from '../base/Reference';
import { CodeableConcept } from './CodeableConcept';

export interface Identifier extends Element {
  use?: IdentifierUse | IdentifierUseType;
  system?: string;
  value?: string;
  type?: CodeableConcept;
  period?: Period;
  assigner?: Reference;
  _use?: Element;
  _system?: Element;
  _value?: Element;
}
