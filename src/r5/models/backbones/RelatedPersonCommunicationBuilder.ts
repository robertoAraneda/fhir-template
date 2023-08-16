import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { RelatedPersonCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';

interface IRelatedPersonCommunicationBuilder
  extends IBuildable<RelatedPersonCommunication>,
    IBackboneElementBuilder<RelatedPersonCommunicationBuilder>,
    IElementBuilder<RelatedPersonCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}
export default class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements IRelatedPersonCommunicationBuilder
{
  private readonly relatedPersonCommunication: IRelatedPersonCommunication;

  constructor() {
    super();
    this.relatedPersonCommunication = {} as IRelatedPersonCommunication;
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

  build(): RelatedPersonCommunication {
    Object.assign(this.relatedPersonCommunication, { ...super.entity() });
    return new RelatedPersonCommunication(this.relatedPersonCommunication).toJson();
  }
}
