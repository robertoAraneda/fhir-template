import { IPractitionerRole } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAvailability,
  ICodeableConcept,
  IExtendedContactDetail,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';

export class PractitionerRole implements IPractitionerRole {
  _active?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  active?: boolean;
  availability?: IAvailability[];
  characteristic?: ICodeableConcept[];
  code?: ICodeableConcept[];
  communication?: ICodeableConcept[];
  contact?: IExtendedContactDetail[];
  contained?: IResource[];
  endpoint?: IReference[];
  extension?: IExtension[];
  healthcareService?: IReference[];
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  location?: IReference[];
  meta?: IMeta;
  modifierExtension?: IExtension[];
  organization?: IReference;
  period?: IPeriod;
  practitioner?: IReference;
  resourceType: string = 'PractitionerRole';
  specialty?: ICodeableConcept[];
  text?: INarrative;

  constructor(args?: Partial<PractitionerRole>) {
    Object.assign(this, args);
  }
}
