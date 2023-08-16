import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { OrganizationQualification } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import { IOrganizationQualification } from '../../interfaces/backbones';

interface IOrganizationQualificationBuilder
  extends IBuildable<OrganizationQualification>,
    IBackboneElementBuilder<OrganizationQualificationBuilder>,
    IElementBuilder<OrganizationQualificationBuilder> {
  setCode(code: ICodeableConcept): this;

  addIdentifier(identifier: IIdentifier): this;

  setMultipleIdentifier(identifier: IIdentifier[]): this;

  setIssuer(issuer: IReference): this;

  setPeriod(period: IPeriod): this;
}

export default class OrganizationQualificationBuilder
  extends BackboneElementBuilder<OrganizationQualificationBuilder>
  implements IOrganizationQualificationBuilder
{
  private readonly organizationQualification: IOrganizationQualification;

  constructor() {
    super();
    this.organizationQualification = {} as IOrganizationQualification;
  }

  setCode(code: ICodeableConcept): this {
    this.organizationQualification.code = code;
    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): this {
    identifier.forEach((identifier) => this.addIdentifier(identifier));
    return this;
  }

  setIssuer(issuer: IReference): this {
    this.organizationQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.organizationQualification.period = period;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.organizationQualification.identifier = this.organizationQualification.identifier || [];
    this.organizationQualification.identifier.push(identifier);
    return this;
  }

  build(): OrganizationQualification {
    Object.assign(this.organizationQualification, { ...super.entity() });
    return new OrganizationQualification(this.organizationQualification).toJson();
  }
}
