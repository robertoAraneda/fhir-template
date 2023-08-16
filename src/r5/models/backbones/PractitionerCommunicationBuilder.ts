import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PractitionerCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { IPractitionerCommunication } from '../../interfaces/backbones';

interface IPractitionerCommunicationBuilder
  extends IBuildable<PractitionerCommunication>,
    IBackboneElementBuilder<PractitionerCommunicationBuilder>,
    IElementBuilder<PractitionerCommunicationBuilder> {
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
    this.practitionerCommunication = {} as IPractitionerCommunication;
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

  build(): PractitionerCommunication {
    Object.assign(this.practitionerCommunication, { ...super.entity() });
    return new PractitionerCommunication(this.practitionerCommunication).toJson();
  }
}
