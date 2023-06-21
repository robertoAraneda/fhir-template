import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICodeableReference,
  ICoding,
  IContactPoint,
  IExtension,
  IIdentifier,
  IPeriod,
  IQuantity,
  IReference,
} from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import ExtensionBuilder from './ExtensionBuilder';

export default class Extension extends Element implements IExtension {
  url: string;

  valueAddress?: IAddress;
  valueAttachment?: IAttachment;
  valueBase64Binary?: string;
  valueBoolean?: boolean;
  valueCanonical?: string;
  valueCode?: string;
  valueCodeableConcept?: ICodeableConcept;
  valueCodeableReference?: ICodeableReference;
  valueCoding?: ICoding;
  valueContactPoint?: IContactPoint;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueId?: string;
  valueIdentifier?: IIdentifier;
  valueInstant?: string;
  valueInteger?: number;
  valueInteger64?: number;
  valueMarkdown?: string;
  valueOid?: string;
  valuePeriod?: IPeriod;
  valuePositiveInt?: number;
  valueQuantity?: IQuantity;
  valueReference?: IReference;
  valueString?: string;
  valueTime?: string;
  valueUnsignedInt?: number;
  valueUri?: string;
  valueUrl?: string;
  valueUuid?: string;

  // Extensions for url
  _url?: IElement;
  _valueBase64Binary?: IElement;
  _valueBoolean?: IElement;
  _valueCanonical?: IElement;
  _valueCode?: IElement;
  _valueDate?: IElement;
  _valueDateTime?: IElement;
  _valueDecimal?: IElement;
  _valueId?: IElement;
  _valueInstant?: IElement;
  _valueInteger?: IElement;
  _valueInteger64?: IElement;
  _valueMarkdown?: IElement;
  _valueOid?: IElement;
  _valuePositiveInt?: IElement;
  _valueString?: IElement;
  _valueTime?: IElement;
  _valueUnsignedInt?: IElement;
  _valueUri?: IElement;
  _valueUrl?: IElement;
  _valueUuid?: IElement;

  static builder(): ExtensionBuilder {
    return new ExtensionBuilder();
  }

  toJson(): Extension {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `ExtendedContactDetail${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `ExtendedContactDetail${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IExtension) {
    super();
    Object.assign(this, args);
  }
}
