import { IGroupMember } from '../../interfaces/backbones';
import { IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { GroupMemberBuilder } from './GroupMemberBuilder';
import { GroupMemberValidator } from './GroupMemberValidator';

export default class GroupMember extends BackboneElement implements IGroupMember {
  // GroupMember attributes
  entity: IReference;
  period?: IPeriod;
  inactive?: boolean;

  // Extensions
  _inactive?: IElement;

  toJson(): GroupMember {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `GroupMember${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `GroupMember${JSON.stringify(this.toJson())}`;
  }

  static builder(): GroupMemberBuilder {
    return new GroupMemberBuilder();
  }

  constructor(args: IGroupMember) {
    super();
    GroupMemberValidator(args);
    Object.assign(this, args);
  }
}
