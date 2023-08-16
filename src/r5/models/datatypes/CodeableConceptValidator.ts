import { ICodeableConcept } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const codeableConceptKeyDefinitions = DataTypeAttributesHelperR5<ICodeableConcept>([
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

  ValidatorHelperR5(payload, codeableConceptKeyDefinitions, path);
}
