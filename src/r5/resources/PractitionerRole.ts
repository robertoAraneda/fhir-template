import { DomainResource } from '../datatypes/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { Period } from '../datatypes/Period';
import { Practitioner } from './Practitioner';
import { Reference } from '../datatypes/Reference';
import { Organization } from './Organization';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ExtendedContactDetail } from '../datatypes/ExtendedContactDetail';
import { Availability } from '../datatypes/Availability';
import { Endpoint } from '../datatypes/Endpoint';

type PractitionerReference = Practitioner | string;
type OrganizationReference = Organization | string;
type LocationReference = Organization | string;
type HealthcareServiceReference = Organization | string;
type EndpointReference = Endpoint | string;
/**
 * @description Roles/organizations the practitioner is associated with
 * @see {@link http://hl7.org/fhir/practitionerrole.html PractitionerRole}
 */
export class PractitionerRole extends DomainResource {
  resourceType = 'PractitionerRole';
  identifier?: Identifier[];
  active?: boolean;
  period?: Period;
  practitioner?: Reference<PractitionerReference>;
  organization?: Reference<OrganizationReference>;
  code?: CodeableConcept[];
  specialty?: CodeableConcept[];
  location?: Reference<LocationReference>[];
  healthcareService?: Reference<HealthcareServiceReference>[];
  contact?: ExtendedContactDetail[];
  characteristic?: CodeableConcept[];
  communication?: CodeableConcept[];
  availability?: Availability[];
  endpoint?: Reference<EndpointReference>[];

  constructor(args?: Partial<PractitionerRole>) {
    super();
    Object.assign(this, args);
  }
}
