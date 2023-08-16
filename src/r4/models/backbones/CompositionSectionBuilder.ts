import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, INarrative, IReference } from '../../interfaces/datatypes';
import { CompositionSectionListModeEnum } from '../../../enums';
import { CompositionSectionListModeType } from '../../../types';
import CompositionSection from './CompositionSection';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import { ICompositionSection } from '../../interfaces/backbones';
import { IBuildable } from '../../../globals/interfaces';

export interface ICompositionSectionBuilder
  extends IBuildable<CompositionSection>,
    IBackboneElementBuilder<CompositionSectionBuilder>,
    IElementBuilder<CompositionSectionBuilder> {
  addParamExtension(param: 'title' | 'mode', element: IElement): CompositionSectionBuilder;
  addAuthor(reference: IReference): CompositionSectionBuilder;
  setMultipleAuthors(authors: IReference[]): CompositionSectionBuilder;
  setTitle(title: string): CompositionSectionBuilder;
  setCode(code: ICodeableConcept): CompositionSectionBuilder;
  setEmptyReason(code: ICodeableConcept): CompositionSectionBuilder;
  addEntry(reference: IReference): CompositionSectionBuilder;
  setMultipleEntries(entries: IReference[]): CompositionSectionBuilder;
  setFocus(reference: IReference): CompositionSectionBuilder;
  setMode(mode: CompositionSectionListModeEnum | CompositionSectionListModeType): CompositionSectionBuilder;
  setOrderedBy(code: ICodeableConcept): CompositionSectionBuilder;
  addSection(section: ICompositionSection): CompositionSectionBuilder;
  setMultipleSections(sections: ICompositionSection[]): CompositionSectionBuilder;
  setText(text: INarrative): CompositionSectionBuilder;
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

  addAuthor(reference: IReference): CompositionSectionBuilder {
    if (reference.reference) {
      ValidateReferenceFormatHelper(reference.reference, [
        'Practitioner',
        'PractitionerRole',
        'Device',
        'Patient',
        'RelatedPerson',
        'Organization',
      ]);
    }

    this._compositionSection.author = this._compositionSection.author || [];
    this._compositionSection.author.push(reference);
    return this;
  }

  addEntry(reference: IReference): CompositionSectionBuilder {
    if (reference.reference) ValidateReferenceFormatHelper(reference.reference, 'all');
    this._compositionSection.entry = this._compositionSection.entry || [];
    this._compositionSection.entry.push(reference);
    return this;
  }

  addParamExtension(param: 'title' | 'mode', element: IElement): CompositionSectionBuilder {
    this._compositionSection[`_${param}`] = element;
    return this;
  }

  addSection(section: ICompositionSection): CompositionSectionBuilder {
    if (section?.author?.length) {
      section.author.forEach((author) => {
        if (author.reference)
          ValidateReferenceFormatHelper(author.reference, [
            'Practitioner',
            'PractitionerRole',
            'Device',
            'Patient',
            'RelatedPerson',
            'Organization',
          ]);
      });
    }

    if (section?.entry?.length) {
      section.entry.forEach((entry) => {
        if (entry.reference) ValidateReferenceFormatHelper(entry.reference, 'all');
      });
    }

    if (section?.focus?.reference) ValidateReferenceFormatHelper(section.focus.reference, 'all');

    this._compositionSection.section = this._compositionSection.section || [];
    this._compositionSection.section.push(section);
    return this;
  }

  setCode(code: ICodeableConcept): CompositionSectionBuilder {
    this._compositionSection.code = code;
    return this;
  }

  setEmptyReason(code: ICodeableConcept): CompositionSectionBuilder {
    this._compositionSection.emptyReason = code;
    return this;
  }

  setFocus(reference: IReference): CompositionSectionBuilder {
    if (reference.reference) ValidateReferenceFormatHelper(reference.reference, 'all');
    this._compositionSection.focus = reference;
    return this;
  }

  setMode(mode: CompositionSectionListModeEnum | CompositionSectionListModeType): CompositionSectionBuilder {
    this._compositionSection.mode = mode;
    return this;
  }

  setMultipleAuthors(authors: IReference[]): CompositionSectionBuilder {
    authors.forEach((author) => this.addAuthor(author));
    return this;
  }

  setMultipleEntries(entries: IReference[]): CompositionSectionBuilder {
    entries.forEach((entry) => this.addEntry(entry));
    return this;
  }

  setMultipleSections(sections: ICompositionSection[]): CompositionSectionBuilder {
    sections.forEach((section) => this.addSection(section));
    return this;
  }

  setOrderedBy(code: ICodeableConcept): CompositionSectionBuilder {
    this._compositionSection.orderedBy = code;
    return this;
  }

  setText(text: INarrative): CompositionSectionBuilder {
    this._compositionSection.text = text;
    return this;
  }

  setTitle(title: string): CompositionSectionBuilder {
    this._compositionSection.title = title;
    return this;
  }

  build(): CompositionSection {
    Object.assign(this._compositionSection, { ...super.entity() });
    return new CompositionSection(this._compositionSection).toJson();
  }
}
