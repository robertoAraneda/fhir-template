import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
import { ElementBuilder } from '../base/ElementBuilder';
import { validateReference } from '../../helpers/validateReference';
import { Identifier } from './index';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';

interface IIdentifierBuilder extends IBuildable<Identifier>, IElementBuilder<IdentifierBuilder> {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder;
  setType(value: ICodeableConcept): IdentifierBuilder;
  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder;
  setSystem(value: string): IdentifierBuilder;
  setValue(value: string): IdentifierBuilder;
  setPeriod(value: IPeriod): IdentifierBuilder;
  setAssigner(value: IReference): IdentifierBuilder;
}

export default class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements IIdentifierBuilder {
  private readonly identifier: Identifier;

  constructor() {
    super();
    this.identifier = new Identifier();
  }

  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder {
    this.identifier[`_${param}`] = extension;

    return this;
  }

  setType(value: ICodeableConcept): IdentifierBuilder {
    this.identifier.type = value;

    return this;
  }

  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder {
    this.identifier.use = value;

    return this;
  }

  setSystem(value: string): IdentifierBuilder {
    this.identifier.system = value;

    return this;
  }

  setValue(value: string): IdentifierBuilder {
    this.identifier.value = value;

    return this;
  }

  setPeriod(value: IPeriod): IdentifierBuilder {
    this.identifier.period = value;

    return this;
  }

  setAssigner(value: IReference): IdentifierBuilder {
    if (value.reference) {
      validateReference(value.reference, ['Organization']);
    }

    this.identifier.assigner = value;

    return this;
  }

  build(): Identifier {
    Object.assign(this.identifier, { ...super.entity() });
    return this.identifier.toJson();
  }
}
