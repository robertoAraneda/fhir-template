import { IRelatedPersonCommunication } from '../../interfaces/backbones';

export default class RelatedPersonCommunication implements IRelatedPersonCommunication {
  // Element attributes
  id?: string;
  extension?: any[];

  // BackboneElement attributes
  modifierExtension?: any[];

  // RelatedPersonCommunication attributes
  language: any;
  preferred?: boolean;
  _preferred?: any;

  constructor(args?: RelatedPersonCommunication) {
    Object.assign(this, args);
  }
}
