import { IPractitionerQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import { PractitionerQualificationBuilder } from './PractitionerQualificationBuilder';
import { PractitionerQualificationValidator } from './PractitionerQualificationValidator';

export default class PractitionerQualification extends BackboneElement implements IPractitionerQualification {
  // PractitionerQualification attributes
  identifier?: IIdentifier[];
  code: ICodeableConcept;
  period?: IPeriod;
  issuer?: IReference;

  toJson(): PractitionerQualification {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PractitionerQualification${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PractitionerQualification${JSON.stringify(this.toJson())}`;
  }

  static builder(): PractitionerQualificationBuilder {
    return new PractitionerQualificationBuilder();
  }

  constructor(args: IPractitionerQualification) {
    super();
    PractitionerQualificationValidator(args);
    Object.assign(this, args);
  }
}
