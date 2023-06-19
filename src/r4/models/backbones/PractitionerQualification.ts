import { IPractitionerQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import {
  IPractitionerQualificationBuilder,
  PractitionerQualificationBuilder,
} from './PractitionerQualificationBuilder';

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
