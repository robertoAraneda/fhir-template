import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { PatientLink } from '../../interfaces/backbones/PatientLink';
import { Serialize } from '../../interfaces/base/Serialize';
import { Reference } from '../../interfaces/base/Reference';
import { LinkType } from '../../enums/LinkType';
import { LinkTypeType } from '../../types/LinkTypeType';
import { Element } from '../../interfaces/base/Element';

export class PatientLinkBuilder
  extends BackboneElementBuilder<PatientLinkBuilder>
  implements Build<PatientLink>, Serialize
{
  private readonly patientLink: PatientLink;

  constructor() {
    super();
    this.patientLink = {} as PatientLink;
  }

  addPatientLinkParamExtension(param: 'type', extension: Element): PatientLinkBuilder {
    this.patientLink[`_${param}`] = extension;
    return this;
  }

  setOther(other: Reference): PatientLinkBuilder {
    this.patientLink.other = other;
    return this;
  }

  setType(type: LinkType | LinkTypeType): PatientLinkBuilder {
    this.patientLink.type = type;
    return this;
  }

  build(): PatientLink {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): PatientLink {
    return {
      ...this.patientLink,
      ...super.entity(),
    };
  }
}
