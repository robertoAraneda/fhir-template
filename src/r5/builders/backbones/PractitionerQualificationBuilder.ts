import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { IPractitionerQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';

export class PractitionerQualificationBuilder
  extends BackboneElementBuilder<PractitionerQualificationBuilder>
  implements IBuildable<IPractitionerQualification>, ISerializable
{
  private readonly practitionerQualification: IPractitionerQualification;

  constructor() {
    super();
    this.practitionerQualification = {} as IPractitionerQualification;
  }

  setCode(code: ICodeableConcept): PractitionerQualificationBuilder {
    this.practitionerQualification.code = code;
    return this;
  }

  addIdentifier(identifier: IIdentifier): PractitionerQualificationBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }

    this.practitionerQualification.identifier = this.practitionerQualification.identifier || [];

    this.practitionerQualification.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerQualificationBuilder {
    this.practitionerQualification.identifier = identifiers;
    return this;
  }

  setIssuer(issuer: IReference): PractitionerQualificationBuilder {
    if (issuer.reference) {
      validateReference(issuer.reference, ['Organization']);
    }

    this.practitionerQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): PractitionerQualificationBuilder {
    this.practitionerQualification.period = period;
    return this;
  }

  build(): IPractitionerQualification {
    return JSON.parse(this.serialize());
  }

  raw(): IPractitionerQualification {
    return {
      ...this.practitionerQualification,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
