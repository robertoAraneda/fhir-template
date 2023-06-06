import { IExtension } from '../datatypes';

/**
 * @description Base Element Definition - common elements, used across all resources.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @see https://www.hl7.org/fhir/types.html#Element Element
 */
export interface IElement {
  /**
   * @description Unique id for inter-element referencing
   */
  id?: string;

  /**
   * @description Additional content defined by implementations
   */
  extension?: IExtension[];
}
