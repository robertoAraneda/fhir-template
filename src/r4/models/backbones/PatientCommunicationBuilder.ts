import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import PatientCommunication from './PatientCommunication';
import { IPatientCommunication } from '../../interfaces/backbones';

export interface IPatientCommunicationBuilder
  extends IBuildable<PatientCommunication>,
    IBackboneElementBuilder<PatientCommunicationBuilder>,
    IElementBuilder<PatientCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): this;

  setLanguage(language: ICodeableConcept): this;

  setPreferred(preferred: boolean): this;
}

export class PatientCommunicationBuilder
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
