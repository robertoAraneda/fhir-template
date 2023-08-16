import { NameUseEnum } from '../../enums';
import { NameUseType } from '../../types';
import { IHumanName, IPeriod } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { HumanName } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

type ParamExtensionType = 'use' | 'text' | 'family' | 'given' | 'prefix' | 'suffix';
type MultipleParamExtensionType = 'given' | 'prefix' | 'suffix';

interface IHumanNameBuilder extends IBuildable<HumanName>, IElementBuilder<HumanNameBuilder> {
  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends MultipleParamExtensionType ? IElement[] : IElement,
  ): this;
  setUse(value: NameUseEnum | NameUseType): this;
  setText(value: string): this;
  setFamily(value: string): this;
  addGiven(value: string): this;
  setMultipleGiven(value: string[]): this;
  addPrefix(value: string): this;
  setMultiplePrefix(value: string[]): this;
  addSuffix(value: string): this;
  setMultipleSuffix(value: string[]): this;
  setPeriod(value: IPeriod): this;
}
export default class HumanNameBuilder extends ElementBuilder<HumanNameBuilder> implements IHumanNameBuilder {
  private readonly humanName: IHumanName;

  constructor() {
    super();
    this.humanName = {} as IHumanName;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends MultipleParamExtensionType ? IElement[] : IElement,
  ): this {
    const includes = ['given', 'prefix', 'suffix'];
    if (includes.includes(param)) {
      const localMultipleParam = param as MultipleParamExtensionType;
      this.humanName[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'given' | 'prefix' | 'suffix'>;
      this.humanName[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  setUse(value: NameUseEnum | NameUseType): this {
    this.humanName.use = value;
    return this;
  }

  setText(value: string): this {
    this.humanName.text = value;
    return this;
  }

  setFamily(value: string): this {
    this.humanName.family = value;
    return this;
  }

  addGiven(value: string): this {
    this.humanName.given = this.humanName.given || [];
    this.humanName.given.push(value);
    return this;
  }

  setMultipleGiven(value: string[]): this {
    this.humanName.given = value;
    return this;
  }

  addPrefix(value: string): this {
    this.humanName.prefix = this.humanName.prefix || [];
    this.humanName.prefix.push(value);
    return this;
  }

  setMultiplePrefix(value: string[]): this {
    this.humanName.prefix = value;
    return this;
  }

  addSuffix(value: string): this {
    this.humanName.suffix = this.humanName.suffix || [];
    this.humanName.suffix.push(value);
    return this;
  }

  setMultipleSuffix(value: string[]): this {
    this.humanName.suffix = value;
    return this;
  }

  setPeriod(value: IPeriod): this {
    this.humanName.period = value;
    return this;
  }

  build(): HumanName {
    Object.assign(this.humanName, { ...super.entity() });
    return new HumanName(this.humanName).toJson();
  }
}
