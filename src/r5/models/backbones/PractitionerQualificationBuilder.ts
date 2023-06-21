import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { PractitionerQualification } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

interface IPractitionerQualificationBuilder
  extends IBuildable<PractitionerQualification>,
    IBackboneElementBuilder<PractitionerQualificationBuilder>,
    IElementBuilder<PractitionerQualificationBuilder> {
  setCode(code: ICodeableConcept): PractitionerQualificationBuilder;

  addIdentifier(identifier: IIdentifier): PractitionerQualificationBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerQualificationBuilder;

  setIssuer(issuer: IReference): PractitionerQualificationBuilder;

  setPeriod(period: IPeriod): PractitionerQualificationBuilder;
}
export default class PractitionerQualificationBuilder
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

  build(): PractitionerQualification {
    Object.assign(this.practitionerQualification, { ...super.entity() });
    return this.practitionerQualification.toJson();
  }
}
