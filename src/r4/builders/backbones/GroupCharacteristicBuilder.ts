import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IGroupCharacteristic } from '../../interfaces/backbones';
import { GroupCharacteristic } from '../../models/backbones';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

type ParamType = 'valueBoolean' | 'exclude';

interface IGroupCharacteristicBuilder extends IBuildable<IGroupCharacteristic>, ISerializable {
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

export default class GroupCharacteristicBuilder
  extends BackboneElementBuilder<GroupCharacteristicBuilder>
  implements IGroupCharacteristicBuilder
{
  private readonly groupCharacteristic: IGroupCharacteristic;
  constructor() {
    super();
    this.groupCharacteristic = new GroupCharacteristic();
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
    return JSON.parse(this.serialize());
  }

  raw(): IGroupCharacteristic {
    return {
      ...this.groupCharacteristic,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
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
