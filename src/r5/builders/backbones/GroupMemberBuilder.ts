import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IGroupMember } from '../../interfaces/backbones';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { GroupMember } from '../../models/backbones';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamType = 'inactive';
interface IGroupMemberBuilder extends IBuildable<IGroupMember>, ISerializable {
  setParamExtension(param: ParamType, extension: IExtension): this;
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
    this.groupMember = new GroupMember();
  }

  build(): IGroupMember {
    return JSON.parse(this.serialize());
  }

  raw(): IGroupMember {
    return {
      ...this.groupMember,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  setEntity(entity: IReference): this {
    if (entity.reference) {
      validateReference(entity.reference, [
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

  setInactive(inactive: boolean): this {
    this.groupMember.inactive = inactive;
    return this;
  }

  setParamExtension(param: ParamType, extension: IExtension): this {
    this.groupMember[`_${param}`] = extension;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.groupMember.period = period;
    return this;
  }
}
