import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';
import { RelatedPersonCommunication } from '../../interfaces/backbones/RelatedPersonCommunication';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Element } from '../../interfaces/base/Element';

export class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements Build<RelatedPersonCommunication>, Serialize
{
  private readonly relatedPersonCommunication: RelatedPersonCommunication;

  constructor() {
    super();
    this.relatedPersonCommunication = {} as RelatedPersonCommunication;
  }

  addRelatedPersonCommunicationParamExtension(
    param: 'preferred',
    extension: Element,
  ): RelatedPersonCommunicationBuilder {
    this.relatedPersonCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: CodeableConcept): RelatedPersonCommunicationBuilder {
    this.relatedPersonCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): RelatedPersonCommunicationBuilder {
    this.relatedPersonCommunication.preferred = preferred;
    return this;
  }

  build(): RelatedPersonCommunication {
    return JSON.parse(this.serialize());
  }

  raw(): RelatedPersonCommunication {
    return {
      ...this.relatedPersonCommunication,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }
}
