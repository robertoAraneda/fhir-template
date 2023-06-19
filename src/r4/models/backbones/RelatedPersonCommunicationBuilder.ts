import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import RelatedPersonCommunication from './RelatedPersonCommunication';

export interface IRelatedPersonCommunicationBuilder
  extends IBuildable<RelatedPersonCommunication>,
    IBackboneElementBuilder<RelatedPersonCommunicationBuilder>,
    IElementBuilder<RelatedPersonCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): RelatedPersonCommunicationBuilder;

  setLanguage(language: ICodeableConcept): RelatedPersonCommunicationBuilder;

  setPreferred(preferred: boolean): RelatedPersonCommunicationBuilder;
}

export class RelatedPersonCommunicationBuilder
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
