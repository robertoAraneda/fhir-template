import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { GroupCharacteristic } from './index';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { IGroupCharacteristic } from '../../interfaces/backbones';

type ParamExtensionType = 'valueBoolean' | 'exclude';

interface IGroupCharacteristicBuilder
  extends IBuildable<GroupCharacteristic>,
    IBackboneElementBuilder<GroupCharacteristicBuilder>,
    IElementBuilder<GroupCharacteristicBuilder> {
  setCode(code: ICodeableConcept): this;

  setValueBoolean(value: boolean): this;

  setValueQuantity(value: IQuantity): this;

  setValueRange(value: IRange): this;

  setValueReference(value: IReference): this;

  setValueCodeableConcept(value: ICodeableConcept): this;

  setParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;

  setExclude(exclude: boolean): this;

  setPeriod(period: IPeriod): this;
}

export default class GroupCharacteristicBuilder
  extends BackboneElementBuilder<GroupCharacteristicBuilder>
  implements IGroupCharacteristicBuilder
{
  private readonly groupCharacteristic: IGroupCharacteristic;
  constructor() {
    super();
    this.groupCharacteristic = {} as IGroupCharacteristic;
  }

  build(): GroupCharacteristic {
    Object.assign(this.groupCharacteristic, { ...super.entity() });
    return new GroupCharacteristic(this.groupCharacteristic).toJson();
  }

  setCode(code: ICodeableConcept): this {
    this.groupCharacteristic.code = code;
    return this;
  }

  setExclude(exclude: boolean): this {
    this.groupCharacteristic.exclude = exclude;
    return this;
  }

  setParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
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
