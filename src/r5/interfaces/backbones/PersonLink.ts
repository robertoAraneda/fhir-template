import { BackboneElement } from '../base/BackboneElement';
import { IdentityAssuranceLevel } from '../../enums/IdentityAssuranceLevel';
import { IdentityAssuranceLevelType } from '../../types/IdentityAssuranceLevelType';
import { Reference } from '../base/Reference';
import { Element } from '../base/Element';

export interface PersonLink extends BackboneElement {
  target: Reference;
  assurance?: IdentityAssuranceLevel | IdentityAssuranceLevelType;
  _assurance?: Element;
}
