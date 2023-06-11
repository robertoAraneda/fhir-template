import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IPatientCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { PatientCommunication } from '../../models/backbones/PatientCommunication';

interface IPatientCommunicationBuilder extends IBuildable<IPatientCommunication>, ISerializable {
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
    this.patientCommunication = new PatientCommunication();
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

  build(): IPatientCommunication {
    return JSON.parse(this.serialize());
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
