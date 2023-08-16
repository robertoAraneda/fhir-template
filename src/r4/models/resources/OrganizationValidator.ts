import { IOrganization } from '../../interfaces/resources';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';
import ResourceException from '../../../globals/exceptions/ResourceException';
import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';

export const organizationKeysDefinitions = ResourceAttributesHelperR4<IOrganization>([
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
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'alias',
    type: 'string',
    isArray: true,
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
    isArray: true,
    isRequired: false,
  },
  {
    name: 'partOf',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'contact',
    type: 'OrganizationContact',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'endpoint',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceValues: ['Endpoint'],
  },
  {
    name: '_active',
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
    name: '_alias',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
]);
export const organizationKeys = organizationKeysDefinitions.map((key) => key.name);

export function OrganizationValidator(payload: IOrganization, path: string = 'Organization'): void {
  ValidatorHelperR4(payload, organizationKeysDefinitions, path);
  ConstraintValidator(payload, path);
}

function ConstraintValidator(payload: IOrganization, path: string): void {
  // The organization SHALL at least have a name or an identifier, and possibly more than one
  if (!payload.name && (!payload.identifier || payload.identifier.length === 0)) {
    throw new ResourceException('Organization', [
      {
        constraint: {
          id: 'org-1',
          level: 'Rule',
          description: 'The organization SHALL at least have a name or an identifier, and possibly more than one',
          location: '(base)',
        },
      },
    ]);
  }

  // An address of an organization can never be of use 'home'
  if (payload.address && payload.address.length > 0) {
    payload.address.forEach((address) => {
      if (address.use === 'home') {
        throw new ResourceException('Organization', [
          {
            constraint: {
              id: 'org-2',
              level: 'Rule',
              description: "An address of an organization can never be of use 'home'",
              location: 'Organization.address',
            },
          },
        ]);
      }
    });
  }

  // The telecom of an organization can never be of use 'home'
  if (payload.telecom && payload.telecom.length > 0) {
    payload.telecom.forEach((telecom) => {
      if (telecom.use === 'home') {
        throw new ResourceException('Organization', [
          {
            constraint: {
              id: 'org-3',
              level: 'Rule',
              description: "The telecom of an organization can never be of use 'home'",
              location: 'Organization.telecom',
            },
          },
        ]);
      }
    });
  }
}
