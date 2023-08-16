import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import { IContactPoint, IPeriod } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { ContactPoint } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

type ParamExtensionType = 'system' | 'value' | 'use' | 'rank';

interface IContactPointBuilder extends IBuildable<ContactPoint>, IElementBuilder<ContactPointBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, element: IElement): this;
  setSystem(value: ContactPointSystemEnum | ContactPointSystemType): this;
  setValue(value: string): this;
  setUse(value: ContactPointUseEnum | ContactPointUseType): this;
  setRank(value: number): this;
  setPeriod(value: IPeriod): this;
}
export default class ContactPointBuilder extends ElementBuilder<ContactPointBuilder> implements IContactPointBuilder {
  private readonly contactPoint: IContactPoint;

  constructor() {
    super();
    this.contactPoint = {} as IContactPoint;
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
  addParamExtension<T extends ParamExtensionType>(param: T, element: IElement): this {
    this.contactPoint[`_${param}`] = element;

    return this;
  }

  /**
   * @description Set the system property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setSystem(value: ContactPointSystemEnum | ContactPointSystemType): this {
    this.contactPoint.system = value;

    return this;
  }

  /**
   * @description Set the value property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setValue(value: string): this {
    this.contactPoint.value = value;

    return this;
  }

  /**
   * @description Set the use property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setUse(value: ContactPointUseEnum | ContactPointUseType): this {
    this.contactPoint.use = value;

    return this;
  }

  /**
   * @description Set the rank property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setRank(value: number): this {
    this.contactPoint.rank = value;

    return this;
  }

  /**
   * @description Set the period property of the contactPoint
   * @param value
   * @returns ContactPointBuilder The builder
   */
  setPeriod(value: IPeriod): this {
    this.contactPoint.period = value;

    return this;
  }

  /**
   * @description Build a ContactPoint
   */
  build(): ContactPoint {
    Object.assign(this.contactPoint, { ...super.entity() });
    return new ContactPoint(this.contactPoint).toJson();
  }
}
