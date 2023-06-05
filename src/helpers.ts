import { Endpoint, Organization, Patient, Person, Practitioner, PractitionerRole, RelatedPerson } from './r5/resources';

const generatePayloadType = async <T>(resourceType: string, payload: T) => {
  const entity = await import(`./r5/resources/${resourceType}`);
  return new entity[`${resourceType}`](payload) as T;
};

export const createResourceType = <T>(type: string, payload: T) => {
  return generatePayloadType<T>(type, payload);
};

const generateBuilder = async <T>(resourceType: string, type: string) => {
  const entity = await import(`./r5/builders/${type}/${resourceType}Builder`);
  return new entity[`${resourceType}Builder`]() as T;
};

export const createResourceBuilderType = <T>(resourceType: string) => {
  return generateBuilder<T>(resourceType, 'resources');
};

export const createDatatypeBuilderType = <T>(resourceType: string) => {
  return generateBuilder<T>(resourceType, 'datatypes');
};

export const createBackboneElementBuilderType = <T>(resourceType: string) => {
  return generateBuilder<T>(resourceType, 'backbones');
};

export const createInstance = (resourceType: any, payload: any) => {
  const resource = resourceType as string;
  if (resource === 'Patient') return new Patient(payload);
  if (resource === 'Endpoint') return new Endpoint(payload);
  if (resource === 'Person') return new Person(payload);
  if (resource === 'Practitioner') return new Practitioner(payload);
  if (resource === 'RelatedPerson') return new RelatedPerson(payload);
  if (resource === 'Organization') return new Organization(payload);
  if (resource === 'PractitionerRole') return new PractitionerRole(payload);
};
