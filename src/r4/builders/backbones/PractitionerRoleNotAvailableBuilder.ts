import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import { PractitionerRoleNotAvailable } from '../../models/backbones';
import { IElement } from '../../interfaces/base';
import { IPeriod } from '../../interfaces/datatypes';

interface IPractitionerRoleNotAvailableBuilder extends IBuildable<IPractitionerRoleNotAvailable>, ISerializable {
  setDescription(value: string): this;
  setDuring(value: IPeriod): this;
  addParamExtension(param: 'description', extension: IElement): this;
}

export default class PractitionerRoleNotAvailableBuilder
  extends BackboneElementBuilder<PractitionerRoleNotAvailableBuilder>
  implements IPractitionerRoleNotAvailableBuilder
{
  private readonly practitionerRoleNotAvailable: IPractitionerRoleNotAvailable;
  constructor() {
    super();
    this.practitionerRoleNotAvailable = new PractitionerRoleNotAvailable();
  }

  addParamExtension(param: 'description', extension: IElement): this {
    this.practitionerRoleNotAvailable._description = extension;
    return this;
  }

  build(): IPractitionerRoleNotAvailable {
    return JSON.parse(this.serialize());
  }

  raw(): IPractitionerRoleNotAvailable {
    return {
      ...this.practitionerRoleNotAvailable,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
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
