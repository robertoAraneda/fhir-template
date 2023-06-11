import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IPatientLink } from '../../interfaces/backbones';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IReference } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { PatientLink } from '../../models/backbones/PatientLink';
interface IPatientLinkBuilder extends IBuildable<IPatientLink>, ISerializable {
  addParamExtension(param: 'type', extension: IElement): this;
  setOther(other: IReference): this;
  setType(type: LinkTypeEnum | LinkTypeType): this;
}
export class PatientLinkBuilder extends BackboneElementBuilder<PatientLinkBuilder> implements IPatientLinkBuilder {
  private readonly patientLink: IPatientLink;

  constructor() {
    super();
    this.patientLink = new PatientLink();
  }

  addParamExtension(param: 'type', extension: IElement): this {
    this.patientLink[`_${param}`] = extension;
    return this;
  }

  setOther(other: IReference): this {
    this.patientLink.other = other;
    return this;
  }

  setType(type: LinkTypeEnum | LinkTypeType): this {
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
