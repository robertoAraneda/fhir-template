import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { GroupMember } from './index';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IGroupMember } from '../../interfaces/backbones';

type ParamExtensionType = 'inactive';

interface IGroupMemberBuilder
  extends IBuildable<GroupMember>,
    IBackboneElementBuilder<GroupMemberBuilder>,
    IElementBuilder<GroupMemberBuilder> {
  setParamExtension(param: ParamExtensionType, extension: IElement): this;

  setEntity(entity: IReference): this;

  setPeriod(period: IPeriod): this;

  setInactive(inactive: boolean): this;
}
export default class GroupMemberBuilder
  extends BackboneElementBuilder<GroupMemberBuilder>
  implements IGroupMemberBuilder
{
  private readonly groupMember: IGroupMember;
  constructor() {
    super();
    this.groupMember = {} as IGroupMember;
  }

  build(): GroupMember {
    Object.assign(this.groupMember, { ...super.entity() });
    return new GroupMember(this.groupMember).toJson();
  }

  setEntity(entity: IReference): this {
    this.groupMember.entity = entity;
    return this;
  }

  setInactive(inactive: boolean): this {
    this.groupMember.inactive = inactive;
    return this;
  }

  setParamExtension(param: ParamExtensionType, extension: IElement): this {
    this.groupMember[`_${param}`] = extension;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.groupMember.period = period;
    return this;
  }
}
