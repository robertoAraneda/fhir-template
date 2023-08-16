import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const relatedPersonCommunicationKeysDefinitions = BackboneAttributesHelperR5<IRelatedPersonCommunication>([
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

  ValidatorHelperR5(payload, relatedPersonCommunicationKeysDefinitions, path);
}
