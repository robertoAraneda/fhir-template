import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { validateReference } from '../../../globals/helpers/validateReference';

export interface IIdentifierBuilder
  extends IBuildable<IIdentifier>,
    ISerializable,
    IElementBuilder<IIdentifierBuilder> {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder;

  setType(value: ICodeableConcept): IdentifierBuilder;

  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder;

  setSystem(value: string): IdentifierBuilder;

  setValue(value: string): IdentifierBuilder;

  setPeriod(value: IPeriod): IdentifierBuilder;

  setAssigner(value: IReference): IdentifierBuilder;
}

export class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements IIdentifierBuilder {
  private readonly identifier: IIdentifier;

  constructor() {
    super();

    this.identifier = {} as IIdentifier;
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

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IIdentifier {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IIdentifier {
    return {
      ...this.identifier,
      ...super.entity(),
    };
  }
}
