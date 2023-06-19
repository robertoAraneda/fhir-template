import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IPatientCommunication } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';

export interface IPatientCommunicationBuilder
  extends IBuildable<IPatientCommunication>,
    ISerializable,
    IBackboneElementBuilder<IPatientCommunicationBuilder>,
    IElementBuilder<IPatientCommunicationBuilder> {
  addParamExtension(param: 'preferred', extension: IElement): this;

  setLanguage(language: ICodeableConcept): this;

  setPreferred(preferred: boolean): this;
}

export class PatientCommunicationBuilder
  extends BackboneElementBuilder<PatientCommunicationBuilder>
  implements IPatientCommunicationBuilder
{
  private readonly patientCommunication: IPatientCommunication;

  constructor() {
    super();
    this.patientCommunication = {} as IPatientCommunication;
  }

  addParamExtension(param: 'preferred', extension: IElement): this {
    this.patientCommunication[`_${param}`] = extension;
    return this;
  }

  setLanguage(language: ICodeableConcept): this {
    this.patientCommunication.language = language;
    return this;
  }

  setPreferred(preferred: boolean): this {
    this.patientCommunication.preferred = preferred;
    return this;
  }

  build(): IPatientCommunication {
    return JSON.parse(this.buildAsString());
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
  }

  compileAsDefault(): IPatientCommunication {
    return {
      ...this.patientCommunication,
      ...super.entity(),
    };
  }
}
