import { IGroupMember } from '../../interfaces/backbones';
import { IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import GroupMemberBuilder from './GroupMemberBuilder';

export default class GroupMember extends BackboneElement implements IGroupMember {
  // GroupMember attributes
  entity: IReference;
  period: IPeriod;
  inactive: boolean;

  // Extensions
  _inactive?: IElement;

  static builder(): GroupMemberBuilder {
    return new GroupMemberBuilder();
  }

  toJson(): GroupMember {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `GroupMember${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `GroupMember${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IGroupMember) {
    super();
    Object.assign(this, args);
  }
}
