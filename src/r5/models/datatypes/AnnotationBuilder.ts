import { IBuildable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import Annotation from './Annotation';
import { IElement } from '../../interfaces/base';
import { IReference } from '../../interfaces/datatypes';
import IAnnotation from '../../interfaces/datatypes/IAnnotation';

type AnnotationExtensionParam = 'authorString' | 'time' | 'text';

export interface IAnnotationBuilder extends IBuildable<Annotation>, IElementBuilder<AnnotationBuilder> {
  addParamExtension<T extends AnnotationExtensionParam>(param: T, element: IElement): this;
  setAuthorReference(value: IReference): this;
  setAuthorString(value: string): this;
  setTime(value: string): this;
  setText(value: string): this;
}

export default class AnnotationBuilder extends ElementBuilder<AnnotationBuilder> implements IAnnotationBuilder {
  private readonly annotation: IAnnotation;
  constructor() {
    super();
    this.annotation = {} as IAnnotation;
  }

  addParamExtension<T extends AnnotationExtensionParam>(param: T, element: IElement): this {
    this.annotation[`_${param}`] = element;
    return this;
  }

  setAuthorString(value: string): this {
    this.annotation.authorString = value;
    return this;
  }

  setTime(value: string): this {
    this.annotation.time = value;
    return this;
  }

  setAuthorReference(value: IReference): this {
    this.annotation.authorReference = value;
    return this;
  }

  setText(value: string): this {
    this.annotation.text = value;
    return this;
  }

  build(): Annotation {
    Object.assign(this.annotation, { ...super.entity() });
    return new Annotation(this.annotation).toJson();
  }
}
