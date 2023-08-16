import { IExtension } from '../../interfaces/datatypes';
import Base from './Base';
import { IElement } from '../../interfaces/base';

export default abstract class Element extends Base implements IElement {
  id?: string;
  extension?: IExtension[];
}
