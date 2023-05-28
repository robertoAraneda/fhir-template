import { Element } from './Element';
import { NarrativeStatus } from '../enumerators/NarrativeStatus';
import { NarrativeStatusType } from '../types/NarrativeStatusType';

/**
 * Narrative
 * @version R5
 * @see https://www.hl7.org/fhir/narrative.html#Narrative
 * @description Any resource that is a DomainResource (all resources except Bundle, Parameters and Binary) may include a human-readable narrative that contains a summary of the resource and may be used to represent the content of the resource to a human.
 */
export class Narrative extends Element {
  status: NarrativeStatus | NarrativeStatusType;
  div: string;
  constructor(args?: Partial<Narrative>) {
    super();

    if (args?.div) {
      const hasDiv = args.div.startsWith('<div xmlns="http://www.w3.org/1999/xhtml">');

      if (!hasDiv) {
        throw new Error('Narrative.div must start with <div xmlns="http://www.w3.org/1999/xhtml">');
      }
    }

    Object.assign(this, args);
  }
}
