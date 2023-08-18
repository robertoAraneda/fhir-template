import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IBuildable } from '../../../globals/interfaces';
import Composition from './Composition';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import IComposition from '../../interfaces/resources/IComposition';
import CompositionStatusEnum from '../../enums/CompositionStatusEnum';
import CompositionStatusType from '../../types/CompositionStatusType';
import IUsageContext from '../../interfaces/datatypes/IUsageContext';
import IAnnotation from '../../interfaces/datatypes/IAnnotation';
import ICompositionAttester from '../../interfaces/backbones/ICompositionAttester';
import IRelatedArtifact from '../../interfaces/datatypes/IRelatedArtifact';
import ICompositionEvent from '../../interfaces/backbones/ICompositionEvent';
import ICompositionSection from '../../interfaces/backbones/ICompositionSection';

type CompositionParamExtension = 'status' | 'title' | 'date' | 'url' | 'version' | 'name';

export interface ICompositionBuilder
  extends IBuildable<Composition>,
    IDomainResourceBuilder<CompositionBuilder>,
    IResourceBuilder<CompositionBuilder> {
  addParamExtension(param: CompositionParamExtension, element: IElement): this;
  setUrl(value: string): this;
  addIdentifier(value: IIdentifier): this;
  setMultipleIdentifiers(values: IIdentifier[]): this;
  setVersion(value: string): this;
  setStatus(value: CompositionStatusEnum | CompositionStatusType): this;
  setType(value: ICodeableConcept): this;
  addCategory(value: ICodeableConcept): this;
  setMultipleCategories(values: ICodeableConcept[]): this;
  addSubject(value: IReference): this;
  setMultipleSubjects(values: IReference[]): this;
  setEncounter(value: IReference): this;
  setDate(value: string): this;
  addUsageContext(value: IUsageContext): this;
  setMultipleUsageContexts(values: IUsageContext[]): this;
  addAuthor(value: IReference): this;
  setMultipleAuthors(values: IReference[]): this;
  setName(value: string): this;
  setTitle(value: string): this;
  addNote(value: IAnnotation): this;
  setMultipleNotes(values: IAnnotation[]): this;
  addAttester(value: ICompositionAttester): this;
  setMultipleAttesters(values: ICompositionAttester[]): this;
  setCustodian(value: IReference): this;
  addRelatesTo(value: IRelatedArtifact): this;
  setMultipleRelatesTo(values: IRelatedArtifact[]): this;
  addEvent(value: ICompositionEvent): this;
  setMultipleEvents(values: ICompositionEvent[]): this;
  addSection(value: ICompositionSection): this;
  setMultipleSections(values: ICompositionSection[]): this;
}

export default class CompositionBuilder
  extends DomainResourceBuilder<CompositionBuilder>
  implements ICompositionBuilder
{
  private readonly _composition: IComposition;

  constructor() {
    super();
    this._composition = {} as IComposition;
  }

  addAttester(value: ICompositionAttester): this {
    this._composition.attester = this._composition.attester || [];
    this._composition.attester.push(value);
    return this;
  }

  addAuthor(value: IReference): this {
    this._composition.author = this._composition.author || [];
    this._composition.author.push(value);
    return this;
  }

  addCategory(value: ICodeableConcept): this {
    this._composition.category = this._composition.category || [];
    this._composition.category.push(value);
    return this;
  }

  addEvent(value: ICompositionEvent): this {
    this._composition.event = this._composition.event || [];
    this._composition.event.push(value);
    return this;
  }

  addParamExtension(param: 'status' | 'title' | 'date', element: IElement): this {
    this._composition[`_${param}`] = element;
    return this;
  }

  addSection(value: ICompositionSection): this {
    this._composition.section = this._composition.section || [];
    this._composition.section.push(value);
    return this;
  }

  build(): Composition {
    Object.assign(this._composition, { ...super.entity() });
    const composition = new Composition(this._composition);

    return composition.toJson();
  }

  setCustodian(value: IReference): this {
    this._composition.custodian = value;
    return this;
  }

  setDate(value: string): this {
    this._composition.date = value;
    return this;
  }

  setEncounter(value: IReference): this {
    this._composition.encounter = value;
    return this;
  }

  setMultipleAttesters(values: ICompositionAttester[]): this {
    this._composition.attester = values;
    return this;
  }

  setMultipleAuthors(values: IReference[]): this {
    this._composition.author = values;
    return this;
  }

  setMultipleCategories(values: ICodeableConcept[]): this {
    this._composition.category = values;
    return this;
  }

  setMultipleEvents(values: ICompositionEvent[]): this {
    this._composition.event = values;
    return this;
  }

  setMultipleSections(values: ICompositionSection[]): this {
    this._composition.section = values;
    return this;
  }

  setStatus(value: CompositionStatusEnum | CompositionStatusType): this {
    this._composition.status = value;
    return this;
  }

  setTitle(value: string): this {
    this._composition.title = value;
    return this;
  }

  setType(value: ICodeableConcept): this {
    this._composition.type = value;
    return this;
  }

  setName(value: string): this {
    this._composition.name = value;
    return this;
  }

  setMultipleNotes(values: IAnnotation[]): this {
    this._composition.note = values;
    return this;
  }

  setMultipleSubjects(values: IReference[]): this {
    this._composition.subject = values;
    return this;
  }

  addUsageContext(value: IUsageContext): this {
    this._composition.useContext = this._composition.useContext || [];
    this._composition.useContext.push(value);
    return this;
  }

  setMultipleUsageContexts(values: IUsageContext[]): this {
    this._composition.useContext = values;
    return this;
  }

  setUrl(value: string): this {
    this._composition.url = value;
    return this;
  }

  setMultipleIdentifiers(values: IIdentifier[]): this {
    this._composition.identifier = values;
    return this;
  }

  addNote(value: IAnnotation): this {
    this._composition.note = this._composition.note || [];
    this._composition.note.push(value);
    return this;
  }

  addSubject(value: IReference): this {
    this._composition.subject = this._composition.subject || [];
    this._composition.subject.push(value);
    return this;
  }

  setVersion(value: string): this {
    this._composition.version = value;
    return this;
  }

  addRelatesTo(value: IRelatedArtifact): this {
    this._composition.relatesTo = this._composition.relatesTo || [];
    this._composition.relatesTo.push(value);
    return this;
  }

  addIdentifier(value: IIdentifier): this {
    this._composition.identifier = this._composition.identifier || [];
    this._composition.identifier.push(value);
    return this;
  }

  setMultipleRelatesTo(values: IRelatedArtifact[]): this {
    this._composition.relatesTo = values;
    return this;
  }
}
