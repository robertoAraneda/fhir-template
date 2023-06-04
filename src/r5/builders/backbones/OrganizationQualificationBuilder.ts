import { OrganizationQualification } from '../../interfaces/backbones/OrganizationQualification';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { Reference } from '../../interfaces/base/Reference';
import { Period } from '../../interfaces/datatypes/Period';
import { validateReference } from '../../helpers/validateReference';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export class OrganizationQualificationBuilder
  extends BackboneElementBuilder<OrganizationQualificationBuilder>
  implements Build<OrganizationQualification>, Serialize
{
  private readonly organizationQualification: OrganizationQualification;

  constructor() {
    super();

    this.organizationQualification = {} as OrganizationQualification;
  }

  setCode(code: CodeableConcept): OrganizationQualificationBuilder {
    this.organizationQualification.code = code;
    return this;
  }

  setMultipleIdentifier(identifier: Identifier[]): OrganizationQualificationBuilder {
    for (const id of identifier) {
      if (id.assigner?.reference) {
        validateReference(id.assigner?.reference, ['Organization']);
      }
    }

    this.organizationQualification.identifier = identifier;
    return this;
  }

  setIssuer(issuer: Reference): OrganizationQualificationBuilder {
    if (issuer.reference) {
      validateReference(issuer.reference, ['Organization']);
    }

    this.organizationQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: Period): OrganizationQualificationBuilder {
    this.organizationQualification.period = period;
    return this;
  }

  addIdentifier(identifier: Identifier): OrganizationQualificationBuilder {
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

  build(): OrganizationQualification {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): OrganizationQualification {
    return {
      ...this.organizationQualification,
      ...super.entity(),
    };
  }
}
