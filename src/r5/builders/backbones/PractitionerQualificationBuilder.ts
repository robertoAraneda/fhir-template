import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Buildable, Serializable, Reference } from '../../interfaces/base';
import { PractitionerQualification } from '../../interfaces/backbones';
import { CodeableConcept, Identifier, Period } from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';

export class PractitionerQualificationBuilder
  extends BackboneElementBuilder<PractitionerQualificationBuilder>
  implements Buildable<PractitionerQualification>, Serializable
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
