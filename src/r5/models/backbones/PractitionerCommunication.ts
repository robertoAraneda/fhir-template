import { IPractitionerCommunication } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import PractitionerCommunicationBuilder from './PractitionerCommunicationBuilder';
import BackboneElement from '../base/BackboneElement';

export default class PractitionerCommunication extends BackboneElement implements IPractitionerCommunication {
  // PractitionerCommunication attributes
  language: ICodeableConcept;
  preferred: boolean;
  _preferred: IElement;

  static builder(): PractitionerCommunicationBuilder {
    return new PractitionerCommunicationBuilder();
  }

  toJson(): PractitionerCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `PractitionerCommunication${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `PractitionerCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IPractitionerCommunication) {
    super();
    Object.assign(this, args);
  }
}
