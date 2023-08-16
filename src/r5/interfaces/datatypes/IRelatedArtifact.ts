import { IElement } from '../base';
import IAttachment from './IAttachment';
import ICodeableConcept from './ICodeableConcept';
import IReference from './IReference';
import RelatedArtifactTypeEnum from '../../enums/RelatedArtifactTypeEnum';
import RelatedArtifactTypeType from '../../types/RelatedArtifactTypeType';

export default interface IRelatedArtifact extends IElement {
  type: RelatedArtifactTypeEnum | RelatedArtifactTypeType;
  classifier?: ICodeableConcept[];
  label?: string;
  display?: string;
  citation?: string;
  document?: IAttachment;
  resource?: string;
  resourceReference?: IReference;
  publicationStatus?: string;
  publicationDate?: string;

  _type?: IElement;
  _label?: IElement;
  _display?: IElement;
  _citation?: IElement;
  _publicationStatus?: IElement;
  _publicationDate?: IElement;
}
