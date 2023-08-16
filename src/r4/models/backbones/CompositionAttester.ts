import BackboneElement from '../base/BackboneElement';
import { ICompositionAttester } from '../../interfaces/backbones';
import { CompositionAttestationModeEnum } from '../../../enums';
import { CompositionAttestationModeType } from '../../../types';
import { IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import CompositionAttesterBuilder from './CompositionAttesterBuilder';
import { compositionAttesterFields, CompositionAttesterValidator } from './CompositionAttesterValidator';

export default class CompositionAttester extends BackboneElement implements ICompositionAttester {
  mode: CompositionAttestationModeEnum | CompositionAttestationModeType;
  party?: IReference;
  time?: string;
  _time?: IElement;
  _mode?: IElement;

  toJson(): CompositionAttester {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CompositionAttester${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CompositionAttester${JSON.stringify(this.toJson())}`;
  }

  static getAttributes(): readonly string[] {
    return compositionAttesterFields;
  }

  static getModeCodes(): string[] {
    return Object.values(CompositionAttestationModeEnum);
  }

  static builder(): CompositionAttesterBuilder {
    return new CompositionAttesterBuilder();
  }

  constructor(args: ICompositionAttester) {
    super();
    CompositionAttesterValidator(args);
    Object.assign(this, args);
  }
}
