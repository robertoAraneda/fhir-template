import { IDomainResource, IElement } from '../base';
import {
  IIdentifier,
  IPeriod,
  ICodeableConcept,
  IExtendedContactDetail,
  IAvailability,
  IReference,
} from '../datatypes';

export default interface IPractitionerRole extends IDomainResource {
  resourceType: 'PractitionerRole';
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
