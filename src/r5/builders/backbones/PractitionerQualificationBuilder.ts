import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { PractitionerQualification } from '../../interfaces/backbones/PractitionerQualification';
import { Serialize } from '../../interfaces/base/Serialize';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { validateReference } from '../../helpers/validateReference';
import { Reference } from '../../interfaces/base/Reference';
import { Period } from '../../interfaces/datatypes/Period';

export class PractitionerQualificationBuilder
  extends BackboneElementBuilder<PractitionerQualificationBuilder>
  implements Build<PractitionerQualification>, Serialize
{
  private readonly practitionerQualification: PractitionerQualification;

  constructor() {
    super();
    this.practitionerQualification = {} as PractitionerQualification;
  }

  setCode(code: CodeableConcept): PractitionerQualificationBuilder {
    this.practitionerQualification.code = code;
    return this;
  }

  addIdentifier(identifier: Identifier): PractitionerQualificationBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }

    this.practitionerQualification.identifier = this.practitionerQualification.identifier || [];

    this.practitionerQualification.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: Identifier[]): PractitionerQualificationBuilder {
    this.practitionerQualification.identifier = identifiers;
    return this;
  }

  setIssuer(issuer: Reference): PractitionerQualificationBuilder {
    if (issuer.reference) {
      validateReference(issuer.reference, ['Organization']);
    }

    this.practitionerQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: Period): PractitionerQualificationBuilder {
    this.practitionerQualification.period = period;
    return this;
  }

  build(): PractitionerQualification {
    return JSON.parse(this.serialize());
  }

  raw(): PractitionerQualification {
    return {
      ...this.practitionerQualification,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
