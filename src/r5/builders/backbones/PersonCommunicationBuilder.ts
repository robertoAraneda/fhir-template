import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { PersonCommunication } from '../../interfaces/backbones/PersonCommunication';
import { Serialize } from '../../interfaces/base/Serialize';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Element } from '../../interfaces/base/Element';

export class PersonCommunicationBuilder
  extends BackboneElementBuilder<PersonCommunicationBuilder>
  implements Build<PersonCommunication>, Serialize
{
  private readonly personCommunication: PersonCommunication;

  constructor() {
    super();
    this.personCommunication = {} as PersonCommunication;
  }

  addPersonCommunicationParamExtension(param: 'preferred', extension: Element): PersonCommunicationBuilder {
    this.personCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: CodeableConcept): PersonCommunicationBuilder {
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

  build(): PersonCommunication {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): PersonCommunication {
    return {
      ...this.personCommunication,
      ...super.entity(),
    };
  }
}
