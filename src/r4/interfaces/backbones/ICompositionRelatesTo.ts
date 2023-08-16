import { IBackboneElement, IElement } from '../base';
import { CompositionDocumentRelationshipTypeEnum } from '../../../enums';
import { CompositionDocumentRelationshipType } from '../../../types';
import { IIdentifier, IReference } from '../datatypes';

export default interface ICompositionRelatesTo extends IBackboneElement {
  code: CompositionDocumentRelationshipTypeEnum | CompositionDocumentRelationshipType;
  targetIdentifier?: IIdentifier;
  targetReference?: IReference;
  _code?: IElement;
}
