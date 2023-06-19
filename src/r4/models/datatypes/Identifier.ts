import { ICodeableConcept, IExtension, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import { validateReference } from '../../../globals/helpers/validateReference';
import Element from './Element';

/**
 * @description An identifier intended for computation
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {IdentifierUseEnum | IdentifierUseType} use - 	usual | official | temp | secondary | old (If known). Binding: IdentifierUse (Required)
 * @property {ICodeableConcept} type - Description of identifier
 * @property {string} system - The namespace for the identifier value
 * @property {string} value - The value that is unique
 * @property {IPeriod} period - Time period when id is/was valid for use
 * @property {IReference} assigner - Organization that issued id (maybe just text)
 * @property {IElement} _use - Extension of use
 * @property {IElement} _system - Extension of system
 * @property {IElement} _value - Extension of value
 * @see {@link https://www.hl7.org/fhir/datatypes.html#Identifier Identifier}
 * @author Roberto Araneda
 * @example JSON Template for Identifier
 * {
 *   // from Element: extension
 *   "use" : "<code>", // usual | official | temp | secondary | old (If known)
 *   "type" : { CodeableConcept }, // Description of identifier
 *   "system" : "<uri>", // The namespace for the identifier value
 *   "value" : "<string>", // I The value that is unique
 *   "period" : { Period }, // Time period when id is/was valid for use
 *   "assigner" : { Reference(Organization) } // Organization that issued id (may be just text)
 * }
 */
export default class Identifier extends Element implements IIdentifier {
  /**
   * @description usual | official | temp | secondary | old (If known)
   */
  use?: IdentifierUseEnum | IdentifierUseType;

  /**
   * @description Description of identifier
   */
  type?: ICodeableConcept;

  /**
   * @description The namespace for the identifier value
   */
  system?: string;

  /**
   * @description The value that is unique
   */
  value?: string;

  /**
   * @description Time period when id is/was valid for use
   */
  period?: IPeriod;

  /**
   * @description Organization that issued id (may-be just text)
   */
  assigner?: IReference;

  /**
   * @description Extension of use
   */
  _use?: IElement;

  /**
   * @description Extension of system
   */
  _system?: IElement;

  /**
   * @description Extension of value
   */
  _value?: IElement;

  static builder(): IIdentifierBuilder {
    return new IdentifierBuilder();
  }

  constructor(args?: IIdentifier) {
    super();
    Object.assign(this, args);
  }
}

export interface IIdentifierBuilder
  extends IBuildable<IIdentifier>,
    ISerializable,
    IElementBuilder<IIdentifierBuilder> {
  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder;
  setType(value: ICodeableConcept): IdentifierBuilder;
  setUse(value: IdentifierUseEnum | IdentifierUseType): IdentifierBuilder;
  setSystem(value: string): IdentifierBuilder;
  setValue(value: string): IdentifierBuilder;
  setPeriod(value: IPeriod): IdentifierBuilder;
  setAssigner(value: IReference): IdentifierBuilder;
}

class IdentifierBuilder extends ElementBuilder<IdentifierBuilder> implements IIdentifierBuilder {
  private readonly identifier: IIdentifier;

  constructor() {
    super();

    this.identifier = {} as IIdentifier;
  }

  addParamExtension(param: 'use' | 'system' | 'value', extension: IElement): IdentifierBuilder {
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

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IIdentifier {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IIdentifier {
    return {
      ...this.identifier,
      ...super.entity(),
    };
  }
}
