import { Period } from './Period';

export class HumanName {
  use: string;
  text: string;
  family: string;
  given: string[];
  prefix: string[];
  suffix: string[];
  period: Period;

  constructor(args?: Partial<HumanName>) {
    Object.assign(this, args);
  }
}
