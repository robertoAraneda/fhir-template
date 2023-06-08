import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, IReference, ISerializable } from '../../interfaces/base';
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
import { Extension } from '../../models/datatypes/Extension';
import { BuildAndSerialize, createBuildAndSerializeMethods } from '../../helpers/buildAndSerialize';

export class ExtensionBuilder
  extends ElementBuilder<ExtensionBuilder>
  implements IBuildable<IExtension>, ISerializable
{
  private extension: IExtension;

  constructor() {
    super();
    this.extension = new Extension();
  }

  fromJSON(json: any): BuildAndSerialize<IExtension> {
    this.extension = json;

    return createBuildAndSerializeMethods(this.raw());
  }

  setUrl(url: string): ExtensionBuilder {
    this.extension.url = url;
    return this;
  }

  setValueAddress(valueAddress: IAddress): BuildAndSerialize<IExtension> {
    this.extension.valueAddress = valueAddress;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueAttachment(valueAttachment: IAttachment): BuildAndSerialize<IExtension> {
    this.extension.valueAttachment = valueAttachment;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueBase64Binary(valueBase64Binary: string): BuildAndSerialize<IExtension> {
    this.extension.valueBase64Binary = valueBase64Binary;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueBoolean(valueBoolean: boolean): BuildAndSerialize<IExtension> {
    this.extension.valueBoolean = valueBoolean;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCanonical(valueCanonical: string): BuildAndSerialize<IExtension> {
    this.extension.valueCanonical = valueCanonical;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCode(valueCode: string): BuildAndSerialize<IExtension> {
    this.extension.valueCode = valueCode;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): BuildAndSerialize<IExtension> {
    this.extension.valueCodeableConcept = valueCodeableConcept;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCodeableReference(valueCodeableReference: ICodeableReference): BuildAndSerialize<IExtension> {
    this.extension.valueCodeableReference = valueCodeableReference;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueCoding(valueCoding: ICoding): BuildAndSerialize<IExtension> {
    this.extension.valueCoding = valueCoding;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueContactPoint(valueContactPoint: IContactPoint): BuildAndSerialize<IExtension> {
    this.extension.valueContactPoint = valueContactPoint;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueDate(valueDate: string): BuildAndSerialize<IExtension> {
    this.extension.valueDate = valueDate;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueDateTime(valueDateTime: string): BuildAndSerialize<IExtension> {
    this.extension.valueDateTime = valueDateTime;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueDecimal(valueDecimal: number): BuildAndSerialize<IExtension> {
    this.extension.valueDecimal = valueDecimal;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueId(valueId: string): BuildAndSerialize<IExtension> {
    this.extension.valueId = valueId;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueIdentifier(valueIdentifier: IIdentifier): BuildAndSerialize<IExtension> {
    this.extension.valueIdentifier = valueIdentifier;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueInstant(valueInstant: string): BuildAndSerialize<IExtension> {
    this.extension.valueInstant = valueInstant;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueInteger(valueInteger: number): BuildAndSerialize<IExtension> {
    this.extension.valueInteger = valueInteger;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueInteger64(valueInteger64: number): BuildAndSerialize<IExtension> {
    this.extension.valueInteger64 = valueInteger64;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueMarkdown(valueMarkdown: string): BuildAndSerialize<IExtension> {
    this.extension.valueMarkdown = valueMarkdown;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueOid(valueOid: string): BuildAndSerialize<IExtension> {
    this.extension.valueOid = valueOid;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValuePeriod(valuePeriod: IPeriod): BuildAndSerialize<IExtension> {
    this.extension.valuePeriod = valuePeriod;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValuePositiveInt(valuePositiveInt: number): BuildAndSerialize<IExtension> {
    this.extension.valuePositiveInt = valuePositiveInt;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueQuantity(valueQuantity: IQuantity): BuildAndSerialize<IExtension> {
    this.extension.valueQuantity = valueQuantity;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueReference(valueReference: IReference): BuildAndSerialize<IExtension> {
    this.extension.valueReference = valueReference;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueString(valueString: string): BuildAndSerialize<IExtension> {
    this.extension.valueString = valueString;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueTime(valueTime: string): BuildAndSerialize<IExtension> {
    this.extension.valueTime = valueTime;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUnsignedInt(valueUnsignedInt: number): BuildAndSerialize<IExtension> {
    this.extension.valueUnsignedInt = valueUnsignedInt;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUri(valueUri: string): BuildAndSerialize<IExtension> {
    this.extension.valueUri = valueUri;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUrl(valueUrl: string): BuildAndSerialize<IExtension> {
    this.extension.valueUrl = valueUrl;
    return createBuildAndSerializeMethods(this.raw());
  }

  setValueUuid(valueUuid: string): BuildAndSerialize<IExtension> {
    this.extension.valueUuid = valueUuid;
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
