import { IGroup } from '../../interfaces/resources/IGroup';
import { IElement } from '../../interfaces/base';
import { IGroupCharacteristic, IGroupMember } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { GroupTypeEnum } from '../../enums';
import { GroupType } from '../../types';
import DomainResource from '../base/DomainResource';
import { GroupBuilder, IGroupBuilder } from './GroupBuilder';

export default class Group extends DomainResource implements IGroup {
  // Resource Attributes
  resourceType = 'Group';

  // Group Attributes
  identifier?: IIdentifier[];
  active?: boolean;
  type: GroupTypeEnum | GroupType;
  actual: boolean;
  code?: ICodeableConcept;
  name?: string;
  quantity?: number;
  managingEntity?: IReference;
  characteristic?: IGroupCharacteristic[];
  member?: IGroupMember[];

  // Extensions Group Attributes
  _active?: IElement;
  _type?: IElement;
  _actual?: IElement;
  _name?: IElement;
  _quantity?: IElement;

  static builder(): IGroupBuilder {
    return new GroupBuilder();
  }

  constructor(args?: IGroup) {
    super();
    Object.assign(this, args);
  }
}
