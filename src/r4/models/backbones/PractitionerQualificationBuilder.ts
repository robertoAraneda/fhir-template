import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import PractitionerQualification from './PractitionerQualification';
import { IPractitionerQualification } from '../../interfaces/backbones';

export interface IPractitionerQualificationBuilder
  extends IBuildable<PractitionerQualification>,
    IBackboneElementBuilder<PractitionerQualificationBuilder>,
    IElementBuilder<PractitionerQualificationBuilder> {
  setCode(code: ICodeableConcept): this;

  addIdentifier(identifier: IIdentifier): this;

  setMultipleIdentifier(identifiers: IIdentifier[]): this;

  setIssuer(issuer: IReference): this;

  setPeriod(period: IPeriod): this;
}

export class PractitionerQualificationBuilder
  extends BackboneElementBuilder<PractitionerQualificationBuilder>
  implements IPractitionerQualificationBuilder
{
  private readonly practitionerQualification: IPractitionerQualification;

  constructor() {
    super();
    this.practitionerQualification = {} as IPractitionerQualification;
  }

  setCode(code: ICodeableConcept): this {
    this.practitionerQualification.code = code;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.practitionerQualification.identifier = this.practitionerQualification.identifier || [];

    this.practitionerQualification.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.practitionerQualification.identifier = identifiers;
    return this;
  }

  setIssuer(issuer: IReference): this {
    this.practitionerQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.practitionerQualification.period = period;
    return this;
  }

  build(): PractitionerQualification {
    Object.assign(this.practitionerQualification, { ...super.entity() });
    return new PractitionerQualification(this.practitionerQualification).toJson();
  }
}
