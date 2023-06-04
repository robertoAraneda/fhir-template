import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../datatypes/CodeableConcept';

export interface PersonCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;
  _preferred?: Element;
}
