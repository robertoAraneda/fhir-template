import { IPatientCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { PatientCommunicationBuilder } from './PatientCommunicationBuilder';

export default class PatientCommunication extends BackboneElement implements IPatientCommunication {
  // PatientCommunication attributes
  language: ICodeableConcept;
  preferred: boolean;
  _preferred: IElement;

  toJson(): PatientCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientCommunication${JSON.stringify(this.toJson())}`;
  }

  static builder(): PatientCommunicationBuilder {
    return new PatientCommunicationBuilder();
  }

  constructor(args?: IPatientCommunication) {
    super();
    Object.assign(this, args);
  }
}
