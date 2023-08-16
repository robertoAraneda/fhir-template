import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { Identifier } from './index';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';

interface IIdentifierBuilder extends IBuildable<Identifier>, IElementBuilder<IdentifierBuilder> {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this;
  setType(value: ICodeableConcept): this;
  setUse(value: IdentifierUseEnum | IdentifierUseType): this;
  setSystem(value: string): this;
  setValue(value: string): this;
  setPeriod(value: IPeriod): this;
  setAssigner(value: IReference): this;
}

export default class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements IIdentifierBuilder {
  private readonly identifier: IIdentifier;

  constructor() {
    super();
    this.identifier = {} as IIdentifier;
  }

  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): this {
    this.identifier[`_${param}`] = extension;

    return this;
  }

  setType(value: ICodeableConcept): this {
    this.identifier.type = value;

    return this;
  }

  setUse(value: IdentifierUseEnum | IdentifierUseType): this {
    this.identifier.use = value;

    return this;
  }

  setSystem(value: string): this {
    this.identifier.system = value;

    return this;
  }

  setValue(value: string): this {
    this.identifier.value = value;

    return this;
  }

  setPeriod(value: IPeriod): this {
    this.identifier.period = value;

    return this;
  }

  setAssigner(value: IReference): this {
    this.identifier.assigner = value;

    return this;
  }

  build(): Identifier {
    Object.assign(this.identifier, { ...super.entity() });
    return new Identifier(this.identifier).toJson();
  }
}
