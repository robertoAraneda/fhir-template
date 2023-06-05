import { IDomainResource, IReference, ISerializable, IBuildable, IElement } from '../../interfaces/base';
import { IIdentifier } from '../../interfaces/datatypes';
import { transformReference } from '../../helpers/transformReference';
import { ElementBuilder } from '../base/ElementBuilder';

export class ReferenceBuilder
  extends ElementBuilder<ReferenceBuilder>
  implements IBuildable<IReference>, ISerializable
{
  private readonly reference: IReference;

  constructor() {
    super();

    this.reference = {} as IReference;
  }

  addReferenceParamExtension(param: 'display' | 'type' | 'reference', extension: Element): ReferenceBuilder {
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
