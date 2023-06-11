import { IDomainResource, IElement } from '../../interfaces/base';
import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { transformReference } from '../../../globals/helpers/transformReference';
import { Reference } from '../../models/datatypes/Reference';

interface IReferenceBuilder extends IBuildable<IReference>, ISerializable {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): ReferenceBuilder;
  setReference<T extends IDomainResource | string>(value: T): ReferenceBuilder;
  setDisplay(value: string): ReferenceBuilder;
  setIdentifier(value: IIdentifier): ReferenceBuilder;
  setType(value: string): ReferenceBuilder;
}
export class ReferenceBuilder extends ElementBuilder<ReferenceBuilder> implements IReferenceBuilder {
  private readonly reference: IReference;

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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): IReference {
    return {
      ...this.reference,
      ...super.entity(),
    };
  }

  build(): IReference {
    return JSON.parse(this.serialize());
  }
}
