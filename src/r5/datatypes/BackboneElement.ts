import { Element } from './Element';

export class BackboneElement extends Element {
  id?: string;
  constructor(args?: Partial<BackboneElement>) {
    super();
    Object.assign(this, args);
  }
}
