import { Element } from './Element';
import { CodeableConcept } from './CodeableConcept';
import { HumanName } from './HumanName';
import { ContactPoint } from './ContactPoint';
import { Address } from './Address';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';
import { Period } from './Period';

export class ExtendedContactDetail extends Element {
  purpose?: CodeableConcept;
  name?: HumanName[];
  telecom?: ContactPoint[];
  address?: Address;
  organization?: Reference<Organization | string>;
  period?: Period;

  constructor(args?: Partial<ExtendedContactDetail>) {
    super();
    Object.assign(this, args);

    const validKeys = ['purpose', 'name', 'telecom', 'address', 'organization', 'period'];

    if (args) {
      Object.keys(args).forEach((key) => {
        if (!validKeys.includes(key)) {
          throw new Error(`Invalid key '${key}' passed to ExtendedContactDetail.`);
        }
      });
    }
  }
}
