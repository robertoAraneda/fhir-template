import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../datatypes/CodeableConcept';

/**
 * @description A language which may be used to communicate with the patient about his or her health.
 * @property {CodeableConcept} language
 * @property {boolean} preferred
 * @property {Element} _preferred
 * @see https://hl7.org/fhir/patient-definitions.html#Patient.communication BackboneElement
 * @since 2021-10-06
 * @author Roberto Araneda
 */
export interface RelatedPersonCommunication extends BackboneElement {
  /**
   * @description The language which can be used to communicate with the related person about the patient's health.
   * @type {CodeableConcept} language
   * @see https://www.hl7.org/fhir/relatedperson.html#RelatedPerson.communication
   */
  language: CodeableConcept;

  /**
   * @description Language preference indicator
   * @type {boolean} preferred
   * @see https://www.hl7.org/fhir/relatedperson.html#RelatedPerson.communication
   */
  preferred?: boolean;

  /**
   * @description Extensions for preferred
   * @type {Element} _preferred
   * @see https://www.hl7.org/fhir/relatedperson.html#RelatedPerson.communication
   */
  _preferred?: Element;
}
