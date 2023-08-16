import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IPeriod } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import PractitionerRoleNotAvailable from './PractitionerRoleNotAvailable';
import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';

export interface IPractitionerRoleNotAvailableBuilder
  extends IBuildable<PractitionerRoleNotAvailable>,
    IBackboneElementBuilder<PractitionerRoleNotAvailableBuilder>,
    IElementBuilder<PractitionerRoleNotAvailableBuilder> {
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

  build(): PractitionerRoleNotAvailable {
    Object.assign(this.practitionerRoleNotAvailable, { ...super.entity() });
    return new PractitionerRoleNotAvailable(this.practitionerRoleNotAvailable).toJson();
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
