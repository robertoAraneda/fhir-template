import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import RelatedPersonCommunicationBuilder from './RelatedPersonCommunicationBuilder';

export default class RelatedPersonCommunication extends BackboneElement implements IRelatedPersonCommunication {
  // RelatedPersonCommunication attributes
  language: any;
  preferred?: boolean;
  _preferred?: any;

  static builder(): RelatedPersonCommunicationBuilder {
    return new RelatedPersonCommunicationBuilder();
  }

  toJson(): RelatedPersonCommunication {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `RelatedPersonCommunication${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `RelatedPersonCommunication${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IRelatedPersonCommunication) {
    super();
    Object.assign(this, args);
  }
}
