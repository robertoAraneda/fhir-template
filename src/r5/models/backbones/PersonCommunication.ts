import { IPersonCommunication } from '../../interfaces/backbones';
import { Extension } from '../datatypes/Extension';
import { ICodeableConcept } from '../../interfaces/datatypes';

export class PersonCommunication implements IPersonCommunication {
  // Element Properties
  id?: string;
  extension?: Extension[];

  // BackboneElement Properties
  modifierExtension?: Extension[];

  // PersonCommunication Properties
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: Element;

  constructor(args?: IPersonCommunication) {
    Object.assign(this, args);
  }
}
