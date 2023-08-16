import { IPractitionerQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import PractitionerQualificationBuilder from './PractitionerQualificationBuilder';
import { PractitionerQualificationValidator } from './PractitionerQualificationValidator';

export default class PractitionerQualification extends BackboneElement implements IPractitionerQualification {
  // PractitionerQualification attributes
  identifier?: IIdentifier[];
  code: ICodeableConcept;
  period?: IPeriod;
  issuer?: IReference;

  static builder(): PractitionerQualificationBuilder {
    return new PractitionerQualificationBuilder();
  }

  toJson(): PractitionerQualification {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `PractitionerQualification${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `PractitionerQualification${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IPractitionerQualification) {
    super();

    PractitionerQualificationValidator(args);
    Object.assign(this, args);
  }
}
