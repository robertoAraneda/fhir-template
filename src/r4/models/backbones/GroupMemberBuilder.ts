import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import GroupMember from './GroupMember';
import { IGroupMember } from '../../interfaces/backbones';

type ParamExtensionType = 'inactive';

export interface IGroupMemberBuilder
  extends IBuildable<GroupMember>,
    IBackboneElementBuilder<GroupMemberBuilder>,
    IElementBuilder<GroupMemberBuilder> {
  setParamExtension<T extends ParamExtensionType>(param: T, extension: IExtension): GroupMemberBuilder;

  setEntity(entity: IReference): GroupMemberBuilder;

  setPeriod(period: IPeriod): GroupMemberBuilder;

  setInactive(inactive: boolean): GroupMemberBuilder;
}

export class GroupMemberBuilder extends BackboneElementBuilder<GroupMemberBuilder> implements IGroupMemberBuilder {
  private readonly groupMember: IGroupMember;

  constructor() {
    super();
    this.groupMember = {} as IGroupMember;
  }

  build(): GroupMember {
    Object.assign(this.groupMember, { ...super.entity() });
    return new GroupMember(this.groupMember).toJson();
  }

  setEntity(entity: IReference): GroupMemberBuilder {
    this.groupMember.entity = entity;
    return this;
  }

  setInactive(inactive: boolean): GroupMemberBuilder {
    this.groupMember.inactive = inactive;
    return this;
  }

  setParamExtension<T extends ParamExtensionType>(param: T, extension: IExtension): GroupMemberBuilder {
    this.groupMember[`_${param}`] = extension;
    return this;
  }

  setPeriod(period: IPeriod): GroupMemberBuilder {
    this.groupMember.period = period;
    return this;
  }
}
