import { IPractitionerRole } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  ICodeableConcept,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';

/**
 * @summary FHIR R4
 */
export class PractitionerRole implements IPractitionerRole {
  resourceType = 'PractitionerRole';

  // Resource attributes
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  language?: string;
  _implicitRules?: IElement;
  _language?: IElement;

  // DomainResource attributes
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];

  // PractitionerRole attributes
  identifier?: IIdentifier[];
  active?: boolean;
  period?: IPeriod;
  practitioner?: IReference;
  organization?: IReference;
  code?: ICodeableConcept[];
  specialty?: ICodeableConcept[];
  location?: IReference[];
  healthcareService?: IReference[];
  telecom?: IReference[];
  availableTime?: IPractitionerRoleAvailableTime[];
  notAvailable?: IPractitionerRoleNotAvailable[];
  availabilityExceptions?: string;
  endpoint?: IReference[];

  // Extensions
  _active?: IElement;
  _availabilityExceptions?: IElement;

  constructor(args?: PractitionerRole) {
    Object.assign(this, args);
  }
}
