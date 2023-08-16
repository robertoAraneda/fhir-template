import { IPatientCommunication } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import PatientCommunicationBuilder from './PatientCommunicationBuilder';
import { PatientCommunicationValidator } from './PatientCommunicationValidator';

export default class PatientCommunication extends BackboneElement implements IPatientCommunication {
  // PatientCommunication attributes
  language: ICodeableConcept;
  preferred: boolean;
  _preferred: IElement;

  static builder(): PatientCommunicationBuilder {
    return new PatientCommunicationBuilder();
  }

  toJson(): PatientCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return ` PatientCommunication${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return ` PatientCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IPatientCommunication) {
    super();
    PatientCommunicationValidator(args);
    Object.assign(this, args);
  }
}
