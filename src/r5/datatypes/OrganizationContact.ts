import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { HumanName } from './HumanName';
import { ContactPoint } from './ContactPoint';
import { Address } from './Address';
import { Reference } from './Reference';
import { Endpoint } from './Endpoint';

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
