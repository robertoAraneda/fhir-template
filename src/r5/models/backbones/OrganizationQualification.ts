import { IOrganizationQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import OrganizationQualificationBuilder from './OrganizationQualificationBuilder';

export default class OrganizationQualification extends BackboneElement implements IOrganizationQualification {
  // OrganizationQualification Properties
  identifier?: IIdentifier[];
  code: ICodeableConcept;
  issuer?: IReference;
  period?: IPeriod;

  static builder(): OrganizationQualificationBuilder {
    return new OrganizationQualificationBuilder();
  }

  toJson(): OrganizationQualification {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `OrganizationQualification${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `OrganizationQualification${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IOrganizationQualification) {
    super();
    Object.assign(this, args);
  }
}
