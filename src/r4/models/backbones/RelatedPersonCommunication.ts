import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { RelatedPersonCommunicationBuilder } from './RelatedPersonCommunicationBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { RelatedPersonCommunicationValidator } from './RelatedPersonCommunicationValidator';

export default class RelatedPersonCommunication extends BackboneElement implements IRelatedPersonCommunication {
  // RelatedPersonCommunication attributes
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: IElement;

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

  constructor(args: IRelatedPersonCommunication) {
    super();
    RelatedPersonCommunicationValidator(args);
    Object.assign(this, args);
  }
}
