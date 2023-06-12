import { IPractitionerCommunication } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class PractitionerCommunication implements IPractitionerCommunication {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

  // PractitionerCommunication attributes
  language: ICodeableConcept;
  preferred: boolean;
  _preferred: IElement;

  constructor(args?: IPractitionerCommunication) {
    Object.assign(this, args);
  }
}
