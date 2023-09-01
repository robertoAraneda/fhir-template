import { IBackboneElement, IElement } from '../base';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IReference } from '../datatypes';

export interface IPersonLink extends IBackboneElement {
  target: IReference;
  assurance?: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
  _assurance?: IElement;
}
