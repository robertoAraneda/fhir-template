import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

export default class RelatedPersonCommunication extends BackboneElement implements IRelatedPersonCommunication {
  // RelatedPersonCommunication attributes
  language: any;
  preferred?: boolean;
  _preferred?: any;

  static builder(): IRelatedPersonCommunicationBuilder {
    return new RelatedPersonCommunicationBuilder();
  }

  constructor(args?: RelatedPersonCommunication) {
    super();
    Object.assign(this, args);
  }
}

export interface IRelatedPersonCommunicationBuilder
  extends IBuildable<IRelatedPersonCommunication>,
    ISerializable,
    IBackboneElementBuilder<IRelatedPersonCommunicationBuilder>,
    IElementBuilder<IRelatedPersonCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): RelatedPersonCommunicationBuilder;
  setLanguage(language: ICodeableConcept): RelatedPersonCommunicationBuilder;
  setPreferred(preferred: boolean): RelatedPersonCommunicationBuilder;
}

class RelatedPersonCommunicationBuilder
  extends BackboneElementBuilder<RelatedPersonCommunicationBuilder>
  implements IRelatedPersonCommunicationBuilder
{
  private readonly relatedPersonCommunication: IRelatedPersonCommunication;

  constructor() {
    super();
    this.relatedPersonCommunication = {} as IRelatedPersonCommunication;
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
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IRelatedPersonCommunication {
    return {
      ...this.relatedPersonCommunication,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }
}
