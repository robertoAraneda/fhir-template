import { BackboneElement } from '../datatypes/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';

/**
 * @description A language the practitioner can use in patient communication.
 * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication
 * @implements {BackboneElement}
 *
 */
export class PractitionerCommunication extends BackboneElement {
  /**
   * @description The language code used to communicate with the practitioner.
   * @description Binding: All Languages (Required)
   * @type {CodeableConcept}
   * @memberof PractitionerCommunication
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.language
   */
  language: CodeableConcept;

  /**
   * @description Language preference indicator
   * @type {boolean}
   * @memberof PractitionerCommunication
   * @see https://hl7.org/fhir/practitioner-definitions.html#Practitioner.communication.preferred
   */
  preferred?: boolean;
  constructor(args?: Partial<PractitionerCommunication>) {
    super();
    Object.assign(this, args);
  }
}
