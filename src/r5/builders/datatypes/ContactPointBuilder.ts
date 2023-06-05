import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import { IContactPoint, IPeriod, ICodeableConcept } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';

type ParamType = 'system' | 'value' | 'use' | 'rank';
export class ContactPointBuilder
  extends ElementBuilder<ContactPointBuilder>
  implements IBuildable<ICodeableConcept>, ISerializable
{
  private readonly contactPoint: IContactPoint;

  constructor() {
    super();

    this.contactPoint = {} as IContactPoint;
  }

  addContactPointParamExtension(param: ParamType, extension: IElement): ContactPointBuilder {
    this.contactPoint[`_${param}`] = extension;

    return this;
  }

  setSystem(value: ContactPointSystemEnum | ContactPointSystemType): ContactPointBuilder {
    this.contactPoint.system = value;

    return this;
  }

  setValue(value: string): ContactPointBuilder {
    this.contactPoint.value = value;

    return this;
  }

  setUse(value: ContactPointUseEnum | ContactPointUseType): ContactPointBuilder {
    this.contactPoint.use = value;

    return this;
  }

  setRank(value: number): ContactPointBuilder {
    if (value < 1) throw new Error('Rank must 1 or up');
    this.contactPoint.rank = value;

    return this;
  }

  setPeriod(value: IPeriod): ContactPointBuilder {
    this.contactPoint.period = value;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IContactPoint {
    return JSON.parse(this.serialize());
  }

  raw(): IContactPoint {
    return {
      ...this.contactPoint,
      ...super.entity(),
    };
  }
}
