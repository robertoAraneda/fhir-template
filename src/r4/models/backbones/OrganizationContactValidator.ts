import { IOrganizationContact } from '../../interfaces/backbones';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const organizationContactKeysDefinitions = BackboneAttributesHelperR4<IOrganizationContact>([
  {
    name: 'purpose',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'HumanName',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'address',
    type: 'Address',
    isArray: false,
    isRequired: false,
  },
]);

export const organizationContactFields = organizationContactKeysDefinitions.map((item) => item.name);

export function OrganizationContactValidator(
  payload: IOrganizationContact | IOrganizationContact[],
  path: string = 'OrganizationContact',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((organizationContact, index) => {
      OrganizationContactValidator(organizationContact, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, organizationContactKeysDefinitions, path);
}
