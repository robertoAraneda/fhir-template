import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { transformReference } from '../../helpers/transformReference';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { Reference } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IDomainResource, IElement } from '../../interfaces/base';

export interface IReferenceBuilder extends IBuildable<Reference>, IElementBuilder<ReferenceBuilder> {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: IElement): this;
  setReference<T extends IDomainResource | string>(value: T): this;
  setDisplay(value: string): this;
  setIdentifier(value: IIdentifier): this;
  setType(value: string): this;
}

export default class ReferenceBuilder extends ElementBuilder<ReferenceBuilder> implements IReferenceBuilder {
  private readonly reference: IReference;

  constructor() {
    super();
    this.reference = {} as IReference;
  }

  addParamExtension(param: 'display' | 'type' | 'reference', extension: IElement): this {
    this.reference[`_${param}`] = extension;

    return this;
  }

  setReference<T extends IDomainResource | string>(value: T): this {
    if (typeof value === 'string') {
      this.reference.reference = value;
    } else {
      this.reference.reference = transformReference(value);
    }
    return this;
  }

  setDisplay(value: string): this {
    this.reference.display = value;
    return this;
  }

  setIdentifier(value: IIdentifier): this {
    this.reference.identifier = value;
    return this;
  }

  setType(value: string): this {
    this.reference.type = value;
    return this;
  }

  build(): Reference {
    Object.assign(this.reference, { ...super.entity() });
    return new Reference(this.reference).toJson();
  }
}
