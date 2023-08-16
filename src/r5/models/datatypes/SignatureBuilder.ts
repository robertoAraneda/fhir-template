import { IBuildable } from '../../../globals/interfaces';
import { ICoding, IReference, ISignature } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import Signature from './Signature';

type ParamExtensionType = 'when' | 'targetFormat' | 'sigFormat' | 'data';

export interface ISignatureBuilder extends IBuildable<Signature>, IElementBuilder<SignatureBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;

  addType(type: ICoding): this;

  setMultipleType(types: ICoding[]): this;

  setWhen(when: string): this;

  setWho(who: IReference): this;

  setOnBehalfOf(onBehalfOf: IReference): this;

  setTargetFormat(targetFormat: string): this;

  setSigFormat(sigFormat: string): this;

  setData(data: string): this;
}

export class SignatureBuilder extends ElementBuilder<SignatureBuilder> implements ISignatureBuilder {
  private readonly signature: ISignature;

  constructor() {
    super();
    this.signature = {} as ISignature;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.signature[`_${param}`] = extension;
    return this;
  }

  addType(type: ICoding): this {
    this.signature.type = this.signature.type || [];
    this.signature.type.push(type);
    return this;
  }

  build(): Signature {
    Object.assign(this.signature, { ...super.entity() });
    return new Signature(this.signature).toJson();
  }

  setData(data: string): this {
    this.signature.data = data;
    return this;
  }

  setMultipleType(types: ICoding[]): this {
    this.signature.type = types;
    return this;
  }

  setOnBehalfOf(onBehalfOf: IReference): this {
    this.signature.onBehalfOf = onBehalfOf;
    return this;
  }

  setSigFormat(sigFormat: string): this {
    this.signature.sigFormat = sigFormat;
    return this;
  }

  setTargetFormat(targetFormat: string): this {
    this.signature.targetFormat = targetFormat;
    return this;
  }

  setWhen(when: string): this {
    this.signature.when = when;
    return this;
  }

  setWho(who: IReference): this {
    this.signature.who = who;
    return this;
  }
}
