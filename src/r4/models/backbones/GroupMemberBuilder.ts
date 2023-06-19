import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IGroupMember } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamExtensionType = 'inactive';

export interface IGroupMemberBuilder
  extends IBuildable<IGroupMember>,
    ISerializable,
    IBackboneElementBuilder<IGroupMemberBuilder>,
    IElementBuilder<IGroupMemberBuilder> {
  setParamExtension(param: ParamExtensionType, extension: IExtension): this;

  setEntity(entity: IReference): this;

  setPeriod(period: IPeriod): this;

  setInactive(inactive: boolean): this;
}

export class GroupMemberBuilder extends BackboneElementBuilder<GroupMemberBuilder> implements IGroupMemberBuilder {
  private readonly groupMember: IGroupMember;

  constructor() {
    super();
    this.groupMember = {} as IGroupMember;
  }

  build(): IGroupMember {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IGroupMember {
    return {
      ...this.groupMember,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
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

  setParamExtension(param: ParamExtensionType, extension: IExtension): this {
    this.groupMember[`_${param}`] = extension;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.groupMember.period = period;
    return this;
  }
}
