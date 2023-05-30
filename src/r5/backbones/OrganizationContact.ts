import { BackboneElement } from '../datatypes/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { Address } from '../datatypes/Address';
import { Reference } from '../datatypes/Reference';
import { Endpoint } from '../datatypes/Endpoint';

export class OrganizationContact extends BackboneElement {
  purpose?: CodeableConcept;
  name?: HumanName;
  telecom?: ContactPoint[];
  address?: Address;
  endpoint?: Reference<Endpoint | string>[];
  constructor(args?: Partial<OrganizationContact>) {
    super();
    Object.assign(this, args);
  }
}
