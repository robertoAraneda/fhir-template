import { Resource } from './Resource';
import { Narrative } from './Narrative';
import { Extension } from './Extension';

export const domainResourceValidArgs = ['text', 'contained', 'extension', 'modifierExtension'];
export class DomainResource extends Resource {
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
}
