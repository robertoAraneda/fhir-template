import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import {
  IRelatedPersonCommunicationBuilder,
  RelatedPersonCommunicationBuilder,
} from './RelatedPersonCommunicationBuilder';

export default class RelatedPersonCommunication extends BackboneElement implements IRelatedPersonCommunication {
  // RelatedPersonCommunication attributes
  language: any;
  preferred?: boolean;
  _preferred?: any;

  static builder(): IRelatedPersonCommunicationBuilder {
    return new RelatedPersonCommunicationBuilder();
  }

  constructor(args?: RelatedPersonCommunication) {
    super();
    Object.assign(this, args);
  }
}
