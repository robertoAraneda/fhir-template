import { IOrganizationContact } from '../../interfaces/backbones';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import { IOrganizationContactBuilder, OrganizationContactBuilder } from './OrganizationContactBuilder';

export default class OrganizationContact extends BackboneElement implements IOrganizationContact {
  // OrganizationContact attributes
  address: IAddress;
  name: IHumanName;
  purpose: ICodeableConcept;
  telecom: IContactPoint[];

  static builder(): IOrganizationContactBuilder {
    return new OrganizationContactBuilder();
  }

  constructor(args?: IOrganizationContact) {
    super();
    Object.assign(this, args);
  }
}
