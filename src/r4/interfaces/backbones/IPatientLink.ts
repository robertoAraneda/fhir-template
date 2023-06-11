import { IBackboneElement, IElement } from '../base';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IReference } from '../datatypes';

export interface IPatientLink extends IBackboneElement {
  other: IReference;
  type: LinkTypeEnum | LinkTypeType;
  _type?: IElement;
}
