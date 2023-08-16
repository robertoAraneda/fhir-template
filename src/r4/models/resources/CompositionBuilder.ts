import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IBuildable } from '../../../globals/interfaces';
import Composition from './Composition';
import {
  ICompositionAttester,
  ICompositionEvent,
  ICompositionRelatesTo,
  ICompositionSection,
} from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { CompositionStatusEnum } from '../../../enums';
import { CompositionStatusType } from '../../../types';
import { IElement } from '../../interfaces/base';
import CompositionSection from '../backbones/CompositionSection';
import IComposition from '../../interfaces/resources/IComposition';
import CompositionConfidentialityEnum from '../../../enums/CompositionConfidentialityEnum';
import CompositionConfidentialityType from '../../../types/CompositionConfidentialityType';

export interface ICompositionBuilder
  extends IBuildable<Composition>,
    IDomainResourceBuilder<CompositionBuilder>,
    IResourceBuilder<CompositionBuilder> {
  addParamExtension(param: 'status' | 'title' | 'date', element: IElement): this;
  addAttester(value: ICompositionAttester): this;
  setMultipleAttesters(values: ICompositionAttester[]): this;
  addAuthor(value: IReference): this;
  setMultipleAuthors(values: IReference[]): this;
  addCategory(value: ICodeableConcept): this;
  setMultipleCategories(values: ICodeableConcept[]): this;
  setConfidentiality(value: CompositionConfidentialityEnum | CompositionConfidentialityType): this;
  setCustodian(value: IReference): this;
  setDate(value: string): this;
  setEncounter(value: IReference): this;
  addEvent(value: ICompositionEvent): this;
  setMultipleEvents(values: ICompositionEvent[]): this;
  setIdentifier(value: IIdentifier): this;
  addRelatesTo(value: ICompositionRelatesTo): this;
  setMultipleRelatesTo(values: ICompositionRelatesTo[]): this;
  addSection(value: ICompositionSection): this;
  setMultipleSections(values: ICompositionSection[]): this;
  setStatus(value: CompositionStatusEnum | CompositionStatusType): this;
  setSubject(value: IReference): this;
  setTitle(value: string): this;
  setType(value: ICodeableConcept): this;
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

  addRelatesTo(value: ICompositionRelatesTo): this {
    this._composition.relatesTo = this._composition.relatesTo || [];
    this._composition.relatesTo.push(value);
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

  setConfidentiality(value: CompositionConfidentialityEnum | CompositionConfidentialityType): this {
    this._composition.confidentiality = value;
    return this;
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

  setIdentifier(value: IIdentifier): this {
    this._composition.identifier = value;
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

  setMultipleRelatesTo(values: ICompositionRelatesTo[]): this {
    this._composition.relatesTo = values;
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

  setSubject(value: IReference): this {
    this._composition.subject = value;
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
}
