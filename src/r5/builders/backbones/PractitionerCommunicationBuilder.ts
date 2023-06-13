import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IPractitionerCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PractitionerCommunication } from '../../models/backbones';

interface IPractitionerCommunicationBuilder extends IBuildable<IPractitionerCommunication>, ISerializable {
  addParamExtension(param: 'preferred', extension: IElement): this;
  setLanguage(language: ICodeableConcept): this;
  setPreferred(preferred: boolean): this;
}

export default class PractitionerCommunicationBuilder
  extends BackboneElementBuilder<PractitionerCommunicationBuilder>
  implements IPractitionerCommunicationBuilder
{
  private readonly practitionerCommunication: IPractitionerCommunication;

  constructor() {
    super();
    this.practitionerCommunication = new PractitionerCommunication();
  }

  addParamExtension(param: 'preferred', extension: IElement): this {
    this.practitionerCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): this {
    this.practitionerCommunication.language = language;

    return this;
  }

  setPreferred(preferred: boolean): this {
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
