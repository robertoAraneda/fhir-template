import { IGroupCharacteristic } from '../../interfaces/backbones';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { GroupCharacteristicBuilder, IGroupCharacteristicBuilder } from './GroupCharacteristicBuilder';

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
