import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
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
import { Extension } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../../r4/interfaces/base';

type ParamExtensionType =
  | 'valueId'
  | 'valueBase64Binary'
  | 'valueBoolean'
  | 'valueCanonical'
  | 'valueCode'
  | 'valueDate'
  | 'valueDateTime'
  | 'valueDecimal'
  | 'valueInstant'
  | 'valueInteger'
  | 'valueInteger64'
  | 'valueMarkdown'
  | 'valueOid'
  | 'valuePositiveInt'
  | 'valueString'
  | 'valueTime'
  | 'valueUnsignedInt'
  | 'valueUri'
  | 'valueUrl'
  | 'valueUuid';

type Build = { build: () => Extension };
interface IExtensionBuilder extends IBuildable<Extension>, IElementBuilder<ExtensionBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): Build;
  setUrl(url: string): this;
  setValueId(valueId: string): Build;
  setValueAddress(valueAddress: IAddress): Build;
  setValueAttachment(valueAttachment: IAttachment): Build;
  setValueBase64Binary(valueBase64Binary: string): Build;
  setValueBoolean(valueBoolean: boolean): Build;
  setValueCanonical(valueCanonical: string): Build;
  setValueCode(valueCode: string): Build;
  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): Build;
  setValueCodeableReference(valueCodeableReference: ICodeableReference): Build;
  setValueCoding(valueCoding: ICoding): Build;
  setValueContactPoint(valueContactPoint: IContactPoint): Build;
  setValueDate(valueDate: string): Build;
  setValueDateTime(valueDateTime: string): Build;
  setValueDecimal(valueDecimal: number): Build;
  setValueIdentifier(valueIdentifier: IIdentifier): Build;
  setValueInstant(valueInstant: string): Build;
  setValueInteger(valueInteger: number): Build;
  setValueInteger64(valueInteger64: number): Build;
  setValueMarkdown(valueMarkdown: string): Build;
  setValueString(valueString: string): Build;
  setValueTime(valueTime: string): Build;
  setValueUnsignedInt(valueUnsignedInt: number): Build;
  setValueUri(valueUri: string): Build;
  setValueUrl(valueUrl: string): Build;
  setValueUuid(valueUuid: string): Build;
  setValueOid(valueOid: string): Build;
  setValuePeriod(valuePeriod: IPeriod): Build;
  setValuePositiveInt(valuePositiveInt: number): Build;
  setValueQuantity(valueQuantity: IQuantity): Build;
  setValueReference(valueReference: IReference): Build;
}

export default class ExtensionBuilder extends ElementBuilder<ExtensionBuilder> implements IExtensionBuilder {
  private readonly extension: IExtension;

  constructor() {
    super();
    this.extension = {} as IExtension;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): Build {
    this.extension[`_${param}`] = extension;
    return {
      build: this.build.bind(this),
    };
  }

  setUrl(url: string): this {
    this.extension.url = url;
    return this;
  }

  setValueAddress(valueAddress: IAddress): Build {
    this.extension.valueAddress = valueAddress;
    return {
      build: this.build.bind(this),
    };
  }

  setValueAttachment(valueAttachment: IAttachment): Build {
    this.extension.valueAttachment = valueAttachment;
    return {
      build: this.build.bind(this),
    };
  }

  setValueBase64Binary(valueBase64Binary: string): Build {
    this.extension.valueBase64Binary = valueBase64Binary;
    return {
      build: this.build.bind(this),
    };
  }

  setValueBoolean(valueBoolean: boolean): Build {
    this.extension.valueBoolean = valueBoolean;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCanonical(valueCanonical: string): Build {
    this.extension.valueCanonical = valueCanonical;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCode(valueCode: string): Build {
    this.extension.valueCode = valueCode;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCodeableConcept(valueCodeableConcept: ICodeableConcept): Build {
    this.extension.valueCodeableConcept = valueCodeableConcept;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCodeableReference(valueCodeableReference: ICodeableReference): Build {
    this.extension.valueCodeableReference = valueCodeableReference;
    return {
      build: this.build.bind(this),
    };
  }

  setValueCoding(valueCoding: ICoding): Build {
    this.extension.valueCoding = valueCoding;
    return {
      build: this.build.bind(this),
    };
  }

  setValueContactPoint(valueContactPoint: IContactPoint): Build {
    this.extension.valueContactPoint = valueContactPoint;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDate(valueDate: string): Build {
    this.extension.valueDate = valueDate;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDateTime(valueDateTime: string): Build {
    this.extension.valueDateTime = valueDateTime;
    return {
      build: this.build.bind(this),
    };
  }

  setValueDecimal(valueDecimal: number): Build {
    this.extension.valueDecimal = valueDecimal;
    return {
      build: this.build.bind(this),
    };
  }

  setValueId(valueId: string): Build {
    this.extension.valueId = valueId;
    return {
      build: this.build.bind(this),
    };
  }

  setValueIdentifier(valueIdentifier: IIdentifier): Build {
    this.extension.valueIdentifier = valueIdentifier;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInstant(valueInstant: string): Build {
    this.extension.valueInstant = valueInstant;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInteger(valueInteger: number): Build {
    this.extension.valueInteger = valueInteger;
    return {
      build: this.build.bind(this),
    };
  }

  setValueInteger64(valueInteger64: number): Build {
    this.extension.valueInteger64 = valueInteger64;
    return {
      build: this.build.bind(this),
    };
  }

  setValueMarkdown(valueMarkdown: string): Build {
    this.extension.valueMarkdown = valueMarkdown;
    return {
      build: this.build.bind(this),
    };
  }

  setValueOid(valueOid: string): Build {
    this.extension.valueOid = valueOid;
    return {
      build: this.build.bind(this),
    };
  }

  setValuePeriod(valuePeriod: IPeriod): Build {
    this.extension.valuePeriod = valuePeriod;
    return {
      build: this.build.bind(this),
    };
  }

  setValuePositiveInt(valuePositiveInt: number): Build {
    this.extension.valuePositiveInt = valuePositiveInt;
    return {
      build: this.build.bind(this),
    };
  }

  setValueQuantity(valueQuantity: IQuantity): Build {
    this.extension.valueQuantity = valueQuantity;
    return {
      build: this.build.bind(this),
    };
  }

  setValueReference(valueReference: IReference): Build {
    this.extension.valueReference = valueReference;
    return {
      build: this.build.bind(this),
    };
  }

  setValueString(valueString: string): Build {
    this.extension.valueString = valueString;
    return {
      build: this.build.bind(this),
    };
  }

  setValueTime(valueTime: string): Build {
    this.extension.valueTime = valueTime;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUnsignedInt(valueUnsignedInt: number): Build {
    this.extension.valueUnsignedInt = valueUnsignedInt;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUri(valueUri: string): Build {
    this.extension.valueUri = valueUri;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUrl(valueUrl: string): Build {
    this.extension.valueUrl = valueUrl;
    return {
      build: this.build.bind(this),
    };
  }

  setValueUuid(valueUuid: string): Build {
    this.extension.valueUuid = valueUuid;
    return {
      build: this.build.bind(this),
    };
  }

  build(): Extension {
    Object.assign(this.extension, { ...super.entity() });
    return new Extension(this.extension).toJson();
  }
}
