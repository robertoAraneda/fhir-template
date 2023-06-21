import { IPersonCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import PersonCommunicationBuilder from './PersonCommunicationBuilder';
import { IElement } from '../../interfaces/base';

export default class PersonCommunication extends BackboneElement implements IPersonCommunication {
  // PersonCommunication Properties
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: IElement;

  static builder(): PersonCommunicationBuilder {
    return new PersonCommunicationBuilder();
  }

  toJson(): PersonCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return ` PersonCommunication${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return ` PersonCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IPersonCommunication) {
    super();
    Object.assign(this, args);
  }
}
