import { IOrganization } from '../../interfaces/resources';
import { ICodeableConcept, IExtendedContactDetail, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IOrganizationQualification } from '../../interfaces/backbones';
import DomainResource from '../base/DomainResource';
import OrganizationBuilder from './OrganizationBuilder';
import { OrganizationValidator } from './OrganizationValidator';

export default class Organization extends DomainResource implements IOrganization {
  resourceType = 'Organization' as const;
  identifier?: IIdentifier[];
  active?: boolean;
  type?: ICodeableConcept[];
  name?: string;
  alias?: string[];
  description?: string;
  contact?: IExtendedContactDetail[];
  partOf?: IReference;
  endpoint?: IReference[];
  qualification?: IOrganizationQualification[];

  _active?: IElement;
  _alias?: IElement[];
  _description?: IElement;
  _name?: IElement;

  static builder(): OrganizationBuilder {
    return new OrganizationBuilder();
  }

  toJson(): Organization {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Organization${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Organization${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IOrganization) {
    super();
    OrganizationValidator(args);
    Object.assign(this, args);
  }
}
