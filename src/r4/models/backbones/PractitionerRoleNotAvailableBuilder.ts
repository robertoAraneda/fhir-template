import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IPeriod } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import PractitionerRoleNotAvailable from './PractitionerRoleNotAvailable';

export interface IPractitionerRoleNotAvailableBuilder
  extends IBuildable<PractitionerRoleNotAvailable>,
    IBackboneElementBuilder<PractitionerRoleNotAvailableBuilder>,
    IElementBuilder<PractitionerRoleNotAvailableBuilder> {
  setDescription(value: string): PractitionerRoleNotAvailableBuilder;

  setDuring(value: IPeriod): PractitionerRoleNotAvailableBuilder;

  addParamExtension(param: 'description', extension: IElement): PractitionerRoleNotAvailableBuilder;
}

export class PractitionerRoleNotAvailableBuilder
  extends BackboneElementBuilder<PractitionerRoleNotAvailableBuilder>
  implements IPractitionerRoleNotAvailableBuilder
{
  private readonly practitionerRoleNotAvailable: PractitionerRoleNotAvailable;

  constructor() {
    super();
    this.practitionerRoleNotAvailable = new PractitionerRoleNotAvailable();
  }

  addParamExtension(param: 'description', extension: IElement): this {
    this.practitionerRoleNotAvailable._description = extension;
    return this;
  }

  build(): PractitionerRoleNotAvailable {
    Object.assign(this.practitionerRoleNotAvailable, { ...super.entity() });
    return this.practitionerRoleNotAvailable.toJson();
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
