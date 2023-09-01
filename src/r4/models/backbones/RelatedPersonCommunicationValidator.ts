import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';

import { CodeableConceptValidator } from '../datatypes/CodeableConceptValidator';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const relatedPersonCommunicationKeysDefinitions = BackboneAttributesHelperR4<IRelatedPersonCommunication>([
  {
    name: 'language',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'preferred',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_preferred',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const relatedPersonCommunicationFields = relatedPersonCommunicationKeysDefinitions.map((item) => item.name);

export function RelatedPersonCommunicationValidator(
  payload: IRelatedPersonCommunication | IRelatedPersonCommunication[],
  path: string = 'RelatedPersonCommunication',
) {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      RelatedPersonCommunicationValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, relatedPersonCommunicationKeysDefinitions, path);
}
