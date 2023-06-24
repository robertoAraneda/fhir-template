import BackboneElement from '../base/BackboneElement';
import { ICompositionAttester } from '../../interfaces/backbones';
import { CompositionAttestationModeEnum } from '../../enums';
import { CompositionAttestationModeType } from '../../types';
import { IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import CompositionAttesterBuilder from './CompositionAttesterBuilder';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { _validateBackbone } from '../../validators/BaseValidator';
import BackboneException from '../../../globals/exceptions/BackboneException';
import { validateRequiredFieldHelper } from '../../../globals/helpers/validateRequiredFieldHelper';

type CompositionAttesterMode = CompositionAttestationModeEnum | CompositionAttestationModeType;

const ENTITY_NAME = 'Composition_Attester';
export default class CompositionAttester extends BackboneElement implements ICompositionAttester {
  mode: CompositionAttesterMode;
  party?: IReference;
  time?: string;
  _time?: IElement;
  _mode?: IElement;

  toJson(): CompositionAttester {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson())}`;
  }

  static getAttributes(): string[] {
    return ['mode', 'party', 'time', '_time', '_mode'];
  }

  static getModeCodes(): string[] {
    return Object.values(CompositionAttestationModeEnum);
  }

  static builder(): CompositionAttesterBuilder {
    return new CompositionAttesterBuilder();
  }

  static validate(args: ICompositionAttester, validator?: 'format' | 'all' | 'reference'): boolean {
    return validate(args, validator);
  }

  constructor(args?: ICompositionAttester) {
    super();
    if (args) validate(args, 'all');
    Object.assign(this, args);
  }
}

function validateFormat(args: ICompositionAttester) {
  const { isValid, errors } = _validateBackbone(args, ENTITY_NAME);

  if (!isValid) {
    throw new BackboneException(ENTITY_NAME, errors);
  }
}

function validateReferences(args: ICompositionAttester) {
  // validate that the party reference is one of the allowed types
  if (args.party?.reference)
    validateReferenceHelper(
      args.party?.reference,
      ['Practitioner', 'Organization', 'Patient', 'RelatedPerson', 'Device'],
      `${ENTITY_NAME}.party.reference`,
    );
}

function validate(args: ICompositionAttester, validator?: 'format' | 'all' | 'reference'): boolean {
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

function validateRequiredFields(args: ICompositionAttester) {
  const fieldsToValidate = ['mode'] as const;
  validateRequiredFieldHelper(fieldsToValidate, args, ENTITY_NAME);
}
