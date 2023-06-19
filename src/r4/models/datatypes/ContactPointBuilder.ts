import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ICodeableConcept, IContactPoint, IPeriod } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';

type ParamType = 'system' | 'value' | 'use' | 'rank';

export interface IContactPointBuilder
  extends IBuildable<ICodeableConcept>,
    ISerializable,
    IElementBuilder<IContactPointBuilder> {
  addParamExtension(param: ParamType, extension: IElement): ContactPointBuilder;

  setSystem(value: ContactPointSystemEnum | ContactPointSystemType): ContactPointBuilder;

  setValue(value: string): ContactPointBuilder;

  setUse(value: ContactPointUseEnum | ContactPointUseType): ContactPointBuilder;

  setRank(value: number): ContactPointBuilder;

  setPeriod(value: IPeriod): ContactPointBuilder;
}

export class ContactPointBuilder extends ElementBuilder<ContactPointBuilder> implements IContactPointBuilder {
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
  addParamExtension(param: ParamType, extension: IElement): ContactPointBuilder {
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
  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  /**
   * @description Build a ContactPoint
   */
  build(): IContactPoint {
    return JSON.parse(this.buildAsString());
  }

  /**
   * @description Raw object representation of the contactPoint
   */
  compileAsDefault(): IContactPoint {
    return {
      ...this.contactPoint,
      ...super.entity(),
    };
  }
}
