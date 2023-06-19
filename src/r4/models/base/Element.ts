import { IElement } from '../../interfaces/base';
import { IExtension } from '../../interfaces/datatypes';

export default abstract class Element implements IElement {
  id?: string;
  extension?: IExtension[];
  static builder: () => any;
  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;
}
