import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { RelatedPersonCommunication } from '../../models/backbones/RelatedPersonCommunication';

interface IRelatedPersonCommunicationBuilder extends IBuildable<IRelatedPersonCommunication>, ISerializable {
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}
export class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements IRelatedPersonCommunicationBuilder
{
  private readonly relatedPersonCommunication: IRelatedPersonCommunication;

  constructor() {
    super();
    this.relatedPersonCommunication = new RelatedPersonCommunication();
  }

  addParamExtension(param: 'preferred', extension: IElement): this {
    this.relatedPersonCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): this {
    this.relatedPersonCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): this {
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
