import { IdentifierUse } from '../../enums/IdentifierUse';
import { IdentifierUseType } from '../../types/IdentifierUseType';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { Reference } from '../../interfaces/base/Reference';
import { Element } from '../../interfaces/base/Element';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';
import { validateReference } from '../../helpers/validateReference';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Period } from '../../interfaces/datatypes/Period';

export class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements Build<Identifier>, Serialize {
  private readonly identifier: Identifier;

  constructor() {
    super();

    this.identifier = {} as Identifier;
  }

  addIdentifierParamExtension(param: 'use' | 'system' | 'value', extension: Element): IdentifierBuilder {
    this.identifier[`_${param}`] = extension;

    return this;
  }

  setType(value: CodeableConcept): IdentifierBuilder {
    this.identifier.type = value;

    return this;
  }

  setUse(value: IdentifierUse | IdentifierUseType): IdentifierBuilder {
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

  setPeriod(value: Period): IdentifierBuilder {
    this.identifier.period = value;

    return this;
  }

  setAssigner(value: Reference): IdentifierBuilder {
    if (value.reference) {
      validateReference(value.reference, ['Organization']);
    }

    this.identifier.assigner = value;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Identifier {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): Identifier {
    return {
      ...this.identifier,
      ...super.entity(),
    };
  }
}
