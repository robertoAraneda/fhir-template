import { IPersonLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { PersonLinkBuilder } from './PersonLinkBuilder';
import { PersonLinkValidator } from './PersonLinkValidator';

export default class PersonLink extends BackboneElement implements IPersonLink {
  // PersonLink attributes
  assurance?: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
  target: IReference;
  _assurance?: IElement;

  toJson(): PersonLink {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PersonLink${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PersonLink${JSON.stringify(this.toJson())}`;
  }

  static builder(): PersonLinkBuilder {
    return new PersonLinkBuilder();
  }

  constructor(args: IPersonLink) {
    super();
    PersonLinkValidator(args);
    Object.assign(this, args);
  }
}
