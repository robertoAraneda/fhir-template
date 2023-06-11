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
  IReference,
} from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class Extension implements IExtension {
  id?: string;
  extension?: IExtension[];

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

  constructor(args?: IExtension) {
    Object.assign(this, args);
  }
}
