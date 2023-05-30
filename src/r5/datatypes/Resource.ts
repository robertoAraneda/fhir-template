import { Base } from './Base';
import { Meta } from './Meta';

export const resourceValidArgs = ['id', 'meta', 'implicitRules', 'language'];
export class Resource extends Base {
  resourceType?: string;
  id?: number | string;
  meta?: Meta;
  implicitRules?: string;
  language?: string;

  constructor() {
    super();
  }
}
