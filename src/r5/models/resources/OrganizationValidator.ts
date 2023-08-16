import { IOrganization } from '../../interfaces/resources';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';
import ResourceException from '../../../globals/exceptions/ResourceException';
import {
  ResourceAttributesHelperR4,
  ResourceAttributesHelperR5,
} from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const organizationKeysDefinitions = ResourceAttributesHelperR5<IOrganization>([
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
    name: 'description',
    type: 'markdown',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'contact',
    type: 'ExtendedContactDetail',
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
    name: 'endpoint',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceValues: ['Endpoint'],
  },
  {
    name: 'qualification',
    type: 'OrganizationQualification',
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
  {
    name: '_description',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const organizationKeys = organizationKeysDefinitions.map((key) => key.name);

export function OrganizationValidator(payload: IOrganization, path: string = 'Organization'): void {
  ValidatorHelperR5(payload, organizationKeysDefinitions, path);
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
  if (payload.contact && payload.contact.length > 0) {
    payload.contact.forEach((contact) => {
      if (contact.address?.use === 'home') {
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

      if (contact.telecom && contact.telecom.length > 0) {
        contact.telecom.forEach((telecom) => {
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
    });
  }
}
