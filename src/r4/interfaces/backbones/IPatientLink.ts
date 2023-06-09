import { IBackboneElement, IReference, IElement } from '../base';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';

export interface IPatientLink extends IBackboneElement {
  other: IReference;
  type: LinkTypeEnum | LinkTypeType;
  _type?: IElement;
}
