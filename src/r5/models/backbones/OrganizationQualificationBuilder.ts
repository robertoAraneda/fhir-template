import { IOrganizationQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { OrganizationQualification } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

interface IOrganizationQualificationBuilder
  extends IBuildable<OrganizationQualification>,
    IBackboneElementBuilder<OrganizationQualificationBuilder>,
    IElementBuilder<OrganizationQualificationBuilder> {
  setCode(code: ICodeableConcept): OrganizationQualificationBuilder;

  addIdentifier(identifier: IIdentifier): OrganizationQualificationBuilder;

  setMultipleIdentifier(identifier: IIdentifier[]): OrganizationQualificationBuilder;

  setIssuer(issuer: IReference): OrganizationQualificationBuilder;

  setPeriod(period: IPeriod): OrganizationQualificationBuilder;
}

export default class OrganizationQualificationBuilder
  extends BackboneElementBuilder<OrganizationQualificationBuilder>
  implements IOrganizationQualificationBuilder
{
  private readonly organizationQualification: OrganizationQualification;

  constructor() {
    super();
    this.organizationQualification = new OrganizationQualification();
  }

  setCode(code: ICodeableConcept): OrganizationQualificationBuilder {
    this.organizationQualification.code = code;
    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): OrganizationQualificationBuilder {
    for (const id of identifier) {
      if (id.assigner?.reference) {
        validateReference(id.assigner?.reference, ['Organization']);
      }
    }

    this.organizationQualification.identifier = identifier;
    return this;
  }

  setIssuer(issuer: IReference): OrganizationQualificationBuilder {
    if (issuer.reference) {
      validateReference(issuer.reference, ['Organization']);
    }

    this.organizationQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): OrganizationQualificationBuilder {
    this.organizationQualification.period = period;
    return this;
  }

  addIdentifier(identifier: IIdentifier): OrganizationQualificationBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner?.reference, ['Organization']);
    }

    this.organizationQualification.identifier = this.organizationQualification.identifier || [];
    this.organizationQualification.identifier.push(identifier);
    return this;
  }

  build(): OrganizationQualification {
    Object.assign(this.organizationQualification, { ...super.entity() });
    return this.organizationQualification.toJson();
  }
}
