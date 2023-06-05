import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';

export class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements IBuildable<IRelatedPersonCommunication>, ISerializable
{
  private readonly relatedPersonCommunication: IRelatedPersonCommunication;

  constructor() {
    super();
    this.relatedPersonCommunication = {} as IRelatedPersonCommunication;
  }

  addRelatedPersonCommunicationParamExtension(
    param: 'preferred',
    extension: IElement,
  ): RelatedPersonCommunicationBuilder {
    this.relatedPersonCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): RelatedPersonCommunicationBuilder {
    this.relatedPersonCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): RelatedPersonCommunicationBuilder {
    this.relatedPersonCommunication.preferred = preferred;
    return this;
  }

  build(): IRelatedPersonCommunication {
    return JSON.parse(this.serialize());
  }

  raw(): IRelatedPersonCommunication {
    return {
      ...this.relatedPersonCommunication,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }
}
