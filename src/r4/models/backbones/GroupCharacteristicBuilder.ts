import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import GroupCharacteristic from './GroupCharacteristic';

type ParamExtensionType = 'valueBoolean' | 'exclude';

export interface IGroupCharacteristicBuilder
  extends IBuildable<GroupCharacteristic>,
    IBackboneElementBuilder<GroupCharacteristicBuilder>,
    IElementBuilder<GroupCharacteristicBuilder> {
  setCode(code: ICodeableConcept): GroupCharacteristicBuilder;

  setValueBoolean(value: boolean): GroupCharacteristicBuilder;

  setValueQuantity(value: IQuantity): GroupCharacteristicBuilder;

  setValueRange(value: IRange): GroupCharacteristicBuilder;

  setValueReference(value: IReference): GroupCharacteristicBuilder;

  setValueCodeableConcept(value: ICodeableConcept): GroupCharacteristicBuilder;

  setParamExtension<T extends ParamExtensionType>(
    param: ParamExtensionType,
    extension: IElement,
  ): GroupCharacteristicBuilder;

  setExclude(exclude: boolean): GroupCharacteristicBuilder;

  setPeriod(period: IPeriod): GroupCharacteristicBuilder;
}

export class GroupCharacteristicBuilder
  extends BackboneElementBuilder<GroupCharacteristicBuilder>
  implements IGroupCharacteristicBuilder
{
  private readonly groupCharacteristic: GroupCharacteristic;

  constructor() {
    super();
    this.groupCharacteristic = new GroupCharacteristic();
  }

  build(): GroupCharacteristic {
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

    Object.assign(this.groupCharacteristic, { ...super.entity() });
    return this.groupCharacteristic.toJson();
  }

  setCode(code: ICodeableConcept): GroupCharacteristicBuilder {
    this.groupCharacteristic.code = code;
    return this;
  }

  setExclude(exclude: boolean): GroupCharacteristicBuilder {
    this.groupCharacteristic.exclude = exclude;
    return this;
  }

  setParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): GroupCharacteristicBuilder {
    this.groupCharacteristic[`_${param}`] = extension;
    return this;
  }

  setPeriod(period: IPeriod): GroupCharacteristicBuilder {
    this.groupCharacteristic.period = period;
    return this;
  }

  setValueBoolean(value: boolean): GroupCharacteristicBuilder {
    this.groupCharacteristic.valueBoolean = value;
    return this;
  }

  setValueCodeableConcept(value: ICodeableConcept): GroupCharacteristicBuilder {
    this.groupCharacteristic.valueCodeableConcept = value;
    return this;
  }

  setValueQuantity(value: IQuantity): GroupCharacteristicBuilder {
    this.groupCharacteristic.valueQuantity = value;
    return this;
  }

  setValueRange(value: IRange): GroupCharacteristicBuilder {
    this.groupCharacteristic.valueRange = value;
    return this;
  }

  setValueReference(value: IReference): GroupCharacteristicBuilder {
    this.groupCharacteristic.valueReference = value;
    return this;
  }
}
