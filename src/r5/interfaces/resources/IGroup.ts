import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { GroupType, GroupMembershipBasisType } from '../../types';
import { IGroupCharacteristic, IGroupMember } from '../backbones';
import { GroupTypeEnum, GroupMembershipBasisEnum } from '../../enums';

export interface IGroup extends IDomainResource {
  resourceType: 'Group';
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

  _active?: IElement;
  _type?: IElement;
  _membership?: IElement;
  _actual?: IElement;
  _name?: IElement;
  _description?: IElement;
  _quantity?: IElement;
}
