import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import ReferenceBuilder from './ReferenceBuilder';
import Element from '../base/Element';
import { ReferenceValidator } from './ReferenceValidator';

export default class Reference extends Element implements IReference {
  // Reference attributes
  display: string;
  identifier: IIdentifier;
  reference: string;
  type: string;

  // Extensions
  _display: IElement;
  _reference: IElement;
  _type: IElement;

  static builder(): ReferenceBuilder {
    return new ReferenceBuilder();
  }

  toJson(): Reference {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Reference${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Reference${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IReference) {
    super();
    ReferenceValidator(args);
    Object.assign(this, args);
  }
}
