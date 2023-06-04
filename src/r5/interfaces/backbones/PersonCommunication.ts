import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../../datatypes/CodeableConcept';
import { Element } from '../base/Element';

export interface PersonCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;
  _preferred?: Element;
}
