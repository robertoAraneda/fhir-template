import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Buildable, Serializable, Element } from '../../interfaces/base';
import { RelatedPersonCommunication } from '../../interfaces/backbones';
import { CodeableConcept } from '../../interfaces/datatypes';

export class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements Buildable<RelatedPersonCommunication>, Serializable
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
