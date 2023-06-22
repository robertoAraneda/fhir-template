import { IOrganization } from '../../interfaces/resources';
import { ICodeableConcept, IExtendedContactDetail, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IOrganizationQualification } from '../../interfaces/backbones';
import DomainResource from '../base/DomainResource';
import OrganizationBuilder from './OrganizationBuilder';

export default class Organization extends DomainResource implements IOrganization {
  _active?: IElement;
  _alias?: IElement[];
  _description?: IElement;
  _name?: IElement;
  active?: boolean;
  alias?: string[];
  contact?: IExtendedContactDetail[];
  description?: string;
  endpoint?: IReference[];
  identifier?: IIdentifier[];
  name?: string;
  partOf?: IReference;
  qualification?: IOrganizationQualification[];
  resourceType = 'Organization' as const;
  type?: ICodeableConcept[];

  static builder(): OrganizationBuilder {
    return new OrganizationBuilder();
  }

  toJson(): Organization {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Group${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Group${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IOrganization) {
    super();
    Object.assign(this, args);
  }
}
