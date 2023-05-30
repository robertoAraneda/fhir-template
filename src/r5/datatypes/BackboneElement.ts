import { Element } from './Element';
import { Extension } from './Extension';

export class BackboneElement extends Element {
  modifierExtension?: Extension[];
  constructor(args?: Partial<BackboneElement>) {
    super();
    Object.assign(this, args);
  }
}
