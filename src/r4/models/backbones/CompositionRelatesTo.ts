import BackboneElement from '../base/BackboneElement';
import { ICompositionRelatesTo } from '../../interfaces/backbones';
import { CompositionDocumentRelationshipTypeEnum } from '../../enums';
import { CompositionDocumentRelationshipType } from '../../types';
import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import CompositionRelatesToBuilder from './CompositionRelatesToBuilder';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { _validateBackbone } from '../../validators/BaseValidator';
import BackboneException from '../../../globals/exceptions/BackboneException';
import { validateRequiredFieldHelper } from '../../../globals/helpers/validateRequiredFieldHelper';

const ENTITY_NAME = 'Composition_RelatesTo';

export default class CompositionRelatesTo extends BackboneElement implements ICompositionRelatesTo {
  code: CompositionDocumentRelationshipTypeEnum | CompositionDocumentRelationshipType;
  targetIdentifier: IIdentifier;
  targetReference: IReference;
  _code: IElement;

  toJson(): CompositionRelatesTo {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson())}`;
  }

  static getAttributes(): string[] {
    return ['code', 'targetIdentifier', 'targetReference', '_code', 'id', 'extension', 'modifierExtension'];
  }

  static builder(): CompositionRelatesToBuilder {
    return new CompositionRelatesToBuilder();
  }

  static validate(args: ICompositionRelatesTo, validator?: 'format' | 'all' | 'reference'): boolean {
    return validate(args, validator);
  }

  constructor(args?: ICompositionRelatesTo) {
    super();
    if (args) validate(args);
    Object.assign(this, args);
  }
}

function validateFormat(args: ICompositionRelatesTo) {
  const { isValid, errors } = _validateBackbone(args, ENTITY_NAME);

  if (!isValid) {
    throw new BackboneException(ENTITY_NAME, errors);
  }
}

function validateReferences(args: ICompositionRelatesTo) {
  // validate that the target reference is one of the allowed types
  if (args.targetReference?.reference)
    validateReferenceHelper(
      args.targetReference.reference,
      ['Composition', 'DocumentReference'],
      `${ENTITY_NAME}.targetReference.reference`,
    );

  // validate that the target assigner reference is one of the allowed types
  if (args.targetIdentifier?.assigner?.reference)
    validateReferenceHelper(
      args.targetIdentifier.assigner.reference,
      ['Organization'],
      `${ENTITY_NAME}.targetIdentifier.assigner.reference`,
    );
}

function validate(args: ICompositionRelatesTo, validator?: 'format' | 'all' | 'reference'): boolean {
  switch (validator) {
    case 'format':
      validateFormat(args);
      break;
    case 'reference':
      validateReferences(args);
      break;
    case 'all':
    default:
      validateReferences(args);
      validateFormat(args);
      validateRequiredFields(args);
  }

  return true;
}

function validateRequiredFields(args: ICompositionRelatesTo) {
  const fieldsToValidate = ['code'] as const;
  validateRequiredFieldHelper(fieldsToValidate, args, ENTITY_NAME);
}
