import { IOrganization } from '../../interfaces/resources';
import {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IReference,
} from '../../interfaces/datatypes';
import { IElement, IResource } from '../../interfaces/base';
import { IOrganizationContact } from '../../interfaces/backbones';

export default class Organization implements IOrganization {
  resourceType = 'Organization';

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

  // Organization attributes
  identifier?: IIdentifier[];
  active?: boolean;
  type?: ICodeableConcept[];
  name?: string;
  alias?: string[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  partOf?: IReference;
  contact?: IOrganizationContact[];
  endpoint?: IReference[];

  // Extensions
  _active?: IElement;
  _alias?: IElement[];
  _name?: IElement;

  constructor(args?: IOrganization) {
    Object.assign(this, args);
  }
}
