import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PersonCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { IPersonCommunication } from '../../interfaces/backbones';

export interface IPersonCommunicationBuilder
  extends IBuildable<PersonCommunication>,
    IBackboneElementBuilder<PersonCommunicationBuilder>,
    IElementBuilder<PersonCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): this;

  setLanguage(language: ICodeableConcept): this;

  setPreferred(preferred: boolean): this;
}

export default class PersonCommunicationBuilder
  extends BackboneElementBuilder<PersonCommunicationBuilder>
  implements IPersonCommunicationBuilder
{
  private readonly personCommunication: IPersonCommunication;

  constructor() {
    super();
    this.personCommunication = {} as IPersonCommunication;
  }

  addParamExtension(param: 'preferred', extension: IElement): this {
    this.personCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): this {
    this.personCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): this {
    this.personCommunication.preferred = preferred;
    return this;
  }

  build(): PersonCommunication {
    Object.assign(this.personCommunication, { ...super.entity() });
    return new PersonCommunication(this.personCommunication).toJson();
  }
}
