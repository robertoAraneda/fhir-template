import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import CompositionRelatesTo from './CompositionRelatesTo';
import { IElementBuilder } from '../base/ElementBuilder';
import { CompositionDocumentRelationshipTypeEnum } from '../../enums';
import { CompositionDocumentRelationshipType } from '../../types';
import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';

export interface ICompositionRelatesToBuilder
  extends IBuildable<CompositionRelatesTo>,
    IBackboneElementBuilder<CompositionRelatesToBuilder>,
    IElementBuilder<CompositionRelatesToBuilder> {
  setCode(
    code: CompositionDocumentRelationshipTypeEnum | CompositionDocumentRelationshipType,
  ): CompositionRelatesToBuilder;

  setTargetIdentifier(identifier: IIdentifier): CompositionRelatesToBuilder;

  setTargetReference(reference: IReference): CompositionRelatesToBuilder;

  addParamExtension(param: 'code', element: IElement): CompositionRelatesToBuilder;
}
export default class CompositionRelatesToBuilder
  extends BackboneElementBuilder<CompositionRelatesToBuilder>
  implements ICompositionRelatesToBuilder
{
  private readonly _compositionRelatesTo: CompositionRelatesTo;

  constructor() {
    super();
    this._compositionRelatesTo = new CompositionRelatesTo();
  }

  addParamExtension(param: 'code', element: IElement): CompositionRelatesToBuilder {
    this._compositionRelatesTo[`_${param}`] = element;
    return this;
  }

  setCode(
    code: CompositionDocumentRelationshipTypeEnum | CompositionDocumentRelationshipType,
  ): CompositionRelatesToBuilder {
    this._compositionRelatesTo.code = code;
    return this;
  }

  setTargetIdentifier(identifier: IIdentifier): CompositionRelatesToBuilder {
    this._compositionRelatesTo.targetIdentifier = identifier;
    return this;
  }

  setTargetReference(reference: IReference): CompositionRelatesToBuilder {
    if (reference.reference) validateReferenceHelper(reference.reference, ['Composition']);
    this._compositionRelatesTo.targetReference = reference;
    return this;
  }

  build(): CompositionRelatesTo {
    Object.assign(this._compositionRelatesTo, { ...super.entity() });
    return this._compositionRelatesTo.toJson();
  }
}
