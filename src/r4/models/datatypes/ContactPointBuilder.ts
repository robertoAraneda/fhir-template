import { IBuildable } from '../../../globals/interfaces';
import { IPeriod } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import CodeableConcept from './CodeableConcept';
import ContactPoint from './ContactPoint';

type ParamExtensionType = 'system' | 'value' | 'use' | 'rank';

export interface IContactPointBuilder extends IBuildable<CodeableConcept>, IElementBuilder<ContactPointBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): ContactPointBuilder;

  setSystem(value: ContactPointSystemEnum | ContactPointSystemType): ContactPointBuilder;

  setValue(value: string): ContactPointBuilder;

  setUse(value: ContactPointUseEnum | ContactPointUseType): ContactPointBuilder;

  setRank(value: number): ContactPointBuilder;

  setPeriod(value: IPeriod): ContactPointBuilder;
}

export class ContactPointBuilder extends ElementBuilder<ContactPointBuilder> implements IContactPointBuilder {
  private readonly contactPoint: ContactPoint;

  constructor() {
    super();

    this.contactPoint = new ContactPoint();
  }

  /**
   * @description Add a param extension to the contactPoint
   * @param param
   * @param extension
   * @returns ContactPointBuilder The builder
   * @example ```typescript
   * const contactPoint = new ContactPointBuilder()
   * .addParamExtension('system', {
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
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): ContactPointBuilder {
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
   * @description Build a ContactPoint
   */
  build(): ContactPoint {
    Object.assign(this.contactPoint, { ...super.entity() });
    return this.contactPoint.toJson();
  }
}
