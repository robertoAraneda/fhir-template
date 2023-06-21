import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { RelatedPersonCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';
import { IElement } from '../../interfaces/base';

interface IRelatedPersonCommunicationBuilder
  extends IBuildable<RelatedPersonCommunication>,
    IBackboneElementBuilder<RelatedPersonCommunicationBuilder>,
    IElementBuilder<RelatedPersonCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): RelatedPersonCommunicationBuilder;
  setLanguage(language: ICodeableConcept): RelatedPersonCommunicationBuilder;
  setPreferred(preferred: boolean): RelatedPersonCommunicationBuilder;
}
export default class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements IRelatedPersonCommunicationBuilder
{
  private readonly relatedPersonCommunication: RelatedPersonCommunication;

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

  build(): RelatedPersonCommunication {
    Object.assign(this.relatedPersonCommunication, { ...super.entity() });
    return this.relatedPersonCommunication.toJson();
  }
}
