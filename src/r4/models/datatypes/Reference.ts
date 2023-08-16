import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { ReferenceBuilder } from './ReferenceBuilder';
import { ReferenceValidator } from './ReferenceValidator';

export default class Reference extends Element implements IReference {
  // Reference attributes
  reference: string;
  type: string;
  identifier: IIdentifier;
  display: string;

  // Extensions
  _display: IElement;
  _reference: IElement;
  _type: IElement;

  toJson(): Reference {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Reference${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Reference${JSON.stringify(this.toJson())}`;
  }

  static builder(): ReferenceBuilder {
    return new ReferenceBuilder();
  }

  constructor(args: IReference) {
    super();
    ReferenceValidator(args);
    Object.assign(this, args);
  }
}
