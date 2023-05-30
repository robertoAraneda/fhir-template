import { domainResourceValidArgs } from '../datatypes/DomainResource';
import { resourceValidArgs } from '../datatypes/Resource';
import { RelatedPerson } from '../resources/RelatedPerson';

export const validateRelatedPerson = (args: Partial<RelatedPerson>) => {
  const validArgs = [
    ...domainResourceValidArgs,
    ...resourceValidArgs,
    'resourceType',
    'identifier',
    'active',
    'patient',
    'relationship',
    'name',
    'telecom',
    'gender',
    'birthDate',
    'address',
    'photo',
    'period',
    'communication',
  ];

  for (const key of Object.keys(args)) {
    if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type RelatedPerson`);
  }
};
