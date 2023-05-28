import { Element } from './Element';

export class BackboneElement extends Element {
  constructor(args?: Partial<BackboneElement>) {
    super();
    Object.assign(this, args);
  }
}
