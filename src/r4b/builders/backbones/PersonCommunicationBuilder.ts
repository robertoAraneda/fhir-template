import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IPersonCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';

export class PersonCommunicationBuilder
  extends BackboneElementBuilder<PersonCommunicationBuilder>
  implements IBuildable<IPersonCommunication>, ISerializable
{
  private readonly personCommunication: IPersonCommunication;

  constructor() {
    super();
    this.personCommunication = {} as IPersonCommunication;
  }

  addPersonCommunicationParamExtension(param: 'preferred', extension: IElement): PersonCommunicationBuilder {
    this.personCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): PersonCommunicationBuilder {
    this.personCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): PersonCommunicationBuilder {
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
