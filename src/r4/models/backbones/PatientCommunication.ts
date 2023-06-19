import { IPatientCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { IPatientCommunicationBuilder, PatientCommunicationBuilder } from './PatientCommunicationBuilder';

export default class PatientCommunication extends BackboneElement implements IPatientCommunication {
  // PatientCommunication attributes
  language: ICodeableConcept;
  preferred: boolean;
  _preferred: IElement;

  static builder(): IPatientCommunicationBuilder {
    return new PatientCommunicationBuilder();
  }

  constructor(args?: IPatientCommunication) {
    super();
    Object.assign(this, args);
  }
}
