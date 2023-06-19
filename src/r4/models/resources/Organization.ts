import { IOrganization } from '../../interfaces/resources';
import { IAddress, ICodeableConcept, IContactPoint, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IOrganizationContact } from '../../interfaces/backbones';
import DomainResource from '../base/DomainResource';
import { IOrganizationBuilder, OrganizationBuilder } from './OrganizationBuilder';

export default class Organization extends DomainResource implements IOrganization {
  resourceType = 'Organization';

  // Organization attributes
  identifier?: IIdentifier[];
  active?: boolean;
  type?: ICodeableConcept[];
  name?: string;
  alias?: string[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  partOf?: IReference;
  contact?: IOrganizationContact[];
  endpoint?: IReference[];

  // Extensions
  _active?: IElement;
  _alias?: IElement[];
  _name?: IElement;

  static get resourceType(): string {
    return 'Organization';
  }

  static builder(): IOrganizationBuilder {
    return new OrganizationBuilder();
  }

  constructor(args?: IOrganization) {
    super();
    Object.assign(this, args);
  }
}
