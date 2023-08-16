import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitionerQualification } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const practitionerQualificationKeysDefinitions = BackboneAttributesHelperR5<IPractitionerQualification>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'code',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'issuer',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
]);

export const practitionerQualificationFields = practitionerQualificationKeysDefinitions.map((item) => item.name);

export function PractitionerQualificationValidator(
  payload: IPractitionerQualification | IPractitionerQualification[],
  path: string = 'PractitionerQualification',
) {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      PractitionerQualificationValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, practitionerQualificationKeysDefinitions, path);
}
