import { Element } from './Element';
import { Period } from './Period';

export class Address extends Element {
  use?: string;
  type?: string;
  text?: string;
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: Period;

  constructor(args?: Partial<Address>) {
    super();
    Object.assign(this, args);
  }
}
