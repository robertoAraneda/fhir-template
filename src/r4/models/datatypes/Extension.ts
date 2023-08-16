import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IDuration,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
  ISignature,
} from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { ExtensionBuilder } from './ExtensionBuilder';
import { extensionAttributes, ExtensionValidator } from './ExtensionValidator';

export default class Extension extends Element implements IExtension {
  url: string;

  valueAddress?: IAddress;
  valueAttachment?: IAttachment;
  valueBase64Binary?: string;
  valueBoolean?: boolean;
  valueCanonical?: string;
  valueCode?: string;
  valueCodeableConcept?: ICodeableConcept;
  valueCoding?: ICoding;
  valueContactPoint?: IContactPoint;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueId?: string;
  valueIdentifier?: IIdentifier;
  valueInstant?: string;
  valueInteger?: number;
  valueMarkdown?: string;
  valueOid?: string;
  valuePeriod?: IPeriod;
  valuePositiveInt?: number;
  valueQuantity?: IQuantity;
  valueString?: string;
  valueTime?: string;
  valueUnsignedInt?: number;
  valueUri?: string;
  valueUrl?: string;
  valueUuid?: string;
  valueDuration?: IDuration;
  valueHumanName?: IHumanName;
  valueMeta?: IMeta;
  valueReference?: IReference;
  valueRange?: IRange;
  valueSignature?: ISignature;

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
  _valueMarkdown?: IElement;
  _valueOid?: IElement;
  _valuePositiveInt?: IElement;
  _valueString?: IElement;
  _valueTime?: IElement;
  _valueUnsignedInt?: IElement;
  _valueUri?: IElement;
  _valueUrl?: IElement;
  _valueUuid?: IElement;

  toJson(): Extension {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Extension${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Extension${JSON.stringify(this.toJson())}`;
  }

  static builder(): ExtensionBuilder {
    return new ExtensionBuilder();
  }

  static getAttributes(): readonly string[] {
    return extensionAttributes;
  }

  constructor(args: IExtension) {
    super();
    ExtensionValidator(args);
    Object.assign(this, args);
  }
}
