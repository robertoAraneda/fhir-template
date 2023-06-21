import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PersonCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';
import { IElement } from '../../interfaces/base';

interface IPersonCommunicationBuilder
  extends IBuildable<PersonCommunication>,
    IBackboneElementBuilder<PersonCommunicationBuilder>,
    IElementBuilder<PersonCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): PersonCommunicationBuilder;

  setLanguage(language: ICodeableConcept): PersonCommunicationBuilder;

  setPreferred(preferred: boolean): PersonCommunicationBuilder;
}

export default class PersonCommunicationBuilder
  extends BackboneElementBuilder<PersonCommunicationBuilder>
  implements IPersonCommunicationBuilder
{
  private readonly personCommunication: PersonCommunication;

  constructor() {
    super();
    this.personCommunication = new PersonCommunication();
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
    return this.personCommunication.toJson();
  }
}
