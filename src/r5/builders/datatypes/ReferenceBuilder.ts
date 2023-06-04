import { DomainResource, Reference, Serializable, Buildable, Element } from '../../interfaces/base';
import { Identifier } from '../../interfaces/datatypes';
import { transformReference } from '../../helpers/transformReference';
import { ElementBuilder } from '../base/ElementBuilder';

export class ReferenceBuilder extends ElementBuilder<ReferenceBuilder> implements Buildable<Reference>, Serializable {
  private readonly reference: Reference;

  constructor() {
    super();

    this.reference = {} as Reference;
  }

  addReferenceParamExtension(param: 'display' | 'type' | 'reference', extension: Element): ReferenceBuilder {
    this.reference[`_${param}`] = extension;

    return this;
  }

  setReference<T extends DomainResource | string>(value: T): ReferenceBuilder {
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

  setIdentifier(value: Identifier): ReferenceBuilder {
    this.reference.identifier = value;
    return this;
  }

  setType(value: string): ReferenceBuilder {
    this.reference.type = value;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): Reference {
    return {
      ...this.reference,
      ...super.entity(),
    };
  }

  build(): Reference {
    return JSON.parse(this.serialize());
  }
}
