import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @description A language which may be used to communicate with the patient about his or her health.
 * @property {ICodeableConcept} language
 * @property {boolean} preferred
 * @property {IElement} _preferred
 * @see https://hl7.org/fhir/patient-definitions.html#Patient.communication BackboneElement
 * @since 2021-10-06
 * @author Roberto Araneda
 */
export default interface IRelatedPersonCommunication extends IBackboneElement {
  /**
   * @description The language which can be used to communicate with the related person about the patient's health.
   * @type {ICodeableConcept} language
   * @see https://www.hl7.org/fhir/relatedperson.html#RelatedPerson.communication
   */
  language: ICodeableConcept;

  /**
   * @description Language preference indicator
   * @type {boolean} preferred
   * @see https://www.hl7.org/fhir/relatedperson.html#RelatedPerson.communication
   */
  preferred?: boolean;

  /**
   * @description Extensions for preferred
   * @type {IElement} _preferred
   * @see https://www.hl7.org/fhir/relatedperson.html#RelatedPerson.communication
   */
  _preferred?: IElement;
}
