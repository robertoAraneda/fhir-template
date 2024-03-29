import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import Identifier from './Identifier';

export interface IIdentifierBuilder extends IBuildable<Identifier>, IElementBuilder<IdentifierBuilder> {
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
      ValidateReferenceFormatHelper(value.reference, ['Organization']);
    }

    this.identifier.assigner = value;

    return this;
  }

  build(): Identifier {
    Object.assign(this.identifier, { ...super.entity() });
    return new Identifier(this.identifier).toJson();
  }
}
