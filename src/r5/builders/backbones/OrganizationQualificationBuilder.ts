import { IOrganizationQualification } from '../../interfaces/backbones';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { OrganizationQualification } from '../../models/backbones';

interface IOrganizationQualificationBuilder extends IBuildable<IOrganizationQualification>, ISerializable {
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

    this.organizationQualification = new OrganizationQualification();
  }

  setCode(code: ICodeableConcept): this {
    this.organizationQualification.code = code;
    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): this {
    for (const id of identifier) {
      if (id.assigner?.reference) {
        validateReference(id.assigner?.reference, ['Organization']);
      }
    }

    this.organizationQualification.identifier = identifier;
    return this;
  }

  setIssuer(issuer: IReference): this {
    if (issuer.reference) {
      validateReference(issuer.reference, ['Organization']);
    }

    this.organizationQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.organizationQualification.period = period;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
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
