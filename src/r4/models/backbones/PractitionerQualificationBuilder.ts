import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import PractitionerQualification from './PractitionerQualification';

export interface IPractitionerQualificationBuilder
  extends IBuildable<PractitionerQualification>,
    IBackboneElementBuilder<PractitionerQualificationBuilder>,
    IElementBuilder<PractitionerQualificationBuilder> {
  setCode(code: ICodeableConcept): PractitionerQualificationBuilder;

  addIdentifier(identifier: IIdentifier): PractitionerQualificationBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerQualificationBuilder;

  setIssuer(issuer: IReference): PractitionerQualificationBuilder;

  setPeriod(period: IPeriod): PractitionerQualificationBuilder;
}

export class PractitionerQualificationBuilder
  extends BackboneElementBuilder<PractitionerQualificationBuilder>
  implements IPractitionerQualificationBuilder
{
  private readonly practitionerQualification: PractitionerQualification;

  constructor() {
    super();
    this.practitionerQualification = new PractitionerQualification();
  }

  setCode(code: ICodeableConcept): PractitionerQualificationBuilder {
    this.practitionerQualification.code = code;
    return this;
  }

  addIdentifier(identifier: IIdentifier): PractitionerQualificationBuilder {
    if (identifier.assigner?.reference) {
      validateReferenceHelper(identifier.assigner.reference, ['Organization']);
    }

    this.practitionerQualification.identifier = this.practitionerQualification.identifier || [];

    this.practitionerQualification.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerQualificationBuilder {
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReferenceHelper(identifier.assigner.reference, ['Organization']);
      }
    }
    this.practitionerQualification.identifier = identifiers;
    return this;
  }

  setIssuer(issuer: IReference): PractitionerQualificationBuilder {
    if (issuer.reference) {
      validateReferenceHelper(issuer.reference, ['Organization']);
    }

    this.practitionerQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): PractitionerQualificationBuilder {
    this.practitionerQualification.period = period;
    return this;
  }

  build(): PractitionerQualification {
    Object.assign(this.practitionerQualification, { ...super.entity() });
    return this.practitionerQualification.toJson();
  }
}
