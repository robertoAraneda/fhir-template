import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { PractitionerCommunication } from '../../interfaces/backbones/PractitionerCommunication';
import { Serialize } from '../../interfaces/base/Serialize';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Element } from '../../interfaces/base/Element';

export class PractitionerCommunicationBuild
  extends BackboneElementBuilder<PractitionerCommunicationBuild>
  implements Build<PractitionerCommunication>, Serialize
{
  private readonly practitionerCommunication: PractitionerCommunication;

  constructor() {
    super();

    this.practitionerCommunication = {} as PractitionerCommunication;
  }

  addPractitionerCommunicationParamExtension(param: 'preferred', extension: Element): PractitionerCommunicationBuild {
    this.practitionerCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: CodeableConcept): PractitionerCommunicationBuild {
    this.practitionerCommunication.language = language;

    return this;
  }

  setPreferred(preferred: boolean): PractitionerCommunicationBuild {
    this.practitionerCommunication.preferred = preferred;
    return this;
  }

  build(): PractitionerCommunication {
    return JSON.parse(JSON.stringify(this.practitionerCommunication));
  }

  raw(): PractitionerCommunication {
    return {
      ...this.practitionerCommunication,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
