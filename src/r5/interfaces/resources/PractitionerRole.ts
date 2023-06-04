import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { Period } from '../datatypes/Period';
import { Reference } from '../base/Reference';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ExtendedContactDetail } from '../datatypes/ExtendedContactDetail';
import { Availability } from '../datatypes/Availability';
import { Element } from '../base/Element';

export interface PractitionerRole extends DomainResource {
  identifier?: Identifier[];
  active?: boolean;
  period?: Period;
  practitioner?: Reference;
  organization?: Reference;
  code?: CodeableConcept[];
  specialty?: CodeableConcept[];
  location?: Reference[];
  healthcareService?: Reference[];
  contact?: ExtendedContactDetail[];
  characteristic?: CodeableConcept[];
  communication?: CodeableConcept[];
  availability?: Availability[];
  endpoint?: Reference[];
  _active?: Element;
}
