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
import { CompositionStatusEnum } from '../../enums';
import { CompositionStatusType } from '../../types';
import { IElement } from '../../interfaces/base';
import CompositionSection from '../backbones/CompositionSection';
import IComposition from '../../interfaces/resources/IComposition';
import CompositionConfidentialityEnum from '../../enums/CompositionConfidentialityEnum';
import CompositionConfidentialityType from '../../types/CompositionConfidentialityType';

export interface ICompositionBuilder
  extends IBuildable<Composition>,
    IDomainResourceBuilder<CompositionBuilder>,
    IResourceBuilder<CompositionBuilder> {
  addParamExtension(param: 'status' | 'title' | 'date', element: IElement): CompositionBuilder;
  addAttester(value: ICompositionAttester): CompositionBuilder;
  setMultipleAttesters(values: ICompositionAttester[]): CompositionBuilder;
  addAuthor(value: IReference): CompositionBuilder;
  setMultipleAuthors(values: IReference[]): CompositionBuilder;
  addCategory(value: ICodeableConcept): CompositionBuilder;
  setMultipleCategories(values: ICodeableConcept[]): CompositionBuilder;
  setConfidentiality(value: CompositionConfidentialityEnum | CompositionConfidentialityType): CompositionBuilder;
  setCustodian(value: IReference): CompositionBuilder;
  setDate(value: string): CompositionBuilder;
  setEncounter(value: IReference): CompositionBuilder;
  addEvent(value: ICompositionEvent): CompositionBuilder;
  setMultipleEvents(values: ICompositionEvent[]): CompositionBuilder;
  setIdentifier(value: IIdentifier): CompositionBuilder;
  addRelatesTo(value: ICompositionRelatesTo): CompositionBuilder;
  setMultipleRelatesTo(values: ICompositionRelatesTo[]): CompositionBuilder;
  addSection(value: ICompositionSection): CompositionBuilder;
  setMultipleSections(values: ICompositionSection[]): CompositionBuilder;
  setStatus(value: CompositionStatusEnum | CompositionStatusType): CompositionBuilder;
  setSubject(value: IReference): CompositionBuilder;
  setTitle(value: string): CompositionBuilder;
  setType(value: ICodeableConcept): CompositionBuilder;
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

  addAttester(value: ICompositionAttester): CompositionBuilder {
    this._composition.attester = this._composition.attester || [];
    this._composition.attester.push(value);
    return this;
  }

  addAuthor(value: IReference): CompositionBuilder {
    this._composition.author = this._composition.author || [];
    this._composition.author.push(value);
    return this;
  }

  addCategory(value: ICodeableConcept): CompositionBuilder {
    this._composition.category = this._composition.category || [];
    this._composition.category.push(value);
    return this;
  }

  addEvent(value: ICompositionEvent): CompositionBuilder {
    this._composition.event = this._composition.event || [];
    this._composition.event.push(value);
    return this;
  }

  addParamExtension(param: 'status' | 'title' | 'date', element: IElement): CompositionBuilder {
    this._composition[`_${param}`] = element;
    return this;
  }

  addRelatesTo(value: ICompositionRelatesTo): CompositionBuilder {
    this._composition.relatesTo = this._composition.relatesTo || [];
    this._composition.relatesTo.push(value);
    return this;
  }

  addSection(value: ICompositionSection): CompositionBuilder {
    CompositionSection.validate(value);

    this._composition.section = this._composition.section || [];
    this._composition.section.push(value);
    return this;
  }

  build(): Composition {
    Object.assign(this._composition, { ...super.entity() });
    const composition = new Composition(this._composition);

    return composition.toJson();
  }

  setConfidentiality(value: CompositionConfidentialityEnum | CompositionConfidentialityType): CompositionBuilder {
    this._composition.confidentiality = value;
    return this;
  }

  setCustodian(value: IReference): CompositionBuilder {
    this._composition.custodian = value;
    return this;
  }

  setDate(value: string): CompositionBuilder {
    this._composition.date = value;
    return this;
  }

  setEncounter(value: IReference): CompositionBuilder {
    this._composition.encounter = value;
    return this;
  }

  setIdentifier(value: IIdentifier): CompositionBuilder {
    this._composition.identifier = value;
    return this;
  }

  setMultipleAttesters(values: ICompositionAttester[]): CompositionBuilder {
    this._composition.attester = values;
    return this;
  }

  setMultipleAuthors(values: IReference[]): CompositionBuilder {
    this._composition.author = values;
    return this;
  }

  setMultipleCategories(values: ICodeableConcept[]): CompositionBuilder {
    this._composition.category = values;
    return this;
  }

  setMultipleEvents(values: ICompositionEvent[]): CompositionBuilder {
    this._composition.event = values;
    return this;
  }

  setMultipleRelatesTo(values: ICompositionRelatesTo[]): CompositionBuilder {
    this._composition.relatesTo = values;
    return this;
  }

  setMultipleSections(values: ICompositionSection[]): CompositionBuilder {
    this._composition.section = values;
    return this;
  }

  setStatus(value: CompositionStatusEnum | CompositionStatusType): CompositionBuilder {
    this._composition.status = value;
    return this;
  }

  setSubject(value: IReference): CompositionBuilder {
    this._composition.subject = value;
    return this;
  }

  setTitle(value: string): CompositionBuilder {
    this._composition.title = value;
    return this;
  }

  setType(value: ICodeableConcept): CompositionBuilder {
    this._composition.type = value;
    return this;
  }
}
