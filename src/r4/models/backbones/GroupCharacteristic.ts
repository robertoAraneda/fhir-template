import { IGroupCharacteristic } from '../../interfaces/backbones';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { GroupCharacteristicBuilder } from './GroupCharacteristicBuilder';
import { GroupCharacteristicValidator } from './GroupCharacteristicValidator';

export default class GroupCharacteristic extends BackboneElement implements IGroupCharacteristic {
  // GroupCharacteristic attributes
  code: ICodeableConcept;
  valueCodeableConcept?: ICodeableConcept;
  valueBoolean?: boolean;
  valueQuantity?: IQuantity;
  valueRange?: IRange;
  valueReference?: IReference;
  exclude: boolean;
  period?: IPeriod;

  // Extensions
  _valueBoolean?: IElement;
  _exclude?: IElement;

  toJson(): GroupCharacteristic {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `GroupCharacteristic${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `GroupCharacteristic${JSON.stringify(this.toJson())}`;
  }

  static builder(): GroupCharacteristicBuilder {
    return new GroupCharacteristicBuilder();
  }

  constructor(args: IGroupCharacteristic) {
    super();
    GroupCharacteristicValidator(args);
    Object.assign(this, args);
  }
}
