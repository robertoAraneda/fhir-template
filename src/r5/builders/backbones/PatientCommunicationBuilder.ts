import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Buildable, Serializable, Element } from '../../interfaces/base';
import { PatientCommunication } from '../../interfaces/backbones';
import { CodeableConcept } from '../../interfaces/datatypes';

export class PatientCommunicationBuilder
  extends BackboneElementBuilder<PatientCommunicationBuilder>
  implements Buildable<PatientCommunication>, Serializable
{
  private readonly patientCommunication: PatientCommunication;

  constructor() {
    super();
    this.patientCommunication = {} as PatientCommunication;
  }

  addPatientCommunicationParamExtension(param: 'preferred', extension: Element): PatientCommunicationBuilder {
    this.patientCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: CodeableConcept): PatientCommunicationBuilder {
    this.patientCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): PatientCommunicationBuilder {
    this.patientCommunication.preferred = preferred;
    return this;
  }

  build(): PatientCommunication {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  raw(): PatientCommunication {
    return {
      ...this.patientCommunication,
      ...super.entity(),
    };
  }
}
