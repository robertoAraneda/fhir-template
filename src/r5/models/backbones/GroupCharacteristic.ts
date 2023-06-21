import { IGroupCharacteristic } from '../../interfaces/backbones';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import GroupCharacteristicBuilder from './GroupCharacteristicBuilder';
import BackboneElement from '../base/BackboneElement';

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

  static builder(): GroupCharacteristicBuilder {
    return new GroupCharacteristicBuilder();
  }

  toJson(): GroupCharacteristic {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `GroupCharacteristic${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `GroupCharacteristic${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IGroupCharacteristic) {
    super();
    Object.assign(this, args);
  }
}
