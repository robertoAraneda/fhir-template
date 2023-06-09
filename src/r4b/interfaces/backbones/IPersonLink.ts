import { IBackboneElement, IReference, IElement } from '../base';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';

export interface IPersonLink extends IBackboneElement {
  target: IReference;
  assurance?: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
  _assurance?: IElement;
}
