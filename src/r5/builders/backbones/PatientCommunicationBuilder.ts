import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IPatientCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';

export class PatientCommunicationBuilder
  extends BackboneElementBuilder<PatientCommunicationBuilder>
  implements IBuildable<IPatientCommunication>, ISerializable
{
  private readonly patientCommunication: IPatientCommunication;

  constructor() {
    super();
    this.patientCommunication = {} as IPatientCommunication;
  }

  addPatientCommunicationParamExtension(param: 'preferred', extension: IElement): PatientCommunicationBuilder {
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

  build(): IPatientCommunication {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  raw(): IPatientCommunication {
    return {
      ...this.patientCommunication,
      ...super.entity(),
    };
  }
}
