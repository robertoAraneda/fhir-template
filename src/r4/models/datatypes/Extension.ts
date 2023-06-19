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
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import { createBuildAndSerializeMethods } from '../../../globals/helpers/buildAndSerialize';
import Element from './Element';

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

  static builder(): IExtensionBuilder {
    return new ExtensionBuilder();
  }

  constructor(args?: IExtension) {
    super();
    Object.assign(this, args);
  }
}

type ExtensionParamType =
  | 'valueId'
  | 'valueBoolean'
  | 'valueCanonical'
  | 'valueCode'
  | 'valueDate'
  | 'valueDateTime'
  | 'valueDecimal'
  | 'valueInstant'
  | 'valueInteger'
  | 'valueMarkdown'
  | 'valueOid'
  | 'valuePositiveInt'
  | 'valueString'
  | 'valueTime'
  | 'valueUnsignedInt'
  | 'valueUri'
  | 'valueUrl'
  | 'valueUuid';

type BuildAndSerialize = Pick<IExtensionBuilder, 'buildAsString' | 'build'>;
export interface IExtensionBuilder extends IBuildable<IExtension>, ISerializable, IElementBuilder<IExtensionBuilder> {
  addParamExtension(param: ExtensionParamType, extension: IElement): BuildAndSerialize;
  setUrl(url: string): this;
  setValueId(valueId: string): BuildAndSerialize;
  setValueAddress(valueAddress: IAddress): BuildAndSerialize;
  setValueAttachment(valueAttachment: IAttachment): BuildAndSerialize;
  setValueBoolean(valueBoolean: boolean): BuildAndSerialize;
  setValueCanonical(valueCanonical: string): BuildAndSerialize;
  setValueCode(valueCode: string): BuildAndSerialize;
  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): BuildAndSerialize;
  setValueCoding(valueCoding: ICoding): BuildAndSerialize;
  setValueContactPoint(valueContactPoint: IContactPoint): BuildAndSerialize;
  setValueDate(valueDate: string): BuildAndSerialize;
  setValueDateTime(valueDateTime: string): BuildAndSerialize;
  setValueDecimal(valueDecimal: number): BuildAndSerialize;
  setValueIdentifier(valueIdentifier: IIdentifier): BuildAndSerialize;
  setValueInstant(valueInstant: string): BuildAndSerialize;
  setValueInteger(valueInteger: number): BuildAndSerialize;
  setValueMarkdown(valueMarkdown: string): BuildAndSerialize;
  setValueString(valueString: string): BuildAndSerialize;
  setValueTime(valueTime: string): BuildAndSerialize;
  setValueUnsignedInt(valueUnsignedInt: number): BuildAndSerialize;
  setValueUri(valueUri: string): BuildAndSerialize;
  setValueUrl(valueUrl: string): BuildAndSerialize;
  setValueUuid(valueUuid: string): BuildAndSerialize;
  setValueOid(valueOid: string): BuildAndSerialize;
  setValuePeriod(valuePeriod: IPeriod): BuildAndSerialize;
  setValuePositiveInt(valuePositiveInt: number): BuildAndSerialize;
  setValueQuantity(valueQuantity: IQuantity): BuildAndSerialize;
  setValueReference(valueReference: IReference): BuildAndSerialize;
  setValueMeta(valueMeta: IMeta): BuildAndSerialize;
  setValueHumanName(valueHumanName: IHumanName): BuildAndSerialize;
}

class ExtensionBuilder extends ElementBuilder<ExtensionBuilder> implements IExtensionBuilder {
  private readonly extension: IExtension;

  constructor() {
    super();
    this.extension = {} as IExtension;
  }

  addParamExtension(param: ExtensionParamType, extension: IElement): BuildAndSerialize {
    this.extension[`_${param}`] = extension;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setUrl(url: string): this {
    this.extension.url = url;
    return this;
  }

  setValueAddress(valueAddress: IAddress): BuildAndSerialize {
    this.extension.valueAddress = valueAddress;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueAttachment(valueAttachment: IAttachment): BuildAndSerialize {
    this.extension.valueAttachment = valueAttachment;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueBase64Binary(valueBase64Binary: string): BuildAndSerialize {
    this.extension.valueBase64Binary = valueBase64Binary;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueBoolean(valueBoolean: boolean): BuildAndSerialize {
    this.extension.valueBoolean = valueBoolean;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueCanonical(valueCanonical: string): BuildAndSerialize {
    this.extension.valueCanonical = valueCanonical;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueCode(valueCode: string): BuildAndSerialize {
    this.extension.valueCode = valueCode;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): BuildAndSerialize {
    this.extension.valueCodeableConcept = valueCodeableConcept;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueCoding(valueCoding: ICoding): BuildAndSerialize {
    this.extension.valueCoding = valueCoding;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueContactPoint(valueContactPoint: IContactPoint): BuildAndSerialize {
    this.extension.valueContactPoint = valueContactPoint;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueDate(valueDate: string): BuildAndSerialize {
    this.extension.valueDate = valueDate;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueDateTime(valueDateTime: string): BuildAndSerialize {
    this.extension.valueDateTime = valueDateTime;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueDecimal(valueDecimal: number): BuildAndSerialize {
    this.extension.valueDecimal = valueDecimal;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueId(valueId: string): BuildAndSerialize {
    this.extension.valueId = valueId;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueIdentifier(valueIdentifier: IIdentifier): BuildAndSerialize {
    this.extension.valueIdentifier = valueIdentifier;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueInstant(valueInstant: string): BuildAndSerialize {
    this.extension.valueInstant = valueInstant;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueInteger(valueInteger: number): BuildAndSerialize {
    this.extension.valueInteger = valueInteger;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueMarkdown(valueMarkdown: string): BuildAndSerialize {
    this.extension.valueMarkdown = valueMarkdown;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueOid(valueOid: string): BuildAndSerialize {
    this.extension.valueOid = valueOid;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValuePeriod(valuePeriod: IPeriod): BuildAndSerialize {
    this.extension.valuePeriod = valuePeriod;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValuePositiveInt(valuePositiveInt: number): BuildAndSerialize {
    this.extension.valuePositiveInt = valuePositiveInt;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueQuantity(valueQuantity: IQuantity): BuildAndSerialize {
    this.extension.valueQuantity = valueQuantity;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueReference(valueReference: IReference): BuildAndSerialize {
    this.extension.valueReference = valueReference;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueString(valueString: string): BuildAndSerialize {
    this.extension.valueString = valueString;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueTime(valueTime: string): BuildAndSerialize {
    this.extension.valueTime = valueTime;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueUnsignedInt(valueUnsignedInt: number): BuildAndSerialize {
    this.extension.valueUnsignedInt = valueUnsignedInt;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueUri(valueUri: string): BuildAndSerialize {
    this.extension.valueUri = valueUri;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueUrl(valueUrl: string): BuildAndSerialize {
    this.extension.valueUrl = valueUrl;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueUuid(valueUuid: string): BuildAndSerialize {
    this.extension.valueUuid = valueUuid;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueHumanName(valueHumanName: IHumanName): BuildAndSerialize {
    this.extension.valueHumanName = valueHumanName;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  setValueMeta(valueMeta: IMeta): BuildAndSerialize {
    this.extension.valueMeta = valueMeta;
    return createBuildAndSerializeMethods(this.compileAsDefault());
  }

  build(): IExtension {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IExtension {
    return {
      ...this.extension,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }
}
