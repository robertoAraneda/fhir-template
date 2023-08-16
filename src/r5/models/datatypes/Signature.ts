import Element from '../base/Element';
import { ICoding, IReference, ISignature } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { SignatureBuilder } from './SignatureBuilder';
import { SignatureValidator } from './SignatureValidator';

export default class Signature extends Element implements ISignature {
  // Signature attributes
  data?: string;
  onBehalfOf?: IReference;
  sigFormat?: string;
  targetFormat?: string;
  type?: ICoding[];
  when?: string;
  who?: IReference;

  // Extensions of signature attributes
  _data: IElement;
  _sigFormat: IElement;
  _targetFormat: IElement;
  _when: IElement;

  toJson(): Signature {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Signature${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Signature${JSON.stringify(this.toJson())}`;
  }

  static builder(): SignatureBuilder {
    return new SignatureBuilder();
  }

  constructor(args: ISignature) {
    super();
    SignatureValidator(args);
    Object.assign(this, args);
  }
}
