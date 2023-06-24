import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { GroupMember } from './index';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

type ParamExtensionType = 'inactive';
interface IGroupMemberBuilder
  extends IBuildable<GroupMember>,
    IBackboneElementBuilder<GroupMemberBuilder>,
    IElementBuilder<GroupMemberBuilder> {
  setParamExtension<T extends ParamExtensionType>(param: T, extension: IExtension): GroupMemberBuilder;

  setEntity(entity: IReference): GroupMemberBuilder;

  setPeriod(period: IPeriod): GroupMemberBuilder;

  setInactive(inactive: boolean): GroupMemberBuilder;
}
export default class GroupMemberBuilder
  extends BackboneElementBuilder<GroupMemberBuilder>
  implements IGroupMemberBuilder
{
  private readonly groupMember: GroupMember;
  constructor() {
    super();
    this.groupMember = new GroupMember();
  }

  build(): GroupMember {
    Object.assign(this.groupMember, { ...super.entity() });
    return this.groupMember.toJson();
  }

  setEntity(entity: IReference): GroupMemberBuilder {
    if (entity.reference) {
      validateReferenceHelper(entity.reference, [
        'Patient',
        'Practitioner',
        'PractitionerRole',
        'Device',
        'Medication',
        'Substance',
        'Group',
      ]);
    }
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
