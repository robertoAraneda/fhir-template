import Element from '../base/Element';
import IRelatedArtifact from '../../interfaces/datatypes/IRelatedArtifact';
import { IAttachment, ICodeableConcept, IReference } from '../../interfaces/datatypes';
import RelatedArtifactTypeEnum from '../../enums/RelatedArtifactTypeEnum';
import RelatedArtifactTypeType from '../../types/RelatedArtifactTypeType';
import { IElement } from '../../interfaces/base';
import { RelatedArtifactValidator } from './RelatedArtifactValidator';
import RelatedArtifactBuilder from './RelatedArtifactBuilder';

export default class RelatedArtifact extends Element implements IRelatedArtifact {
  citation?: string;
  classifier?: ICodeableConcept[];
  display?: string;
  document?: IAttachment;
  label?: string;
  publicationDate?: string;
  publicationStatus?: string;
  resource?: string;
  resourceReference?: IReference;
  type: RelatedArtifactTypeEnum | RelatedArtifactTypeType;

  _type?: IElement;
  _label?: IElement;
  _display?: IElement;
  _citation?: IElement;
  _publicationStatus?: IElement;
  _publicationDate?: IElement;

  static builder(): RelatedArtifactBuilder {
    return new RelatedArtifactBuilder();
  }

  toJson(): RelatedArtifact {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `RelatedArtifact${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `RelatedArtifact${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IRelatedArtifact) {
    super();
    RelatedArtifactValidator(args);
    Object.assign(this, args);
  }
}
