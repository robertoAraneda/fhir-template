import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { PatientCommunication } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { IPatientCommunication } from '../../interfaces/backbones';

interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder<PatientCommunicationBuilder>,
    IElementBuilder<PatientCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): this;

  setLanguage(language: ICodeableConcept): this;

  setPreferred(preferred: boolean): this;
}
export default class PatientCommunicationBuilder
  extends BackboneElementBuilder<PatientCommunicationBuilder>
  implements IPatientCommunicationBuilder
{
  private readonly patientCommunication: IPatientCommunication;

  constructor() {
    super();
    this.patientCommunication = {} as IPatientCommunication;
  }

  addParamExtension(param: 'preferred', extension: IElement): this {
    this.patientCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): this {
    this.patientCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): this {
    this.patientCommunication.preferred = preferred;
    return this;
  }

  build(): PatientCommunication {
    Object.assign(this.patientCommunication, { ...super.entity() });
    return new PatientCommunication(this.patientCommunication).toJson();
  }
}
