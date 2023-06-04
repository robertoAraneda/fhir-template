import { CodeableConcept } from '../../datatypes/CodeableConcept';
import { Period } from './Period';
import { Reference } from '../base/Reference';
import { Organization } from '../resources/Organization';
import { Address } from './Address';
import { ContactPoint } from './ContactPoint';
import { HumanName } from './HumanName';
import { Element } from '../base/Element';

export interface ExtendedContactDetail extends Element {
  purpose?: CodeableConcept;
  name?: HumanName[];
  telecom?: ContactPoint[];
  address?: Address;
  organization?: Reference;
  period?: Period;
}
