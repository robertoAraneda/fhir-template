import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PractitionerCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';
import { IElement } from '../../interfaces/base';

interface IPractitionerCommunicationBuilder
  extends IBuildable<PractitionerCommunication>,
    IBackboneElementBuilder<PractitionerCommunicationBuilder>,
    IElementBuilder<PractitionerCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): PractitionerCommunicationBuilder;

  setLanguage(language: ICodeableConcept): PractitionerCommunicationBuilder;

  setPreferred(preferred: boolean): PractitionerCommunicationBuilder;
}

export default class PractitionerCommunicationBuilder
  extends BackboneElementBuilder<PractitionerCommunicationBuilder>
  implements IPractitionerCommunicationBuilder
{
  private readonly practitionerCommunication: PractitionerCommunication;

  constructor() {
    super();
    this.practitionerCommunication = new PractitionerCommunication();
  }

  addParamExtension(param: 'preferred', extension: IElement): PractitionerCommunicationBuilder {
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

  build(): PractitionerCommunication {
    Object.assign(this.practitionerCommunication, { ...super.entity() });
    return this.practitionerCommunication.toJson();
  }
}
