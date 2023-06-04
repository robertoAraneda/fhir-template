import { Period } from './Period';
import { Reference } from '../base/Reference';
import { Address } from './Address';
import { ContactPoint } from './ContactPoint';
import { HumanName } from './HumanName';
import { Element } from '../base/Element';
import { CodeableConcept } from './CodeableConcept';

export interface ExtendedContactDetail extends Element {
  purpose?: CodeableConcept;
  name?: HumanName[];
  telecom?: ContactPoint[];
  address?: Address;
  organization?: Reference;
  period?: Period;
}
