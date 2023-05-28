import { Extension } from './Extension';
import { Base } from './Base';

export class Element extends Base {
  id?: string;
  extension?: Extension[];
  constructor(args?: Partial<Element>) {
    super();
    Object.assign(this, args);
  }
}
