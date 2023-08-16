import { IElement } from '../../interfaces/base';
import { IExtension } from '../../interfaces/datatypes';

export const elementAttributes: readonly string[] = ['id', 'extension'];

export default abstract class Element implements IElement {
  id?: string;
  extension?: IExtension[];
  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;
}
