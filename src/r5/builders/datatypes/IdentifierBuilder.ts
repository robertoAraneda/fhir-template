import { IdentifierUseEnum } from '../../enums/IdentifierUseEnum';
import { IdentifierUseType } from '../../types/IdentifierUseType';
import { IIdentifier, ICodeableConcept, IPeriod } from '../../interfaces/datatypes';
import { IElement, ISerializable, IBuildable, IReference } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { validateReference } from '../../helpers/validateReference';

export class IdentifierBuilder
  extends ElementBuilder<IdentifierBuilder>
  implements IBuildable<IIdentifier>, ISerializable
{
  private readonly identifier: IIdentifier;

  constructor() {
    super();

    this.identifier = {} as IIdentifier;
  }

  addIdentifierParamExtension(param: 'use' | 'system' | 'value', extension: Element): IdentifierBuilder {
    this.identifier[`_${param}`] = extension;

    return this;
  }

  setType(value: ICodeableConcept): IdentifierBuilder {
    this.identifier.type = value;

    return this;
  }

  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder {
    this.identifier.use = value;

    return this;
  }

  setSystem(value: string): IdentifierBuilder {
    this.identifier.system = value;

    return this;
  }

  setValue(value: string): IdentifierBuilder {
    this.identifier.value = value;

    return this;
  }

  setPeriod(value: IPeriod): IdentifierBuilder {
    this.identifier.period = value;

    return this;
  }

  setAssigner(value: IReference): IdentifierBuilder {
    if (value.reference) {
      validateReference(value.reference, ['Organization']);
    }

    this.identifier.assigner = value;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IIdentifier {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): IIdentifier {
    return {
      ...this.identifier,
      ...super.entity(),
    };
  }
}
