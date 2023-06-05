import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { IElement, IReference } from '../base';
import { IPeriod } from './IPeriod';
import { ICodeableConcept } from './ICodeableConcept';

export interface IIdentifier extends IElement {
  use?: IdentifierUseEnum | IdentifierUseType;
  system?: string;
  value?: string;
  type?: ICodeableConcept;
  period?: IPeriod;
  assigner?: IReference;
  _use?: IElement;
  _system?: IElement;
  _value?: IElement;
}
