import BackboneElement from '../base/BackboneElement';
import { ICompositionRelatesTo } from '../../interfaces/backbones';
import { CompositionDocumentRelationshipTypeEnum } from '../../../enums';
import { CompositionDocumentRelationshipType } from '../../../types';
import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import CompositionRelatesToBuilder from './CompositionRelatesToBuilder';
import { CompositionRelatesToValidator } from './CompositionRelatesToValidator';

export default class CompositionRelatesTo extends BackboneElement implements ICompositionRelatesTo {
  code: CompositionDocumentRelationshipTypeEnum | CompositionDocumentRelationshipType;
  targetIdentifier?: IIdentifier;
  targetReference?: IReference;
  _code?: IElement;

  toJson(): CompositionRelatesTo {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CompositionRelatesTo${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CompositionRelatesTo${JSON.stringify(this.toJson())}`;
  }

  static getAttributes(): string[] {
    return ['code', 'targetIdentifier', 'targetReference', '_code', 'id', 'extension', 'modifierExtension'];
  }

  static builder(): CompositionRelatesToBuilder {
    return new CompositionRelatesToBuilder();
  }

  constructor(args: ICompositionRelatesTo) {
    super();
    CompositionRelatesToValidator(args);
    Object.assign(this, args);
  }
}
