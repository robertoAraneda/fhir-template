import DomainResource from '../base/DomainResource';
import IComposition from '../../interfaces/resources/IComposition';
import {
  ICompositionAttester,
  ICompositionEvent,
  ICompositionRelatesTo,
  ICompositionSection,
} from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { CompositionStatusEnum } from '../../enums';
import { CompositionStatusType } from '../../types';
import { IElement } from '../../interfaces/base';
import CompositionAttester from '../backbones/CompositionAttester';
import CompositionEvent from '../backbones/CompositionEvent';
import CompositionRelatesTo from '../backbones/CompositionRelatesTo';
import CompositionSection from '../backbones/CompositionSection';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { _validateBaseResource } from '../../validators/BaseValidator';
import ResourceException from '../../../globals/exceptions/ResourceException';
import CompositionConfidentialityEnum from '../../enums/CompositionConfidentialityEnum';
import CompositionConfidentialityType from '../../types/CompositionConfidentialityType';
import CompositionBuilder from './CompositionBuilder';
import { validateRequiredFieldHelper } from '../../../globals/helpers/validateRequiredFieldHelper';

export default class Composition extends DomainResource implements IComposition {
  attester: ICompositionAttester[];
  author: IReference[];
  category: ICodeableConcept[];
  confidentiality: CompositionConfidentialityEnum | CompositionConfidentialityType;
  custodian: IReference;
  date?: string;
  encounter: IReference;
  event: ICompositionEvent[];
  identifier: IIdentifier;
  relatesTo: ICompositionRelatesTo[];
  section: ICompositionSection[];
  status?: CompositionStatusEnum | CompositionStatusType;
  subject: IReference;
  title?: string;
  type: ICodeableConcept;
  _status: IElement;
  _title: IElement;
  _date: IElement;
  resourceType: 'Composition' = 'Composition';

  static getResourceType(): 'Composition' {
    return ENTITY_NAME;
  }

  static getAttributes(): string[] {
    return [
      'id',
      'meta',
      'implicitRules',
      'language',
      'text',
      'contained',
      'extension',
      'modifierExtension',
      'attester',
      'author',
      'category',
      'confidentiality',
      'custodian',
      'date',
      'encounter',
      'event',
      'identifier',
      'relatesTo',
      'section',
      'status',
      'subject',
      'title',
      'type',
    ];
  }

  static fromJson(json: IComposition): Composition {
    return new Composition(json);
  }

  static builder(): CompositionBuilder {
    return new CompositionBuilder();
  }

  toJson(): Composition {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `${ENTITY_NAME}${JSON.stringify(this.toJson())}`;
  }

  static validate(args: IComposition, validator?: 'format' | 'all' | 'reference' | 'constraint'): boolean {
    return validate(args, validator);
  }

  constructor(args?: IComposition) {
    super();

    if (args) {
      args.resourceType = ENTITY_NAME;
      validate(args, 'all');
    }
    Object.assign(this, args);
  }
}

const ENTITY_NAME = 'Composition';

const validateRequiredFields = (args: IComposition) => {
  const fieldsToValidate = ['status', 'title', 'date'] as const;
  validateRequiredFieldHelper(fieldsToValidate, args, ENTITY_NAME);
};

const validateFormatFields = (args: IComposition) => {
  const { isValid, errors } = _validateBaseResource(args, 'Composition');

  if (!isValid) {
    throw new ResourceException(ENTITY_NAME, errors);
  }
};

const validateConstraints = (args: IComposition) => {
  if (args.section?.length) {
    args.section.forEach((section) => {
      if (!section.text && !section.entry?.length && !section.section?.length) {
        throw new ResourceException(ENTITY_NAME, [
          {
            constraint: {
              id: 'comp-1',
              level: 'Rule',
              description: 'A section must contain at least one of text, entries, or sub-sections.',
              location: 'Composition.section',
            },
          },
        ]);
      }
    });
  }

  // cmp-2: A section can only have an emptyReason if it is empty
  if (args.section?.length) {
    args.section.forEach((section) => {
      if (section.emptyReason && section.entry?.length) {
        throw new ResourceException(ENTITY_NAME, [
          {
            constraint: {
              id: 'comp-2',
              level: 'Rule',
              description: 'A section can only have an emptyReason if it is empty.',
              location: 'Composition.section',
            },
          },
        ]);
      }
    });
  }
};

const validateReferences = (args: IComposition) => {
  args.attester?.forEach((attester) => CompositionAttester.validate(attester, 'reference'));
  args.event?.forEach((event) => CompositionEvent.validate(event, 'reference'));
  args.relatesTo?.forEach((relatesTo) => CompositionRelatesTo.validate(relatesTo, 'reference'));
  args.section?.forEach((section) => CompositionSection.validate(section, 'reference'));
  args.author?.forEach((author, index) => {
    if (author.reference) validateReferenceHelper(author.reference, 'all', `Composition.author[${index}].reference`);
  });

  if (args.custodian?.reference)
    validateReferenceHelper(args.custodian?.reference, ['Organization'], 'Composition.custodian.reference');
  if (args.encounter?.reference)
    validateReferenceHelper(args.encounter?.reference, ['Encounter'], 'Composition.encounter.reference');
  if (args.subject?.reference) validateReferenceHelper(args.subject?.reference, 'all');
};

const validate = (args: IComposition, validator?: 'format' | 'all' | 'reference' | 'constraint') => {
  switch (validator) {
    case 'format':
      validateFormatFields(args);
      break;
    case 'reference':
      validateReferences(args);
      break;
    case 'constraint':
      validateConstraints(args);
      break;
    case 'all':
    default:
      validateReferences(args);
      validateFormatFields(args);
      validateConstraints(args);
      validateRequiredFields(args);
  }

  return true;
};
