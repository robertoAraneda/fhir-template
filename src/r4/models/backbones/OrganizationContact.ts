import { IOrganizationContact } from '../../interfaces/backbones';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import { OrganizationContactBuilder } from './OrganizationContactBuilder';
import { OrganizationContactValidator } from './OrganizationContactValidator';

export default class OrganizationContact extends BackboneElement implements IOrganizationContact {
  // OrganizationContact attributes
  address: IAddress;
  name: IHumanName;
  purpose: ICodeableConcept;
  telecom: IContactPoint[];

  toJson(): OrganizationContact {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `OrganizationContact${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `OrganizationContact${JSON.stringify(this.toJson())}`;
  }

  static builder(): OrganizationContactBuilder {
    return new OrganizationContactBuilder();
  }

  constructor(args: IOrganizationContact) {
    super();
    OrganizationContactValidator(args);
    Object.assign(this, args);
  }
}
