import { IPersonLink } from '../../interfaces/backbones';
import { IdentityAssuranceLevelEnum } from '../../../enums';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ReferenceValidator } from '../datatypes/ReferenceValidator';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const personLinkKeysDefinitions = BackboneAttributesHelperR4<IPersonLink>([
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

  ValidatorHelperR4(personLink, personLinkKeysDefinitions, path);
}
