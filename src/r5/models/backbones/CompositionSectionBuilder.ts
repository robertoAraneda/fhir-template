import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, INarrative, IReference } from '../../interfaces/datatypes';
import CompositionSection from './CompositionSection';
import { IBuildable } from '../../../globals/interfaces';
import ICompositionSection from '../../interfaces/backbones/ICompositionSection';

export interface ICompositionSectionBuilder
  extends IBuildable<CompositionSection>,
    IBackboneElementBuilder<CompositionSectionBuilder>,
    IElementBuilder<CompositionSectionBuilder> {
  addParamExtension(param: 'title', element: IElement): this;
  addAuthor(reference: IReference): this;
  setMultipleAuthors(authors: IReference[]): this;
  setTitle(title: string): this;
  setCode(code: ICodeableConcept): this;
  setEmptyReason(code: ICodeableConcept): this;
  addEntry(reference: IReference): this;
  setMultipleEntries(entries: IReference[]): this;
  setFocus(reference: IReference): this;
  setOrderedBy(code: ICodeableConcept): this;
  addSection(section: ICompositionSection): this;
  setMultipleSections(sections: ICompositionSection[]): this;
  setText(text: INarrative): this;
}
export default class CompositionSectionBuilder
  extends BackboneElementBuilder<CompositionSectionBuilder>
  implements ICompositionSectionBuilder
{
  private readonly _compositionSection: ICompositionSection;

  constructor() {
    super();
    this._compositionSection = {} as ICompositionSection;
  }

  addAuthor(reference: IReference): this {
    this._compositionSection.author = this._compositionSection.author || [];
    this._compositionSection.author.push(reference);
    return this;
  }

  addEntry(reference: IReference): this {
    this._compositionSection.entry = this._compositionSection.entry || [];
    this._compositionSection.entry.push(reference);
    return this;
  }

  addParamExtension(param: 'title', element: IElement): this {
    this._compositionSection[`_${param}`] = element;
    return this;
  }

  addSection(section: ICompositionSection): this {
    this._compositionSection.section = this._compositionSection.section || [];
    this._compositionSection.section.push(section);
    return this;
  }

  setCode(code: ICodeableConcept): this {
    this._compositionSection.code = code;
    return this;
  }

  setEmptyReason(code: ICodeableConcept): this {
    this._compositionSection.emptyReason = code;
    return this;
  }

  setFocus(reference: IReference): this {
    this._compositionSection.focus = reference;
    return this;
  }

  setMultipleAuthors(authors: IReference[]): this {
    authors.forEach((author) => this.addAuthor(author));
    return this;
  }

  setMultipleEntries(entries: IReference[]): this {
    entries.forEach((entry) => this.addEntry(entry));
    return this;
  }

  setMultipleSections(sections: ICompositionSection[]): this {
    sections.forEach((section) => this.addSection(section));
    return this;
  }

  setOrderedBy(code: ICodeableConcept): this {
    this._compositionSection.orderedBy = code;
    return this;
  }

  setText(text: INarrative): this {
    this._compositionSection.text = text;
    return this;
  }

  setTitle(title: string): this {
    this._compositionSection.title = title;
    return this;
  }

  build(): CompositionSection {
    Object.assign(this._compositionSection, { ...super.entity() });
    return new CompositionSection(this._compositionSection).toJson();
  }
}
