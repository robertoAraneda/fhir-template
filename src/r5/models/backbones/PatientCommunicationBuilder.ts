import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PatientCommunication } from './index';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder<PatientCommunicationBuilder>,
    IElementBuilder<PatientCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): PatientCommunicationBuilder;

  setLanguage(language: ICodeableConcept): PatientCommunicationBuilder;

  setPreferred(preferred: boolean): PatientCommunicationBuilder;
}
export default class PatientCommunicationBuilder
  extends BackboneElementBuilder<PatientCommunicationBuilder>
  implements IPatientCommunicationBuilder
{
  private readonly patientCommunication: PatientCommunication;

  constructor() {
    super();
    this.patientCommunication = new PatientCommunication();
  }

  addParamExtension(param: 'preferred', extension: IElement): PatientCommunicationBuilder {
    this.patientCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): PatientCommunicationBuilder {
    this.patientCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): PatientCommunicationBuilder {
    this.patientCommunication.preferred = preferred;
    return this;
  }

  build(): PatientCommunication {
    Object.assign(this.patientCommunication, { ...super.entity() });
    return this.patientCommunication.toJson();
  }
}
