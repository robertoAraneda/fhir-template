import { IExtension, IHumanName, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { NameUseEnum } from '../../enums';
import { NameUseType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

/**
 * @description Name of a human or other living entity - parts and usage
 * @implements {IHumanName}
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {NameUseEnum} use - usual | official | temp | nickname | anonymous | old | maiden
 * @property {string} text - Text representation of the full name
 * @property {string} family - Family name (often called 'Surname')
 * @property {string[]} given - Given names (not always 'first'). Includes middle names
 * @property {string[]} prefix - Parts that come before the name
 * @property {string[]} suffix - Parts that come after the name
 * @property {IPeriod} period - Time period when name was/is in use
 * @property {IElement} _use - Extension of use
 * @property {IElement} _text - Extension of text
 * @property {IElement} _family - Extension of family
 * @property {IElement[]} _given - Extension of given
 * @property {IElement[]} _prefix - Extension of prefix
 * @property {IElement[]} _suffix - Extension of suffix
 * @see {@link https://www.hl7.org/fhir/datatypes.html#HumanName HumanName}
 * @author Roberto Araneda
 * @example JSON Template for HumanName
 * {
 *   // from Element: extension
 *   "use" : "<code>", // usual | official | temp | nickname | anonymous | old | maiden
 *   "text" : "<string>", // Text representation of the full name
 *   "family" : "<string>", // Family name (often called 'Surname')
 *   "given" : ["<string>"], // Given names (not always 'first'). Includes middle names
 *   "prefix" : ["<string>"], // Parts that come before the name
 *   "suffix" : ["<string>"], // Parts that come after the name
 *   "period" : { Period } // Time period when name was/is in use
 * }
 */
export default class HumanName extends Element implements IHumanName {
  /**
   * @description usual | official | temp | nickname | anonymous | old | maiden
   */
  use?: NameUseEnum | NameUseType;

  /**
   * @description Text representation of the full name
   */
  text?: string;

  /**
   * @description Family name (often called 'Surname')
   */
  family?: string;

  /**
   * @description Given names (not always 'first'). Includes middle names
   */
  given?: string[];

  /**
   * @description Parts that come before the name
   */
  prefix?: string[];

  /**
   * @description Parts that come after the name
   */
  suffix?: string[];

  /**
   * @description Time period when name was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of use
   */
  _use?: IElement;

  /**
   * @description Extension of text
   */
  _text?: IElement;

  /**
   * @description Extension of family
   */
  _family?: IElement;

  /**
   * @description Extension of given
   */
  _given?: IElement[];

  /**
   * @description Extension of prefix
   */
  _prefix?: IElement[];

  /**
   * @description Extension of suffix
   */
  _suffix?: IElement[];

  static builder(): IHumanNameBuilder {
    return new HumanNameBuilder();
  }

  constructor(args?: IHumanName) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'use' | 'text' | 'family' | 'given' | 'prefix' | 'suffix';
type MultipleParamType = 'given' | 'prefix' | 'suffix';

export interface IHumanNameBuilder extends IBuildable<IHumanName>, ISerializable, IElementBuilder<IHumanNameBuilder> {
  addParamExtension(param: ParamType, extension: IElement | IElement[]): HumanNameBuilder;
  setUse(value: NameUseEnum | NameUseType): HumanNameBuilder;
  setText(value: string): HumanNameBuilder;
  setFamily(value: string): HumanNameBuilder;
  addGiven(value: string): HumanNameBuilder;
  setMultipleGiven(value: string[]): HumanNameBuilder;
  addPrefix(value: string): HumanNameBuilder;
  setMultiplePrefix(value: string[]): HumanNameBuilder;
  addSuffix(value: string): HumanNameBuilder;
  setMultipleSuffix(value: string[]): HumanNameBuilder;
  setPeriod(value: IPeriod): HumanNameBuilder;
}
class HumanNameBuilder extends ElementBuilder<HumanNameBuilder> implements IHumanNameBuilder {
  private readonly humanName: IHumanName;

  constructor() {
    super();

    this.humanName = {} as IHumanName;
  }

  addParamExtension<T extends ParamType>(
    param: T,
    extension: T extends 'given' | 'prefix' | 'suffix' ? IElement[] : IElement,
  ): HumanNameBuilder {
    const includes = ['given', 'prefix', 'suffix'];
    if (includes.includes(param)) {
      const localMultipleParam = param as MultipleParamType;
      this.humanName[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamType, 'given' | 'prefix' | 'suffix'>;
      this.humanName[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  setUse(value: NameUseEnum | NameUseType): HumanNameBuilder {
    this.humanName.use = value;
    return this;
  }

  setText(value: string): HumanNameBuilder {
    this.humanName.text = value;
    return this;
  }

  setFamily(value: string): HumanNameBuilder {
    this.humanName.family = value;
    return this;
  }

  addGiven(value: string): HumanNameBuilder {
    this.humanName.given = this.humanName.given || [];
    this.humanName.given.push(value);
    return this;
  }

  setMultipleGiven(value: string[]): HumanNameBuilder {
    this.humanName.given = value;
    return this;
  }

  addPrefix(value: string): HumanNameBuilder {
    this.humanName.prefix = this.humanName.prefix || [];
    this.humanName.prefix.push(value);
    return this;
  }

  setMultiplePrefix(value: string[]): HumanNameBuilder {
    this.humanName.prefix = value;
    return this;
  }

  addSuffix(value: string): HumanNameBuilder {
    this.humanName.suffix = this.humanName.suffix || [];
    this.humanName.suffix.push(value);
    return this;
  }

  setMultipleSuffix(value: string[]): HumanNameBuilder {
    this.humanName.suffix = value;
    return this;
  }

  setPeriod(value: IPeriod): HumanNameBuilder {
    this.humanName.period = value;
    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  compileAsDefault(): IHumanName {
    return {
      ...this.humanName,
      ...super.entity(),
    };
  }

  build(): IHumanName {
    return JSON.parse(this.buildAsString());
  }
}
