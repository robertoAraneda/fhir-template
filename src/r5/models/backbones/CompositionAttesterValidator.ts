import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import ICompositionAttester from '../../interfaces/backbones/ICompositionAttester';

export const compositionAttesterKeysDefinitions = BackboneAttributesHelperR5<ICompositionAttester>([
  {
    name: 'mode',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'time',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'party',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Patient', 'RelatedPerson', 'Practitioner', 'PractitionerRole', 'Organization'],
  },
  {
    name: '_time',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const compositionAttesterFields = compositionAttesterKeysDefinitions.map((e) => e.name);

export function CompositionAttesterValidator(
  payload: ICompositionAttester | ICompositionAttester[],
  path: string = 'CompositionAttester',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      CompositionAttesterValidator(p, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(payload, compositionAttesterKeysDefinitions, path);
}
