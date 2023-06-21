import { IElement } from '../../interfaces/base';
import { IExtension } from '../../interfaces/datatypes';
import Base from './Base';

export default abstract class Element extends Base implements IElement {
  id?: string;
  extension?: IExtension[];
}
