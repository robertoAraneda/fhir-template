import { IBackboneElement, IElement } from '../base';
import { CompositionAttestationModeEnum } from '../../../enums';
import { CompositionAttestationModeType } from '../../../types';
import { IReference } from '../datatypes';

type CompositionAttesterMode = CompositionAttestationModeEnum | CompositionAttestationModeType;
export default interface ICompositionAttester extends IBackboneElement {
  mode: CompositionAttesterMode;
  time?: string;
  party?: IReference;
  _time?: IElement;
  _mode?: IElement;
}
