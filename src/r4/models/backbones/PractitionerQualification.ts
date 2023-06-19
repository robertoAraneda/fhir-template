import { IPractitionerQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { validateReference } from '../../../globals/helpers/validateReference';
import BackboneElement from './BackboneElement';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class PractitionerQualification extends BackboneElement implements IPractitionerQualification {
  // PractitionerQualification attributes
  identifier?: IIdentifier[];
  code: ICodeableConcept;
  period?: IPeriod;
  issuer?: IReference;

  static builder(): IPractitionerQualificationBuilder {
    return new PractitionerQualificationBuilder();
  }

  constructor(args?: IPractitionerQualification) {
    super();
    Object.assign(this, args);
  }
}

export interface IPractitionerQualificationBuilder
  extends IBuildable<IPractitionerQualification>,
    ISerializable,
    IBackboneElementBuilder<IPractitionerQualificationBuilder>,
    IElementBuilder<IPractitionerQualificationBuilder> {
  setCode(code: ICodeableConcept): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setIssuer(issuer: IReference): this;
  setPeriod(period: IPeriod): this;
}
class PractitionerQualificationBuilder
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
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }

    this.practitionerQualification.identifier = this.practitionerQualification.identifier || [];

    this.practitionerQualification.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    }
    this.practitionerQualification.identifier = identifiers;
    return this;
  }

  setIssuer(issuer: IReference): this {
    if (issuer.reference) {
      validateReference(issuer.reference, ['Organization']);
    }

    this.practitionerQualification.issuer = issuer;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.practitionerQualification.period = period;
    return this;
  }

  build(): IPractitionerQualification {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IPractitionerQualification {
    return {
      ...this.practitionerQualification,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }
}
