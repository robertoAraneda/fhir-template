import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

export default class PractitionerRoleNotAvailable extends BackboneElement implements IPractitionerRoleNotAvailable {
  // PractitionerRoleNotAvailable attributes
  description: string;
  during?: any;
  _description?: any;

  static builder(): IPractitionerRoleNotAvailableBuilder {
    return new PractitionerRoleNotAvailableBuilder();
  }

  constructor(args?: PractitionerRoleNotAvailable) {
    super();
    Object.assign(this, args);
  }
}

export interface IPractitionerRoleNotAvailableBuilder
  extends IBuildable<IPractitionerRoleNotAvailable>,
    ISerializable,
    IBackboneElementBuilder<IPractitionerRoleNotAvailableBuilder>,
    IElementBuilder<IPractitionerRoleNotAvailableBuilder> {
  setDescription(value: string): this;
  setDuring(value: IPeriod): this;
  addParamExtension(param: 'description', extension: IElement): this;
}

class PractitionerRoleNotAvailableBuilder
  extends BackboneElementBuilder<PractitionerRoleNotAvailableBuilder>
  implements IPractitionerRoleNotAvailableBuilder
{
  private readonly practitionerRoleNotAvailable: IPractitionerRoleNotAvailable;
  constructor() {
    super();
    this.practitionerRoleNotAvailable = {} as IPractitionerRoleNotAvailable;
  }

  addParamExtension(param: 'description', extension: IElement): this {
    this.practitionerRoleNotAvailable._description = extension;
    return this;
  }

  build(): IPractitionerRoleNotAvailable {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IPractitionerRoleNotAvailable {
    return {
      ...this.practitionerRoleNotAvailable,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  setDescription(value: string): this {
    this.practitionerRoleNotAvailable.description = value;
    return this;
  }

  setDuring(value: IPeriod): this {
    this.practitionerRoleNotAvailable.during = value;
    return this;
  }
}
