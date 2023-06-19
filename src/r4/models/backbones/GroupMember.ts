import { IGroupMember } from '../../interfaces/backbones';
import { IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { GroupMemberBuilder, IGroupMemberBuilder } from './GroupMemberBuilder';

export default class GroupMember extends BackboneElement implements IGroupMember {
  // GroupMember attributes
  entity: IReference;
  period: IPeriod;
  inactive: boolean;

  // Extensions
  _inactive?: IElement;

  static builder(): IGroupMemberBuilder {
    return new GroupMemberBuilder();
  }

  constructor(args?: IGroupMember) {
    super();
    Object.assign(this, args);
  }
}
