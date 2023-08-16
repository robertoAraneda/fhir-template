import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitionerCommunication } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const practitionerCommunicationKeysDefinitions = BackboneAttributesHelperR5<IPractitionerCommunication>([
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
    isRequired: false,
    isArray: false,
  },
]);
export const PractitionerCommunicationValidator = (
  args: IPractitionerCommunication | IPractitionerCommunication[],
  path: string = 'PractitionerCommunication',
) => {
  if (Array.isArray(args)) {
    args.forEach((practitionerCommunication, index) => {
      PractitionerCommunicationValidator(practitionerCommunication, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(args, practitionerCommunicationKeysDefinitions, path);
};
