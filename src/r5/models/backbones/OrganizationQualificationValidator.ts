import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IOrganizationQualification } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const organizationQualificationKeysDefinitions = BackboneAttributesHelperR5<IOrganizationQualification>([
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
export const OrganizationQualificationValidator = (
  args: IOrganizationQualification | IOrganizationQualification[],
  path: string = 'OrganizationQualification',
) => {
  if (Array.isArray(args)) {
    args.forEach((arg, index) => {
      OrganizationQualificationValidator(arg, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(args, organizationQualificationKeysDefinitions, path);
};
