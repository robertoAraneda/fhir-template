import { NameUseEnum } from '../../enums';
import { NameUseType } from '../../types';
import { IHumanName, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { HumanName } from '../../models/datatypes/HumanName';
import { IBuildable, ISerializable } from '../../../globals/interfaces';

type ParamType = 'use' | 'text' | 'family' | 'given' | 'prefix' | 'suffix';
type MultipleParamType = 'given' | 'prefix' | 'suffix';

interface IHumanNameBuilder extends IBuildable<IHumanName>, ISerializable {
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
export class HumanNameBuilder extends ElementBuilder<HumanNameBuilder> implements IHumanNameBuilder {
  private readonly humanName: IHumanName;

  constructor() {
    super();

    this.humanName = new HumanName();
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): IHumanName {
    return {
      ...this.humanName,
      ...super.entity(),
    };
  }

  build(): IHumanName {
    return JSON.parse(this.serialize());
  }
}
