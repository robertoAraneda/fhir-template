import { ICodeableReference } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';

export const codeableReferenceKeysDefinitions = DataTypeAttributesHelperR5<ICodeableReference>([
  {
    name: 'concept',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'reference',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: 'all',
  },
]);

export function CodeableReferenceValidator(
  payload: ICodeableReference | ICodeableReference[],
  path: string = 'CodeableReference',
) {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      CodeableReferenceValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, codeableReferenceKeysDefinitions, path);
}
