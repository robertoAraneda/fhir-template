import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { RelatedPersonCommunication } from '../../models/backbones/RelatedPersonCommunication';

interface IRelatedPersonCommunicationBuilder extends IBuildable<IRelatedPersonCommunication>, ISerializable {
  addParamExtension(param: 'preferred', extension: IElement): RelatedPersonCommunicationBuilder;
  setLanguage(language: ICodeableConcept): RelatedPersonCommunicationBuilder;
  setPreferred(preferred: boolean): RelatedPersonCommunicationBuilder;
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

  addParamExtension(param: 'preferred', extension: IElement): RelatedPersonCommunicationBuilder {
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
