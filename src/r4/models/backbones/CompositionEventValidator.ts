import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ICompositionEvent } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const compositionEventKeysDefinitions = BackboneAttributesHelperR4<ICompositionEvent>([
  {
    name: 'code',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'detail',
    type: 'Reference',
    isArray: true,
    isRequired: false,
  },
]);

export const compositionEventFields = compositionEventKeysDefinitions.map((e) => e.name);

export function CompositionEventValidator(
  payload: ICompositionEvent | ICompositionEvent[],
  path: string = 'CompositionEvent',
) {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      CompositionEventValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, compositionEventKeysDefinitions, path);
}
