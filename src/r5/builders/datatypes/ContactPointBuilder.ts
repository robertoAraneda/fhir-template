import { ContactPointSystem } from '../../enums/ContactPointSystem';
import { ContactPointSystemType } from '../../types/ContactPointSystemType';
import { ContactPointUse } from '../../enums/ContactPointUse';
import { ContactPointUseType } from '../../types/ContactPointUseType';
import { ContactPoint } from '../../interfaces/datatypes/ContactPoint';
import { Period } from '../../interfaces/datatypes/Period';
import { Element } from '../../interfaces/base/Element';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Serialize } from '../../interfaces/base/Serialize';

type ParamType = 'system' | 'value' | 'use' | 'rank';
export class ContactPointBuilder
  extends ElementBuilder<ContactPointBuilder>
  implements Build<CodeableConcept>, Serialize
{
  private readonly contactPoint: ContactPoint;

  constructor() {
    super();

    this.contactPoint = {} as ContactPoint;
  }

  addContactPointParamExtension(param: ParamType, extension: Element): ContactPointBuilder {
    this.contactPoint[`_${param}`] = extension;

    return this;
  }

  setSystem(value: ContactPointSystem | ContactPointSystemType): ContactPointBuilder {
    this.contactPoint.system = value;

    return this;
  }

  setValue(value: string): ContactPointBuilder {
    this.contactPoint.value = value;

    return this;
  }

  setUse(value: ContactPointUse | ContactPointUseType): ContactPointBuilder {
    this.contactPoint.use = value;

    return this;
  }

  setRank(value: number): ContactPointBuilder {
    if (value < 1) throw new Error('Rank must 1 or up');
    this.contactPoint.rank = value;

    return this;
  }

  setPeriod(value: Period): ContactPointBuilder {
    this.contactPoint.period = value;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): ContactPoint {
    return JSON.parse(this.serialize());
  }

  raw(): Element {
    return {
      ...this.contactPoint,
      ...super.entity(),
    };
  }
}
