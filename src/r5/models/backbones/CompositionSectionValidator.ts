import ICompositionSection from '../../interfaces/backbones/ICompositionSection';
import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const compositionSectionKeysDefinitions = BackboneAttributesHelperR5<ICompositionSection>([
  {
    name: 'title',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'code',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'author',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceValues: ['Practitioner', 'PractitionerRole', 'Device', 'Patient', 'RelatedPerson', 'Organization'],
  },
  {
    name: 'focus',
    type: 'Reference',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'text',
    type: 'Narrative',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'orderedBy',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'entry',
    type: 'Reference',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'emptyReason',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'section',
    type: 'CompositionSection',
    isArray: true,
    isRequired: false,
  },
]);

export function CompositionSectionValidator(
  payload: ICompositionSection | ICompositionSection[],
  path: string = 'CompositionSection',
) {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      CompositionSectionValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, compositionSectionKeysDefinitions, path);
}
