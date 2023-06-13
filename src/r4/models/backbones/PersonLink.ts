import { IPersonLink } from '../../interfaces/backbones';
import { IExtension, IReference } from '../../interfaces/datatypes';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IElement } from '../../interfaces/base';

export default class PersonLink implements IPersonLink {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackboneElement attributes
  modifierExtension: IExtension[];

  // PersonLink attributes
  assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
  target: IReference;
  _assurance: IElement;

  constructor(args?: IPersonLink) {
    Object.assign(this, args);
  }
}
