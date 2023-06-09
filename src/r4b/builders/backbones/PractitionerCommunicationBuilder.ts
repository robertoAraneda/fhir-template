import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IPractitionerCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';

export class PractitionerCommunicationBuilder
  extends BackboneElementBuilder<PractitionerCommunicationBuilder>
  implements IBuildable<IPractitionerCommunication>, ISerializable
{
  private readonly practitionerCommunication: IPractitionerCommunication;

  constructor() {
    super();

    this.practitionerCommunication = {} as IPractitionerCommunication;
  }

  addPractitionerCommunicationParamExtension(
    param: 'preferred',
    extension: IElement,
  ): PractitionerCommunicationBuilder {
    this.practitionerCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): PractitionerCommunicationBuilder {
    this.practitionerCommunication.language = language;

    return this;
  }

  setPreferred(preferred: boolean): PractitionerCommunicationBuilder {
    this.practitionerCommunication.preferred = preferred;
    return this;
  }

  build(): IPractitionerCommunication {
    return JSON.parse(JSON.stringify(this.practitionerCommunication));
  }

  raw(): IPractitionerCommunication {
    return {
      ...this.practitionerCommunication,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
