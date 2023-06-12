import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { IIdentifier, ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement, ISerializable, IBuildable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { validateReference } from '../../helpers/validateReference';
import { Identifier } from '../../models/datatypes/Identifier';

interface IIdentifierBuilder extends IBuildable<IIdentifier>, ISerializable {
  addIdentifierParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder;
  setType(value: ICodeableConcept): IdentifierBuilder;
  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder;
  setSystem(value: string): IdentifierBuilder;
  setValue(value: string): IdentifierBuilder;
  setPeriod(value: IPeriod): IdentifierBuilder;
  setAssigner(value: IReference): IdentifierBuilder;
  fromJSON(json: IIdentifier): Pick<IIdentifierBuilder, 'build' | 'serialize'>;
}

export class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements IIdentifierBuilder {
  private identifier: IIdentifier;

  constructor() {
    super();

    this.identifier = new Identifier();
  }

  fromJSON(json: IIdentifier): Pick<IIdentifierBuilder, 'build' | 'serialize'> {
    this.identifier = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  addIdentifierParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder {
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
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): IIdentifier {
    return {
      ...this.identifier,
      ...super.entity(),
    };
  }
}
