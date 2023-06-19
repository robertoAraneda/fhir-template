import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { IPeriod } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';

export interface IPractitionerRoleNotAvailableBuilder
  extends IBuildable<IPractitionerRoleNotAvailable>,
    ISerializable,
    IBackboneElementBuilder<IPractitionerRoleNotAvailableBuilder>,
    IElementBuilder<IPractitionerRoleNotAvailableBuilder> {
  setDescription(value: string): this;

  setDuring(value: IPeriod): this;

  addParamExtension(param: 'description', extension: IElement): this;
}

export class PractitionerRoleNotAvailableBuilder
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
