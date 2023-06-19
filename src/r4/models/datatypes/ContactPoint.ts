import { ICodeableConcept, IContactPoint, IExtension, IPeriod } from '../../interfaces/datatypes';
import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

/**
 * @description Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {IPeriod} period - Time period when the contact point was/is in use
 * @property {number} rank - Specify preferred order of use (1 = highest)
 * @property {ContactPointSystemEnum} system - phone | fax | email | pager | url | sms | other
 * @property {string} value - The actual contact point details
 * @property {ContactPointUseEnum} use - home | work | temp | old | mobile - purpose of this contact point
 * @property {IElement} _system - Extension of system element
 * @property {IElement} _value - Extension of value element
 * @property {IElement} _use - Extension of use element
 * @property {IElement} _rank - Extension of rank element
 * @see https://www.hl7.org/fhir/datatypes.html#ContactPoint ContactPoint
 * @author Roberto Araneda
 *
 * @example ```json
 * JSON Template
 * {
 *   // from Element: extension
 *   "system" : "<code>", // phone | fax | email | pager | url | sms | other
 *   "value" : "<string>", // The actual contact point details
 *   "use" : "<code>", // home | work | temp | old | mobile - purpose of this contact point
 *   "rank" : "<positiveInt>", // Specify preferred order of use (1 = highest)
 *   "period" : { Period } // Time period when the contact point was/is in use
 * }
 */
export default class ContactPoint extends Element implements IContactPoint {
  /**
   * @description phone | fax | email | pager | url | sms | other
   */
  system?: ContactPointSystemEnum | ContactPointSystemType;

  /**
   * @description The actual contact point details
   */
  value?: string;

  /**
   * @description home | work | temp | old | mobile - purpose of this contact point
   */
  use?: ContactPointUseEnum | ContactPointUseType;

  /**
   * @description Specify preferred order of use (1 = highest)
   */
  rank?: number;

  /**
   * @description Time period when the contact point was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of system element
   */
  _system?: IElement;

  /**
   * @description Extension of value element
   */
  _value?: IElement;

  /**
   * @description Extension of use element
   */
  _use?: IElement;

  /**
   * @description Extension of rank element
   */
  _rank?: IElement;

  static builder(): IContactPointBuilder {
    return new ContactPointBuilder();
  }

  constructor(args?: IContactPoint) {
    super();
    Object.assign(this, args);
  }
}

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

class ContactPointBuilder extends ElementBuilder<ContactPointBuilder> implements IContactPointBuilder {
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
