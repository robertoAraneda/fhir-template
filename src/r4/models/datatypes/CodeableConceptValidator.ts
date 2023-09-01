import { ICodeableConcept } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const codeableConceptKeyDefinitions = DataTypeAttributesHelperR4<ICodeableConcept>([
  {
    name: 'coding',
    type: 'Coding',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'text',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_text',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const codeableConceptFields: ReadonlyArray<string> = codeableConceptKeyDefinitions.map((item) => item.name);

export function CodeableConceptValidator(
  payload: ICodeableConcept | ICodeableConcept[],
  path: string = 'CodeableConcept',
) {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      CodeableConceptValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, codeableConceptKeyDefinitions, path);
}
