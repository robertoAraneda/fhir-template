import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Buildable, Serializable, Element, Reference } from '../../interfaces/base';
import { PatientLink } from '../../interfaces/backbones';
import { LinkType } from '../../enums/LinkType';
import { LinkTypeType } from '../../types/LinkTypeType';

export class PatientLinkBuilder
  extends BackboneElementBuilder<PatientLinkBuilder>
  implements Buildable<PatientLink>, Serializable
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
