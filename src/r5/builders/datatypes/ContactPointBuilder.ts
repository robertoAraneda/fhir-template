import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import { IContactPoint, IPeriod, ICodeableConcept } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { ContactPoint } from '../../models/datatypes';

type ParamType = 'system' | 'value' | 'use' | 'rank';
export default class ContactPointBuilder
  extends ElementBuilder<ContactPointBuilder>
  implements IBuildable<ICodeableConcept>, ISerializable
{
  private contactPoint: IContactPoint;

  constructor() {
    super();

    this.contactPoint = new ContactPoint();
  }

  /**
   * @description Create a new ContactPoint from a JSON representation
   * @param json
   * @returns build and serialize functions
   */
  fromJSON(json: IContactPoint) {
    this.contactPoint = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  /**
   * @description Add a param extension to the contactPoint
   * @param param
   * @param extension
   * @returns ContactPointBuilder The builder
   * @example ```typescript
   * const contactPoint = new ContactPointBuilder()
   * .addContactPointParamExtension('system', {
   *   "extension": [
   *    {
   *      url: "http://example.com",
   *      valueString: "example"
   *    }
   *   ]
   * })
   * .build();
   * JSON generated:
   * {
   *   "_system": {
   *   "extension": [
   *      {
   *        url: "http://example.com",
   *        valueString: "example"
   *      }
   *    ]
   *   }
   * }
   */
  addContactPointParamExtension(param: ParamType, extension: IElement): ContactPointBuilder {
    this.contactPoint[`_${param}`] = extension;

    return this;
  }

  /**
   * @description Set the system property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setSystem(value: ContactPointSystemEnum | ContactPointSystemType): ContactPointBuilder {
    this.contactPoint.system = value;

    return this;
  }

  /**
   * @description Set the value property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setValue(value: string): ContactPointBuilder {
    this.contactPoint.value = value;

    return this;
  }

  /**
   * @description Set the use property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setUse(value: ContactPointUseEnum | ContactPointUseType): ContactPointBuilder {
    this.contactPoint.use = value;

    return this;
  }

  /**
   * @description Set the rank property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setRank(value: number): ContactPointBuilder {
    if (value < 1) throw new Error('Rank must 1 or up');
    this.contactPoint.rank = value;

    return this;
  }

  /**
   * @description Set the period property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setPeriod(value: IPeriod): ContactPointBuilder {
    this.contactPoint.period = value;

    return this;
  }

  /**
   * @description Create a string representation of the contactPoint
   */
  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  /**
   * @description Build a ContactPoint
   */
  build(): IContactPoint {
    return JSON.parse(this.serialize());
  }

  /**
   * @description Raw object representation of the contactPoint
   */
  raw(): IContactPoint {
    return {
      ...this.contactPoint,
      ...super.entity(),
    };
  }
}
