import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../datatypes/CodeableConcept';

/**
 * @description A language the practitioner can use in patient communication.
 * @property {CodeableConcept} language
 * @property {boolean} preferred
 * @property {Element} _preferred
 * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication
 * @extends {Element}
 * @author Roberto Araneda
 * @since  2023-06-01
 */
export interface PractitionerCommunication extends BackboneElement {
  /**
   * @description The language code used to communicate with the practitioner.
   * @description Binding: All Languages (Required)
   * @type {CodeableConcept} language
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.language
   */
  language: CodeableConcept;

  /**
   * @description Language preference indicator
   * @type {boolean} preferred
   * @memberof PractitionerCommunication
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.preferred
   */
  preferred?: boolean;

  _preferred?: Element;
}
