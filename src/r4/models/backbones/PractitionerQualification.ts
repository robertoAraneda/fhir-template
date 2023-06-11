import { IPractitionerQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';

export class PractitionerQualification implements IPractitionerQualification {
  // Element attributes
  id?: string;
  extension?: IExtension[];

  // BackboneElement attributes
  modifierExtension?: IExtension[];

  // PractitionerQualification attributes
  identifier?: IIdentifier[];
  code: ICodeableConcept;
  period?: IPeriod;
  issuer?: IReference;

  constructor(args?: IPractitionerQualification) {
    Object.assign(this, args);
  }
}
