import { IGroup } from '../../interfaces/resources/IGroup';
import { IElement, IResource } from '../../interfaces/base';
import { IGroupCharacteristic, IGroupMember } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension, IIdentifier, IMeta, INarrative, IReference } from '../../interfaces/datatypes';
import { GroupTypeEnum } from '../../enums';
import { GroupType } from '../../types';

export default class Group implements IGroup {
  // Resource Attributes
  resourceType: string;
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  language?: string;

  // Extension Resource Attributes
  _language?: IElement;
  _implicitRules?: IElement;

  // DomainResource Attributes
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];

  // Group Attributes
  identifier?: IIdentifier[];
  active?: boolean;
  type: GroupTypeEnum | GroupType;
  actual: boolean;
  code?: ICodeableConcept;
  name?: string;
  quantity?: number;
  managingEntity?: IReference;
  characteristic?: IGroupCharacteristic[];
  member?: IGroupMember[];

  // Extensions Group Attributes
  _active?: IElement;
  _type?: IElement;
  _actual?: IElement;
  _name?: IElement;
  _quantity?: IElement;

  constructor(args?: IGroup) {
    Object.assign(this, args);
  }
}
