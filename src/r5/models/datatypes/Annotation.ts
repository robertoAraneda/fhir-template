import Element from '../base/Element';
import IAnnotation from '../../interfaces/datatypes/IAnnotation';
import { IElement } from '../../interfaces/base';
import { IReference } from '../../interfaces/datatypes';
import { AnnotationValidator } from './AnnotationValidator';
import AnnotationBuilder from './AnnotationBuilder';

export default class Annotation extends Element implements IAnnotation {
  _authorString: IElement;
  _text: IElement;
  _time: IElement;
  authorReference: IReference;
  authorString: string;
  text: string;
  time: string;

  static builder(): AnnotationBuilder {
    return new AnnotationBuilder();
  }

  toJson(): Annotation {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Annotation${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Annotation${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IAnnotation) {
    super();
    AnnotationValidator(args);
    Object.assign(this, args);
  }
}
