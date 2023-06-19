import { IGroupCharacteristic } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import BackboneElement from './BackboneElement';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class GroupCharacteristic extends BackboneElement implements IGroupCharacteristic {
  // GroupCharacteristic attributes
  code: ICodeableConcept;
  valueCodeableConcept: ICodeableConcept;
  valueBoolean: boolean;
  valueQuantity: IQuantity;
  valueRange: IRange;
  valueReference: IReference;
  exclude: boolean;
  period: IPeriod;

  // Extensions
  _valueBoolean?: IElement;
  _exclude?: IElement;

  static builder(): IGroupCharacteristicBuilder {
    return new GroupCharacteristicBuilder();
  }

  constructor(args?: IGroupCharacteristic) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'valueBoolean' | 'exclude';

export interface IGroupCharacteristicBuilder
  extends IBuildable<IGroupCharacteristic>,
    ISerializable,
    IBackboneElementBuilder<IGroupCharacteristicBuilder>,
    IElementBuilder<IGroupCharacteristicBuilder> {
  setCode(code: ICodeableConcept): this;
  setValueBoolean(value: boolean): this;
  setValueQuantity(value: IQuantity): this;
  setValueRange(value: IRange): this;
  setValueReference(value: IReference): this;
  setValueCodeableConcept(value: ICodeableConcept): this;
  setParamExtension(param: ParamType, extension: IElement): this;
  setExclude(exclude: boolean): this;
  setPeriod(period: IPeriod): this;
}

class GroupCharacteristicBuilder
  extends BackboneElementBuilder<GroupCharacteristicBuilder>
  implements IGroupCharacteristicBuilder
{
  private readonly groupCharacteristic: IGroupCharacteristic;
  constructor() {
    super();
    this.groupCharacteristic = {} as IGroupCharacteristic;
  }

  build(): IGroupCharacteristic {
    if (
      !this.groupCharacteristic.valueBoolean &&
      !this.groupCharacteristic.valueQuantity &&
      !this.groupCharacteristic.valueRange &&
      !this.groupCharacteristic.valueReference &&
      !this.groupCharacteristic.valueCodeableConcept &&
      !this.groupCharacteristic._valueBoolean
    ) {
      throw Error(
        'GroupCharacteristicBuilder - build(): requires valueBoolean or valueQuantity or valueRange or valueReference or valueCodeableConcept or _valueBoolean',
      );
    }

    if (!this.groupCharacteristic.exclude && !this.groupCharacteristic._exclude) {
      throw Error('GroupCharacteristicBuilder - build(): requires exclude or _exclude');
    }
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IGroupCharacteristic {
    return {
      ...this.groupCharacteristic,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
  }

  setCode(code: ICodeableConcept): this {
    this.groupCharacteristic.code = code;
    return this;
  }

  setExclude(exclude: boolean): this {
    this.groupCharacteristic.exclude = exclude;
    return this;
  }

  setParamExtension(param: ParamType, extension: IElement): this {
    this.groupCharacteristic[`_${param}`] = extension;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.groupCharacteristic.period = period;
    return this;
  }

  setValueBoolean(value: boolean): this {
    this.groupCharacteristic.valueBoolean = value;
    return this;
  }

  setValueCodeableConcept(value: ICodeableConcept): this {
    this.groupCharacteristic.valueCodeableConcept = value;
    return this;
  }

  setValueQuantity(value: IQuantity): this {
    this.groupCharacteristic.valueQuantity = value;
    return this;
  }

  setValueRange(value: IRange): this {
    this.groupCharacteristic.valueRange = value;
    return this;
  }

  setValueReference(value: IReference): this {
    this.groupCharacteristic.valueReference = value;
    return this;
  }
}
