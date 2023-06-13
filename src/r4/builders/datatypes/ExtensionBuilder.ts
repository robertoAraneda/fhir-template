import { ElementBuilder } from '../base/ElementBuilder';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
  IReference,
} from '../../interfaces/datatypes';
import { Extension } from '../../models/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { createBuildAndSerializeMethods } from '../../../globals/helpers/buildAndSerialize';

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

type BuildAndSerialize = Pick<IExtensionBuilder, 'serialize' | 'build'>;
interface IExtensionBuilder extends IBuildable<IExtension>, ISerializable {
  addParamExtension(param: ExtensionParamType, extension: IExtension): BuildAndSerialize;
  setUrl(url: string): ExtensionBuilder;
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

export default class ExtensionBuilder extends ElementBuilder<ExtensionBuilder> implements IExtensionBuilder {
  private readonly extension: IExtension;

  constructor() {
    super();
    this.extension = new Extension();
  }

  addParamExtension(param: ExtensionParamType, extension: IExtension): ExtensionBuilder {
    this.extension[`_${param}`] = extension;
    return this;
  }

  setUrl(url: string): ExtensionBuilder {
    this.extension.url = url;
    return this;
  }

  setValueAddress(valueAddress: IAddress): BuildAndSerialize {
    this.extension.valueAddress = valueAddress;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueAttachment(valueAttachment: IAttachment): BuildAndSerialize {
    this.extension.valueAttachment = valueAttachment;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueBase64Binary(valueBase64Binary: string): BuildAndSerialize {
    this.extension.valueBase64Binary = valueBase64Binary;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueBoolean(valueBoolean: boolean): BuildAndSerialize {
    this.extension.valueBoolean = valueBoolean;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCanonical(valueCanonical: string): BuildAndSerialize {
    this.extension.valueCanonical = valueCanonical;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCode(valueCode: string): BuildAndSerialize {
    this.extension.valueCode = valueCode;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): BuildAndSerialize {
    this.extension.valueCodeableConcept = valueCodeableConcept;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCoding(valueCoding: ICoding): BuildAndSerialize {
    this.extension.valueCoding = valueCoding;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueContactPoint(valueContactPoint: IContactPoint): BuildAndSerialize {
    this.extension.valueContactPoint = valueContactPoint;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueDate(valueDate: string): BuildAndSerialize {
    this.extension.valueDate = valueDate;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueDateTime(valueDateTime: string): BuildAndSerialize {
    this.extension.valueDateTime = valueDateTime;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueDecimal(valueDecimal: number): BuildAndSerialize {
    this.extension.valueDecimal = valueDecimal;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueId(valueId: string): BuildAndSerialize {
    this.extension.valueId = valueId;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueIdentifier(valueIdentifier: IIdentifier): BuildAndSerialize {
    this.extension.valueIdentifier = valueIdentifier;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueInstant(valueInstant: string): BuildAndSerialize {
    this.extension.valueInstant = valueInstant;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueInteger(valueInteger: number): BuildAndSerialize {
    this.extension.valueInteger = valueInteger;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueMarkdown(valueMarkdown: string): BuildAndSerialize {
    this.extension.valueMarkdown = valueMarkdown;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueOid(valueOid: string): BuildAndSerialize {
    this.extension.valueOid = valueOid;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValuePeriod(valuePeriod: IPeriod): BuildAndSerialize {
    this.extension.valuePeriod = valuePeriod;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValuePositiveInt(valuePositiveInt: number): BuildAndSerialize {
    this.extension.valuePositiveInt = valuePositiveInt;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueQuantity(valueQuantity: IQuantity): BuildAndSerialize {
    this.extension.valueQuantity = valueQuantity;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueReference(valueReference: IReference): BuildAndSerialize {
    this.extension.valueReference = valueReference;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueString(valueString: string): BuildAndSerialize {
    this.extension.valueString = valueString;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueTime(valueTime: string): BuildAndSerialize {
    this.extension.valueTime = valueTime;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUnsignedInt(valueUnsignedInt: number): BuildAndSerialize {
    this.extension.valueUnsignedInt = valueUnsignedInt;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUri(valueUri: string): BuildAndSerialize {
    this.extension.valueUri = valueUri;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUrl(valueUrl: string): BuildAndSerialize {
    this.extension.valueUrl = valueUrl;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUuid(valueUuid: string): BuildAndSerialize {
    this.extension.valueUuid = valueUuid;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueHumanName(valueHumanName: IHumanName): BuildAndSerialize {
    this.extension.valueHumanName = valueHumanName;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueMeta(valueMeta: IMeta): BuildAndSerialize {
    this.extension.valueMeta = valueMeta;
    return createBuildAndSerializeMethods(this.raw());
  }

  build(): IExtension {
    return JSON.parse(this.serialize());
  }

  raw(): IExtension {
    return {
      ...this.extension,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }
}
