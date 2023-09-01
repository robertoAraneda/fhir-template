import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import IComposition from '../../interfaces/resources/IComposition';
import ResourceException from '../../../globals/exceptions/ResourceException';
import Composition from './Composition';
import { CompositionStatusEnum } from '../../enums';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const isComposition = (obj: unknown): obj is Composition => {
  return obj !== undefined && obj !== null && (obj as Composition).resourceType === 'Composition';
};

export const compositionKeysDefinitions = ResourceAttributesHelperR4<IComposition>([
  {
    name: 'identifier',
    type: 'Identifier',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'status',
    type: 'code',
    isRequired: true,
    isArray: false,
    enumValues: Object.values(CompositionStatusEnum),
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'category',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'subject',
    type: 'Reference',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'encounter',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Encounter'],
  },
  {
    name: 'date',
    type: 'dateTime',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'author',
    type: 'Reference',
    isRequired: true,
    isArray: true,
    referenceValues: ['Device', 'Practitioner', 'PractitionerRole', 'Organization', 'Patient', 'RelatedPerson'],
  },
  {
    name: 'title',
    type: 'string',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'confidentiality',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'attester',
    type: 'CompositionAttester',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'custodian',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'relatesTo',
    type: 'CompositionRelatesTo',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'event',
    type: 'CompositionEvent',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'section',
    type: 'CompositionSection',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_status',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_title',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_date',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);
export const compositionAttributes = compositionKeysDefinitions.map((key) => key.name);

const ValidateConstraint = (args: IComposition, path: string) => {
  // TODO: move to section validator
  if (args.section?.length) {
    args.section.forEach((section) => {
      // cmp-1: A section must contain at least one of text, entries, or sub-sections.
      if (!section.text && !section.entry?.length && !section.section?.length) {
        throw new ResourceException('Composition', [
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

      // cmp-2: A section can only have an emptyReason if it is empty
      if (section.emptyReason && section.entry?.length) {
        throw new ResourceException('Composition', [
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

export function CompositionValidator(payload: IComposition, path: string = 'Composition') {
  ValidatorHelperR4(payload, compositionKeysDefinitions, path);

  ValidateConstraint(payload, path);
}
