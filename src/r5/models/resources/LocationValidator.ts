import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ILocation } from '../../interfaces/resources';
import { LocationModeEnum } from '../../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const locationKeysDefinitions = ResourceAttributesHelperR5<ILocation>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'status',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'operationalStatus',
    type: 'Coding',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'name',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'alias',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'description',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'mode',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: Object.values(LocationModeEnum),
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'contact',
    type: 'ExtendedContactDetail',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'address',
    type: 'Address',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'form',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'position',
    type: 'LocationPosition',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'partOf',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Location'],
  },
  {
    name: 'characteristic',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'hoursOfOperation',
    type: 'Availability',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'virtualService',
    type: 'VirtualServiceDetail',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'endpoint',
    type: 'Reference',
    isRequired: false,
    isArray: true,
    referenceValues: ['Endpoint'],
  },
  {
    name: '_status',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_name',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_alias',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_description',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_mode',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);
export const locationKeys = locationKeysDefinitions.map((k) => k.name);
export const locationMappings = locationKeysDefinitions.reduce(
  (acc, cur) => ({ ...acc, [cur.name]: cur.type }),
  {},
) as { [key: string]: string };
export const locationMappingsRequired = locationKeysDefinitions
  .filter((k) => k.isRequired)
  .reduce((acc, cur) => ({ ...acc, [cur.name]: cur.type }), {}) as {
  [key: string]: string;
};
export const locationTypes: { [key: string]: string } = locationKeysDefinitions.reduce(
  (acc, cur) => ({ ...acc, [cur.name]: cur.type }),
  {},
) as { [key: string]: string };

export const LocationValidator = (payload: ILocation, path: string = 'Location'): void => {
  ValidatorHelperR5(payload, locationKeysDefinitions, path);
};
