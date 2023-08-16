import { IPatientLink } from '../../interfaces/backbones';
import { LinkTypeEnum } from '../../../enums';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ReferenceValidator } from '../datatypes/ReferenceValidator';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const patientLinkKeysDefinitions = BackboneAttributesHelperR4<IPatientLink>([
  {
    name: 'other',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceValues: ['Patient', 'RelatedPerson'],
  },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: Object.values(LinkTypeEnum),
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const patientLinkFields = patientLinkKeysDefinitions.map((key) => key.name);

export function PatientLinkValidator(payload: IPatientLink | IPatientLink[], path: string = 'PatientLink'): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      PatientLinkValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, patientLinkKeysDefinitions, path);
}
