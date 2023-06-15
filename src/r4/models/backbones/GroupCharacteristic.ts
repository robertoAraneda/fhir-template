import { IGroupCharacteristic } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension, IPeriod, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export default class GroupCharacteristic implements IGroupCharacteristic {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

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

  constructor(args?: IGroupCharacteristic) {
    Object.assign(this, args);
  }
}
