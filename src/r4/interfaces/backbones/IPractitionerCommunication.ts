import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @description A language the practitioner can use in patient communication.
 * @property {ICodeableConcept} language
 * @property {boolean} preferred
 * @property {IElement} _preferred
 * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication
 * @author Roberto Araneda
 * @since  2023-06-01
 */
export interface IPractitionerCommunication extends IBackboneElement {
  /**
   * @description The language code used to communicate with the practitioner.
   * @description Binding: All Languages (Required)
   * @type {ICodeableConcept} language
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.language
   */
  language: ICodeableConcept;

  /**
   * @description Language preference indicator
   * @type {boolean} preferred
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.preferred
   */
  preferred?: boolean;

  /**
   * @description Extension for preferred
   * @type {IElement} _preferred
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.preferred
   */
  _preferred?: IElement;
}
