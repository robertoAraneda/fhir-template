import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import CompositionAttester from './CompositionAttester';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import { CompositionAttestationModeEnum } from '../../enums';
import { CompositionAttestationModeType } from '../../types';
import { IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { ICompositionAttester } from '../../interfaces/backbones';

export interface ICompositionAttesterBuilder
  extends IBuildable<CompositionAttester>,
    IBackboneElementBuilder<CompositionAttesterBuilder>,
    IElementBuilder<CompositionAttesterBuilder> {
  addParamExtension<T extends 'time' | 'mode'>(param: T, extension: IElement): CompositionAttesterBuilder;
  setMode(mode: CompositionAttestationModeEnum | CompositionAttestationModeType): CompositionAttesterBuilder;
  setParty(party: IReference): CompositionAttesterBuilder;
  setTime(time: string): CompositionAttesterBuilder;
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

  addParamExtension<T extends 'time' | 'mode'>(param: T, extension: IElement): CompositionAttesterBuilder {
    this.compositionAttester[`_${param}`] = extension;
    return this;
  }

  setMode(mode: CompositionAttestationModeEnum | CompositionAttestationModeType): CompositionAttesterBuilder {
    this.compositionAttester.mode = mode;
    return this;
  }

  setParty(party: IReference): CompositionAttesterBuilder {
    this.compositionAttester.party = party;
    return this;
  }

  setTime(time: string): CompositionAttesterBuilder {
    this.compositionAttester.time = time;
    return this;
  }

  build(): CompositionAttester {
    Object.assign(this.compositionAttester, { ...super.entity() });

    return new CompositionAttester(this.compositionAttester).toJson();
  }
}
