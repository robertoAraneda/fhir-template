import { IOrganizationQualification } from '../../interfaces/backbones';
import { IBuildable, ISerializable, IReference } from '../../interfaces/base';
import { ICodeableConcept, IIdentifier, IPeriod } from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export class OrganizationQualificationBuilder
  extends BackboneElementBuilder<OrganizationQualificationBuilder>
  implements IBuildable<IOrganizationQualification>, ISerializable
{
  private readonly organizationQualification: IOrganizationQualification;

  constructor() {
    super();

    this.organizationQualification = {} as IOrganizationQualification;
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IOrganizationQualification {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): IOrganizationQualification {
    return {
      ...this.organizationQualification,
      ...super.entity(),
    };
  }
}
