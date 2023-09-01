import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IGroup } from '../../interfaces/resources';
import { GroupTypeEnum } from '../../enums';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';
import ResourceException from '../../../globals/exceptions/ResourceException';

export const groupKeysDefinitions = ResourceAttributesHelperR4<IGroup>([
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
    name: 'actual',
    type: 'boolean',
    isArray: false,
    isRequired: true,
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
    name: '_actual',
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
  /*
    ValidateExtensionFieldHelper(args, path);
      ValidateInvalidFieldHelper(args, groupFields, path);
     */

  ValidatorHelperR4(payload, groupKeysDefinitions, path);
  ValidateConstraint(payload);
}

function ValidateConstraint(payload: IGroup) {
  // grp-1: Can only have members if group is "actual"
  if (payload.actual && payload.member && payload.member.length > 0) {
    throw new ResourceException('Group', [
      {
        constraint: {
          id: 'grp-1',
          level: 'Rule',
          description: `Can only have members if group is "actual"`,
          location: '(base)',
        },
      },
    ]);
  }
}
