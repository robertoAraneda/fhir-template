import * as ResourceBuilders from './builders/resources';
import { Bundle } from './models/resources';

const Patient = () => new ResourceBuilders.PatientBuilder();
const Organization = () => new ResourceBuilders.OrganizationBuilder();
const Endpoint = () => new ResourceBuilders.EndpointBuilder();
const Person = () => new ResourceBuilders.PersonBuilder();
const Practitioner = () => new ResourceBuilders.PractitionerBuilder();
const PractitionerRole = () => new ResourceBuilders.PractitionerRoleBuilder();
const RelatedPerson = () => new ResourceBuilders.RelatedPersonBuilder();
const Group = () => new ResourceBuilders.GroupBuilder();
const Location = () => new ResourceBuilders.LocationBuilder();
const BundleBuilder = () => Bundle.build();

export default {
  Group,
  Patient,
  Organization,
  Endpoint,
  Person,
  Practitioner,
  PractitionerRole,
  RelatedPerson,
  Location,
  Bundle: BundleBuilder,
};
