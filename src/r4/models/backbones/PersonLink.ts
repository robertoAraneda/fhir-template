import { IPersonLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { IPersonLinkBuilder, PersonLinkBuilder } from './PersonLinkBuilder';

export default class PersonLink extends BackboneElement implements IPersonLink {
  // PersonLink attributes
  assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
  target: IReference;
  _assurance: IElement;

  static builder(): IPersonLinkBuilder {
    return new PersonLinkBuilder();
  }

  constructor(args?: IPersonLink) {
    super();
    Object.assign(this, args);
  }
}
