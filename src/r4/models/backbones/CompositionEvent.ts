import BackboneElement from '../base/BackboneElement';
import { ICompositionEvent } from '../../interfaces/backbones';
import { ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
import CompositionEventBuilder from './CompositionEventBuilder';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { _validateBackbone } from '../../validators/BaseValidator';
import BackboneException from '../../../globals/exceptions/BackboneException';

const ENTITY_NAME = 'Composition_Event';
export default class CompositionEvent extends BackboneElement implements ICompositionEvent {
  code?: ICodeableConcept[];
  detail?: IReference[];
  period?: IPeriod;

  toJson(): CompositionEvent {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson())}`;
  }

  static getAttributes(): string[] {
    return ['code', 'detail', 'period', 'id', 'extension', 'modifierExtension'];
  }

  static builder(): CompositionEventBuilder {
    return new CompositionEventBuilder();
  }

  static validate(args: ICompositionEvent, validator?: 'format' | 'all' | 'reference'): boolean {
    return validate(args, validator);
  }

  constructor(args?: ICompositionEvent) {
    super();
    if (args) CompositionEvent.validate(args);
    Object.assign(this, args);
  }
}

function validateFormatFields(args: ICompositionEvent) {
  const { isValid, errors } = _validateBackbone(args, ENTITY_NAME);

  if (!isValid) {
    throw new BackboneException(ENTITY_NAME, errors);
  }
}

function validateReferences(args: ICompositionEvent) {
  if (args.detail?.length) {
    args.detail.forEach((detail) => {
      // validate that the detail reference is one of the allowed types
      if (detail.reference) validateReferenceHelper(detail.reference, 'all', `${ENTITY_NAME}.detail.reference`);
    });
  }
}

function validate(args: ICompositionEvent, validator?: 'format' | 'all' | 'reference'): boolean {
  switch (validator) {
    case 'format':
      validateFormatFields(args);
      break;
    case 'reference':
      validateReferences(args);
      break;
    case 'all':
    default:
      validateReferences(args);
      validateFormatFields(args);
  }

  return true;
}
