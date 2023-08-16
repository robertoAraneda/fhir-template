import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ICompositionAttester } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const compositionAttesterKeysDefinitions = BackboneAttributesHelperR4<ICompositionAttester>([
  {
    name: 'mode',
    type: 'code',
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
  {
    name: '_mode',
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
    payload.forEach((p) => {
      CompositionAttesterValidator(p);
    });

    return;
  }

  ValidatorHelperR4(payload, compositionAttesterKeysDefinitions, path);
}
