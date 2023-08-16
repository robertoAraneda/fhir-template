import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ILocation } from '../../interfaces/resources';
import { LocationModeEnum } from '../../../enums';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const locationKeysDefinitions = ResourceAttributesHelperR4<ILocation>([
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
    name: 'telecom',
    type: 'ContactPoint',
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
    name: 'physicalType',
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
    name: 'hoursOfOperation',
    type: 'LocationHoursOfOperation',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'availabilityExceptions',
    type: 'string',
    isRequired: false,
    isArray: false,
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
  {
    name: '_availabilityExceptions',
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

export function LocationValidator(payload: ILocation, path: string = 'Location') {
  ValidatorHelperR4(payload, locationKeysDefinitions, path);
}
