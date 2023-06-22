import { IGroup } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import { IGroupCharacteristic, IGroupMember } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { GroupMembershipBasisEnum, GroupTypeEnum } from '../../enums';
import { GroupMembershipBasisType, GroupType } from '../../types';
import DomainResource from '../base/DomainResource';
import GroupBuilder from './GroupBuilder';

export default class Group extends DomainResource implements IGroup {
  // Resource Attributes
  resourceType = 'Group' as const;

  // Group Attributes
  identifier?: IIdentifier[];
  active?: boolean;
  type: GroupTypeEnum | GroupType;
  membership: GroupMembershipBasisEnum | GroupMembershipBasisType;
  actual: boolean;
  code?: ICodeableConcept;
  name?: string;
  description?: string;
  quantity?: number;
  managingEntity?: IReference;
  characteristic?: IGroupCharacteristic[];
  member?: IGroupMember[];

  // Extensions Group Attributes
  _active?: IElement;
  _type?: IElement;
  _membership?: IElement;
  _actual?: IElement;
  _name?: IElement;
  _description?: IElement;
  _quantity?: IElement;

  static builder(): GroupBuilder {
    return new GroupBuilder();
  }

  toJson(): Group {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Group${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Group${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IGroup) {
    super();
    Object.assign(this, args);
  }
}
