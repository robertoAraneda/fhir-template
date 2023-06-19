import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IIdentifier } from '../../interfaces/datatypes';
import Element from '../base/Element';
import { IDomainResource } from '../../interfaces/base';
import { transformReference } from '../../../globals/helpers/transformReference';
import { IBuildable } from '../../../globals/interfaces';
import Reference from './Reference';

export interface IReferenceBuilder extends IBuildable<Reference>, IElementBuilder<ReferenceBuilder> {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): ReferenceBuilder;

  setReference<T extends IDomainResource | string>(value: T): ReferenceBuilder;

  setDisplay(value: string): ReferenceBuilder;

  setIdentifier(value: IIdentifier): ReferenceBuilder;

  setType(value: string): ReferenceBuilder;
}

export class ReferenceBuilder extends ElementBuilder<ReferenceBuilder> implements IReferenceBuilder {
  private readonly reference: Reference;

  constructor() {
    super();

    this.reference = new Reference();
  }

  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): ReferenceBuilder {
    this.reference[`_${param}`] = extension;

    return this;
  }

  setReference<T extends IDomainResource | string>(value: T): ReferenceBuilder {
    if (typeof value === 'string') {
      this.reference.reference = value;
    } else {
      this.reference.reference = transformReference(value);
    }
    return this;
  }

  setDisplay(value: string): ReferenceBuilder {
    this.reference.display = value;
    return this;
  }

  setIdentifier(value: IIdentifier): ReferenceBuilder {
    this.reference.identifier = value;
    return this;
  }

  setType(value: string): ReferenceBuilder {
    this.reference.type = value;
    return this;
  }

  build(): Reference {
    Object.assign(this.reference, { ...super.entity() });
    return this.reference.toJson();
  }
}
