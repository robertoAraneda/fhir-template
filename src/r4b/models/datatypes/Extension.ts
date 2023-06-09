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
} from '../../interfaces/datatypes';
import { IElement, IReference } from '../../interfaces/base';

export class Extension implements IExtension {
  id?: string;
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
  extension?: IExtension[];

  constructor(args?: IExtension) {
    Object.assign(this, args);
  }
}
