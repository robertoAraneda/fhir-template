import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IPersonCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PersonCommunication } from '../../models/backbones';

interface IPersonCommunicationBuilder extends IBuildable<IPersonCommunication>, ISerializable {
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

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  build(): IPersonCommunication {
    return JSON.parse(this.serialize());
  }

  raw(): IPersonCommunication {
    return {
      ...this.personCommunication,
      ...super.entity(),
    };
  }
}
