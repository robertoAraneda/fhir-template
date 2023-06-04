import { PatientBuilder } from './builders/resources/PatientBuilder';
import { OrganizationBuilder } from './builders/resources/OrganizationBuilder';
import { EndpointBuilder } from './builders/resources/EndpointBuilder';
import { PersonBuilder } from './builders/resources/PersonBuilder';
import { PractitionerBuilder } from './builders/resources/PractitionerBuilder';
import { PractitionerRoleBuilder } from './builders/resources/PractitionerRoleBuilder';
import { RelatedPersonBuilder } from './builders/resources/RelatedPersonBuilder';

const ResourceBuilder = {
  Patient: () => new PatientBuilder(),
  Organization: () => new OrganizationBuilder(),
  Endpoint: () => new EndpointBuilder(),
  Person: () => new PersonBuilder(),
  Practitioner: () => new PractitionerBuilder(),
  PractitionerRole: () => new PractitionerRoleBuilder(),
  RelatedPerson: () => new RelatedPersonBuilder(),
};

export default ResourceBuilder;
