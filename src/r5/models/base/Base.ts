import { IBase } from '../../../globals/interfaces';

export default abstract class Base implements IBase {
  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;

  constructor() {}
}
