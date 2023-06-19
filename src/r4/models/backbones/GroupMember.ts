import { IGroupMember } from '../../interfaces/backbones';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from './BackboneElement';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { validateReference } from '../../../globals/helpers/validateReference';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

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
class GroupMemberBuilder extends BackboneElementBuilder<GroupMemberBuilder> implements IGroupMemberBuilder {
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
