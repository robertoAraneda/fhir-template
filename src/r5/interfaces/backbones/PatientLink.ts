import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../base/Reference';
import { LinkType } from '../../enums/LinkType';
import { LinkTypeType } from '../../types/LinkTypeType';
import { Element } from '../base/Element';

export interface PatientLink extends BackboneElement {
  other: Reference;
  type: LinkType | LinkTypeType;
  _type?: Element;
}
