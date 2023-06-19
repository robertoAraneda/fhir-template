import Element from '../base/Element';
import { ICoding, IReference, ISignature } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { ISignatureBuilder, SignatureBuilder } from './SignatureBuilder';

export default class Signature extends Element implements ISignature {
  // Signature attributes
  data: string;
  onBehalfOf: IReference;
  sigFormat: string;
  targetFormat: string;
  type: ICoding[];
  when: string;
  who: IReference;

  // Extensions of signature attributes
  _data: IElement;
  _sigFormat: IElement;
  _targetFormat: IElement;
  _when: IElement;

  static builder(): ISignatureBuilder {
    return new SignatureBuilder();
  }

  constructor(args?: ISignature) {
    super();
    Object.assign(this, args);
  }
}
