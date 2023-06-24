import BackboneElement from '../base/BackboneElement';
import { ICompositionSection } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, INarrative, IReference } from '../../interfaces/datatypes';
import { CompositionSectionListModeEnum } from '../../enums';
import { CompositionSectionListModeType } from '../../types';
import CompositionSectionBuilder from './CompositionSectionBuilder';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { _validateBackbone } from '../../validators/BaseValidator';
import BackboneException from '../../../globals/exceptions/BackboneException';
import { validateRequiredFieldHelper } from '../../../globals/helpers/validateRequiredFieldHelper';

export default class CompositionSection extends BackboneElement implements ICompositionSection {
  _title?: IElement;
  _mode?: IElement;
  author?: IReference[];
  code?: ICodeableConcept;
  emptyReason?: ICodeableConcept;
  entry?: IReference[];
  focus?: IReference;
  mode?: CompositionSectionListModeEnum | CompositionSectionListModeType;
  orderedBy?: ICodeableConcept;
  section?: ICompositionSection[];
  text?: INarrative;
  title?: string;

  toJson(): CompositionSection {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson())}`;
  }

  static getListMode(): CompositionSectionListModeEnum[] {
    return Object.values(CompositionSectionListModeEnum);
  }

  static getAttributes(): string[] {
    return [
      'id',
      'extension',
      'modifierExtension',
      '_title',
      '_mode',
      'author',
      'code',
      'emptyReason',
      'entry',
      'focus',
      'mode',
      'orderedBy',
      'section',
      'text',
      'title',
    ];
  }

  static builder(): CompositionSectionBuilder {
    return new CompositionSectionBuilder();
  }

  static validate(args: ICompositionSection, validator?: 'format' | 'all' | 'reference'): boolean {
    return validate(args, validator);
  }

  constructor(args?: ICompositionSection) {
    super();
    if (args) validate(args, 'all');
    Object.assign(this, args);
  }
}

const ENTITY_NAME = 'Composition_Section';
let NESTED_VALUE = 0;

function validateFormat(args: ICompositionSection) {
  const { isValid, errors } = _validateBackbone(args, 'Composition_Section');

  if (!isValid) {
    throw new BackboneException(ENTITY_NAME, errors);
  }
}

function parseNestedSection(deep: number) {
  let BASE = 'section.';
  if (deep > 0) {
    for (let i = 1; i < deep; i++) {
      BASE += 'section.';
    }
    return BASE;
  }
  return '';
}

function validateReferences(args: ICompositionSection) {
  if (args.author?.length) {
    args.author.forEach((author, index) => {
      if (author?.reference)
        validateReferenceHelper(
          author?.reference,
          ['Practitioner', 'PractitionerRole', 'Device', 'Patient', 'RelatedPerson', 'Organization'],
          `${ENTITY_NAME}.${parseNestedSection(NESTED_VALUE)}author[${index}].reference`,
        );
    });
  }
  if (args.entry?.length) {
    args.entry.forEach((entry, index) => {
      if (entry.reference)
        validateReferenceHelper(
          entry.reference,
          'all',
          `${ENTITY_NAME}.${parseNestedSection(NESTED_VALUE)}entry[${index}].reference`,
        );
    });
  }

  if (args.focus?.reference)
    validateReferenceHelper(
      args.focus?.reference,
      'all',
      `${ENTITY_NAME}.${parseNestedSection(NESTED_VALUE)}focus.reference`,
    );

  if (args.section?.length) {
    args.section.forEach((section) => {
      NESTED_VALUE++;
      validateReferences(section);
    });
  }
}

function validate(args: ICompositionSection, validator?: 'format' | 'all' | 'reference'): boolean {
  NESTED_VALUE = 0;
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

function validateRequiredFields(args: ICompositionSection) {
  const fieldsToValidate = ['mode', 'title'] as const;
  validateRequiredFieldHelper(fieldsToValidate, args, ENTITY_NAME);
}
