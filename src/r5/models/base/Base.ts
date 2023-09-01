import { IBase } from '../../interfaces/base';

export default abstract class Base implements IBase {
  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;
}
