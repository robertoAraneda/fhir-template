import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement, IReference } from '../../interfaces/base';
import { IPatientLink } from '../../interfaces/backbones';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';

export class PatientLinkBuilder
  extends BackboneElementBuilder<PatientLinkBuilder>
  implements IBuildable<IPatientLink>, ISerializable
{
  private readonly patientLink: IPatientLink;

  constructor() {
    super();
    this.patientLink = {} as IPatientLink;
  }

  addPatientLinkParamExtension(param: 'type', extension: IElement): PatientLinkBuilder {
    this.patientLink[`_${param}`] = extension;
    return this;
  }

  setOther(other: IReference): PatientLinkBuilder {
    this.patientLink.other = other;
    return this;
  }

  setType(type: LinkTypeEnum | LinkTypeType): PatientLinkBuilder {
    this.patientLink.type = type;
    return this;
  }

  build(): IPatientLink {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): IPatientLink {
    return {
      ...this.patientLink,
      ...super.entity(),
    };
  }
}
