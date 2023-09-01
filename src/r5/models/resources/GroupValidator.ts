import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IGroup } from '../../interfaces/resources';
import { GroupTypeEnum } from '../../../r4/enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import { GroupMembershipBasisEnum } from '../../enums';

export const groupKeysDefinitions = ResourceAttributesHelperR5<IGroup>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'active',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: Object.values(GroupTypeEnum),
  },
  {
    name: 'membership',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: Object.values(GroupMembershipBasisEnum),
  },

  {
    name: 'code',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'description',
    type: 'markdown',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'quantity',
    type: 'unsignedInt',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'managingEntity',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization', 'Practitioner', 'PractitionerRole', 'RelatedPerson'],
  },
  {
    name: 'characteristic',
    type: 'GroupCharacteristic',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'member',
    type: 'GroupMember',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_active',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_membership',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_description',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_name',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_quantity',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const groupFields = groupKeysDefinitions.map((k) => k.name);

export function GroupValidator(payload: IGroup, path: string = 'Group') {
  ValidatorHelperR5(payload, groupKeysDefinitions, path);
}
