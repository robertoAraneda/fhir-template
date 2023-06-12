import { IPatientCommunication } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class PatientCommunication implements IPatientCommunication {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

  // PatientCommunication attributes
  language: ICodeableConcept;
  preferred: boolean;
  _preferred: IElement;

  constructor(args?: IPatientCommunication) {
    Object.assign(this, args);
  }
}
