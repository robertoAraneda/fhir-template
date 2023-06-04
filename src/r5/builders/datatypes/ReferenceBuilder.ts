import { DomainResource } from '../../interfaces/base/DomainResource';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { Reference } from '../../interfaces/base/Reference';
import { Element } from '../../interfaces/base/Element';
import { transformReference } from '../../helpers/transformReference';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';

export class ReferenceBuilder extends ElementBuilder<ReferenceBuilder> implements Build<Reference>, Serialize {
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
