import { Resource } from './Resource';
import { Narrative } from './Narrative';
import { Extension } from './Extension';

export const domainResourceValidArgs = ['text', 'contained', 'extension', 'modifierExtension'];
export class DomainResource extends Resource {
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];

  constructor(args?: Partial<DomainResource>) {
    super();
    Object.assign(this, args);

    const validArgs = [...domainResourceValidArgs, 'text', 'contained', 'extension', 'modifierExtension'];

    if (args) {
      for (const key of Object.keys(args)) {
        if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type DomainResource`);
      }
    }
  }
}
