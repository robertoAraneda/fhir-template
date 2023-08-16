import { IPatientLink } from '../../interfaces/backbones';
import { LinkTypeEnum } from '../../../enums';
import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const patientLinkKeysDefinitions = BackboneAttributesHelperR5<IPatientLink>([
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

  ValidatorHelperR5(payload, patientLinkKeysDefinitions, path);
}
