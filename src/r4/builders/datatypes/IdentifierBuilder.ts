import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { IIdentifier, ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Identifier } from '../../models/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { validateReference } from '../../../globals/helpers/validateReference';

interface IIdentifierBuilder extends IBuildable<IIdentifier>, ISerializable {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder;
  setType(value: ICodeableConcept): IdentifierBuilder;
  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder;
  setSystem(value: string): IdentifierBuilder;
  setValue(value: string): IdentifierBuilder;
  setPeriod(value: IPeriod): IdentifierBuilder;
  setAssigner(value: IReference): IdentifierBuilder;
}

export default class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements IIdentifierBuilder {
  private readonly identifier: IIdentifier;

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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IIdentifier {
    return JSON.parse(this.serialize());
  }

  raw(): IIdentifier {
    return {
      ...this.identifier,
      ...super.entity(),
    };
  }
}
