import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import PatientCommunication from './PatientCommunication';

export interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder<PatientCommunicationBuilder>,
    IElementBuilder<PatientCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): PatientCommunicationBuilder;

  setLanguage(language: ICodeableConcept): PatientCommunicationBuilder;

  setPreferred(preferred: boolean): PatientCommunicationBuilder;
}

export class PatientCommunicationBuilder
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
