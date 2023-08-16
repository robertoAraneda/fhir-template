import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPatientCommunication } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const patientCommunicationKeysDefinitions = BackboneAttributesHelperR5<IPatientCommunication>([
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

export const patientCommunicationFields = patientCommunicationKeysDefinitions.map((item) => item.name);

export function PatientCommunicationValidator(
  payload: IPatientCommunication | IPatientCommunication[],
  path: string = 'PatientCommunication',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      PatientCommunicationValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, patientCommunicationKeysDefinitions, path);
}
