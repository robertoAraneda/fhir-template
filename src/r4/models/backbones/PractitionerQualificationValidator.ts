import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitionerQualification } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const practitionerQualificationKeysDefinitions = BackboneAttributesHelperR4<IPractitionerQualification>([
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

  ValidatorHelperR4(payload, practitionerQualificationKeysDefinitions, path);
}
