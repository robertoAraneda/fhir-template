import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import CompositionAttester from './CompositionAttester';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import { ICodeableConcept, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import ICompositionAttester from '../../interfaces/backbones/ICompositionAttester';

export interface ICompositionAttesterBuilder
  extends IBuildable<CompositionAttester>,
    IBackboneElementBuilder<CompositionAttesterBuilder>,
    IElementBuilder<CompositionAttesterBuilder> {
  addParamExtension<T extends 'time'>(param: T, extension: IElement): this;
  setMode(mode: ICodeableConcept): this;
  setParty(party: IReference): this;
  setTime(time: string): this;
}

export default class CompositionAttesterBuilder
  extends BackboneElementBuilder<CompositionAttesterBuilder>
  implements ICompositionAttesterBuilder
{
  private readonly compositionAttester: ICompositionAttester;

  constructor() {
    super();
    this.compositionAttester = {} as ICompositionAttester;
  }

  addParamExtension<T extends 'time'>(param: T, extension: IElement): this {
    this.compositionAttester[`_${param}`] = extension;
    return this;
  }

  setMode(mode: ICodeableConcept): this {
    this.compositionAttester.mode = mode;
    return this;
  }

  setParty(party: IReference): this {
    this.compositionAttester.party = party;
    return this;
  }

  setTime(time: string): this {
    this.compositionAttester.time = time;
    return this;
  }

  build(): CompositionAttester {
    Object.assign(this.compositionAttester, { ...super.entity() });
    return new CompositionAttester(this.compositionAttester).toJson();
  }
}
