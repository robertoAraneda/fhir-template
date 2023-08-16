import { IBuildable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import RelatedArtifact from './RelatedArtifact';
import RelatedArtifactTypeEnum from '../../enums/RelatedArtifactTypeEnum';
import RelatedArtifactTypeType from '../../types/RelatedArtifactTypeType';
import { IAttachment, ICodeableConcept, IReference } from '../../interfaces/datatypes';
import RelatedArtifactPublicationStatusEnum from '../../enums/RelatedArtifactPublicationStatusEnum';
import RelatedArtifactPublicationStatusType from '../../types/RelatedArtifactPublicationStatusType';
import IRelatedArtifact from '../../interfaces/datatypes/IRelatedArtifact';
import { IElement } from '../../interfaces/base';

type RelatedArtifactExtensionParam =
  | 'type'
  | 'label'
  | 'display'
  | 'citation'
  | 'publicationStatus'
  | 'publicationDate';

export interface IRelatedArtifactBuilder extends IBuildable<RelatedArtifact>, IElementBuilder<RelatedArtifactBuilder> {
  addParamExtension(param: RelatedArtifactExtensionParam, extension: IElement): this;
  setType(value: RelatedArtifactTypeEnum | RelatedArtifactTypeType): this;
  addClassifier(value: ICodeableConcept): this;
  setMultipleClassifier(value: ICodeableConcept[]): this;
  setLabel(value: string): this;
  setDisplay(value: string): this;
  setCitation(value: string): this;
  setDocument(value: IAttachment): this;
  setResource(value: string): this;
  setResourceReference(value: IReference): this;
  setPublicationStatus(value: RelatedArtifactPublicationStatusEnum | RelatedArtifactPublicationStatusType): this;
  setPublicationDate(value: string): this;
}

export default class RelatedArtifactBuilder
  extends ElementBuilder<RelatedArtifactBuilder>
  implements IRelatedArtifactBuilder
{
  private readonly relatedArtifact: IRelatedArtifact;

  constructor() {
    super();
    this.relatedArtifact = {} as IRelatedArtifact;
  }

  addClassifier(value: ICodeableConcept): this {
    this.relatedArtifact.classifier = this.relatedArtifact.classifier || [];
    this.relatedArtifact.classifier.push(value);
    return this;
  }

  addParamExtension(param: RelatedArtifactExtensionParam, extension: IElement): this {
    this.relatedArtifact[`_${param}`] = extension;

    return this;
  }

  build(): RelatedArtifact {
    Object.assign(this.relatedArtifact, { ...super.entity() });
    return new RelatedArtifact(this.relatedArtifact).toJson();
  }

  setCitation(value: string): this {
    this.relatedArtifact.citation = value;
    return this;
  }

  setDisplay(value: string): this {
    this.relatedArtifact.display = value;
    return this;
  }

  setDocument(value: IAttachment): this {
    this.relatedArtifact.document = value;
    return this;
  }

  setLabel(value: string): this {
    this.relatedArtifact.label = value;
    return this;
  }

  setMultipleClassifier(value: ICodeableConcept[]): this {
    this.relatedArtifact.classifier = value;
    return this;
  }

  setPublicationDate(value: string): this {
    this.relatedArtifact.publicationDate = value;
    return this;
  }

  setPublicationStatus(value: RelatedArtifactPublicationStatusEnum | RelatedArtifactPublicationStatusType): this {
    this.relatedArtifact.publicationStatus = value;
    return this;
  }

  setResource(value: string): this {
    this.relatedArtifact.resource = value;
    return this;
  }

  setResourceReference(value: IReference): this {
    this.relatedArtifact.resourceReference = value;
    return this;
  }

  setType(value: RelatedArtifactTypeEnum | RelatedArtifactTypeType): this {
    this.relatedArtifact.type = value;
    return this;
  }
}
