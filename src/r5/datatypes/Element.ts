import { Extension } from './Extension';

export class Element {
  id?: string;
  extension?: Extension[];
  constructor(args?: Partial<Element>) {
    Object.assign(this, args);
  }
}
