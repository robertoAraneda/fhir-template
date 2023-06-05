import { IDomainResource, IElement, IReference } from '../base';
import { IIdentifier, IPeriod, ICodeableConcept, IExtendedContactDetail, IAvailability } from '../datatypes';

export interface IPractitionerRole extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  period?: IPeriod;
  practitioner?: IReference;
  organization?: IReference;
  code?: ICodeableConcept[];
  specialty?: ICodeableConcept[];
  location?: IReference[];
  healthcareService?: IReference[];
  contact?: IExtendedContactDetail[];
  characteristic?: ICodeableConcept[];
  communication?: ICodeableConcept[];
  availability?: IAvailability[];
  endpoint?: IReference[];
  _active?: IElement;
}