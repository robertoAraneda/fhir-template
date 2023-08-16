import { IPersonLink } from '../../interfaces/backbones';
import { IdentityAssuranceLevelEnum } from '../../../enums';
import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const personLinkKeysDefinitions = BackboneAttributesHelperR5<IPersonLink>([
  {
    name: 'target',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceValues: ['Patient', 'Practitioner', 'RelatedPerson', 'Person'],
  },
  {
    name: 'assurance',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: Object.values(IdentityAssuranceLevelEnum),
  },
  {
    name: '_assurance',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const personLinkFields = personLinkKeysDefinitions.map((key) => key.name);

export function PersonLinkValidator(personLink: IPersonLink | IPersonLink[], path: string = 'PersonLink') {
  if (Array.isArray(personLink)) {
    personLink.forEach((personLink, index) => {
      PersonLinkValidator(personLink, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(personLink, personLinkKeysDefinitions, path);
}
