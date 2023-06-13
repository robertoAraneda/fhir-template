import { IOrganization } from '../../interfaces/resources';
import {
  ICodeableConcept,
  IExtendedContactDetail,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IReference,
} from '../../interfaces/datatypes';
import { IElement, IResource } from '../../interfaces/base';
import { IOrganizationQualification } from '../../interfaces/backbones';

export default class Organization implements IOrganization {
  _active?: IElement;
  _alias?: IElement[];
  _description?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  _name?: IElement;
  active?: boolean;
  alias?: string[];
  contact?: IExtendedContactDetail[];
  contained?: IResource[];
  description?: string;
  endpoint?: IReference[];
  extension?: IExtension[];
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  meta?: IMeta;
  modifierExtension?: IExtension[];
  name?: string;
  partOf?: IReference;
  qualification?: IOrganizationQualification[];
  resourceType: string = 'Organization';
  text?: INarrative;
  type?: ICodeableConcept[];

  constructor(args?: Partial<Organization>) {
    Object.assign(this, args);
  }
}
