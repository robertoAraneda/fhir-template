import { IExtension, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IDomainResource, IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import { transformReference } from '../../../globals/helpers/transformReference';
import Element from './Element';

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

  static builder(): IReferenceBuilder {
    return new ReferenceBuilder();
  }

  constructor(args?: IReference) {
    super();
    Object.assign(this, args);
  }
}

export interface IReferenceBuilder extends IBuildable<IReference>, ISerializable, IElementBuilder<IReferenceBuilder> {
  addParamExtension(param: 'display' | 'type' | 'reference', extension: Element): ReferenceBuilder;
  setReference<T extends IDomainResource | string>(value: T): ReferenceBuilder;
  setDisplay(value: string): ReferenceBuilder;
  setIdentifier(value: IIdentifier): ReferenceBuilder;
  setType(value: string): ReferenceBuilder;
}
class ReferenceBuilder extends ElementBuilder<ReferenceBuilder> implements IReferenceBuilder {
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

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  compileAsDefault(): IReference {
    return {
      ...this.reference,
      ...super.entity(),
    };
  }

  build(): IReference {
    return JSON.parse(this.buildAsString());
  }
}
