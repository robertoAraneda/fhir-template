import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { RelatedPersonCommunicationBuilder } from './RelatedPersonCommunicationBuilder';

export default class RelatedPersonCommunication extends BackboneElement implements IRelatedPersonCommunication {
  // RelatedPersonCommunication attributes
  language: any;
  preferred?: boolean;
  _preferred?: any;

  toJson(): RelatedPersonCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `RelatedPersonCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `RelatedPersonCommunication${JSON.stringify(this.toJson())}`;
  }

  static builder(): RelatedPersonCommunicationBuilder {
    return new RelatedPersonCommunicationBuilder();
  }

  constructor(args?: IRelatedPersonCommunication) {
    super();
    Object.assign(this, args);
  }
}
