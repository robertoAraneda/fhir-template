import { IBackboneElement, IElement } from '../base';
import { CompositionAttestationModeEnum } from '../../../enums';
import { CompositionAttestationModeType } from '../../../types';
import { ICodeableConcept, IReference } from '../datatypes';
import IRelatedArtifact from '../datatypes/IRelatedArtifact';

export default interface ICompositionAttester extends IBackboneElement {
  mode: ICodeableConcept;
  time?: string;
  party?: IReference;
  _time?: IElement;
}
