import { Narrative } from './Narrative';
import { Resource } from './Resource';
import { Extension } from '../datatypes/Extension';

export interface DomainResource extends Resource {
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
}
