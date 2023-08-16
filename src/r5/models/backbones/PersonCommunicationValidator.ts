import { IPersonCommunication } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';

export const personCommunicationKeysDefinitions = BackboneAttributesHelperR5<IPersonCommunication>([
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
export const PersonCommunicationValidator = (
  args: IPersonCommunication | IPersonCommunication[],
  path: string = 'PersonCommunication',
): void => {
  if (Array.isArray(args)) {
    args.forEach((personCommunication, index) => {
      PersonCommunicationValidator(personCommunication, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(args, personCommunicationKeysDefinitions, path);
};
