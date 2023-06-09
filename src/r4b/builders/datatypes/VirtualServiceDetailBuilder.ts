import { createBuildAndSerializeMethods } from '../../helpers/buildAndSerialize';
import { IBuildable, IElement, ISerializable } from '../../interfaces/base';
import { IExtendedContactDetail, IVirtualServiceDetail } from '../../interfaces/datatypes';
import { VirtualServiceDetail } from '../../models/datatypes/VirtualServiceDetail';
import { ElementBuilder } from '../base/ElementBuilder';

type ParamsType = 'addressUrl' | 'maxParticipants' | 'sessionKey' | 'additionalInfo' | 'addressString';
interface IVirtualServiceDetailBuilder extends IBuildable<IVirtualServiceDetail>, ISerializable {
  fromJSON(json: any): Pick<IVirtualServiceDetailBuilder, 'build' | 'serialize'>;
  addVirtualServiceDetailParamExtension(param: ParamsType, extension: IElement): VirtualServiceDetailBuilder;
  addAdditionalInfo(info: string): VirtualServiceDetailBuilder;
  setMultipleAdditionalInfo(info: string[]): VirtualServiceDetailBuilder;
  setAddressString(address: string): VirtualServiceDetailBuilder;
  setAddressUrl(url: string): VirtualServiceDetailBuilder;
  setMaxParticipants(max: number): VirtualServiceDetailBuilder;
  setSessionKey(key: string): VirtualServiceDetailBuilder;
  setAddressContactPoint(contactPoint: IElement): VirtualServiceDetailBuilder;
  setAddressExtendedContactDetail(extendedContactDetail: IExtendedContactDetail): VirtualServiceDetailBuilder;
}

export class VirtualServiceDetailBuilder
  extends ElementBuilder<VirtualServiceDetailBuilder>
  implements IVirtualServiceDetailBuilder
{
  private _virtualServiceDetail: IVirtualServiceDetail;
  constructor() {
    super();

    this._virtualServiceDetail = new VirtualServiceDetail();
  }

  fromJSON(json: any): Pick<IVirtualServiceDetailBuilder, 'build' | 'serialize'> {
    this._virtualServiceDetail = json;
    return createBuildAndSerializeMethods(this);
  }

  addVirtualServiceDetailParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'additionalInfo' ? IElement[] : IElement,
  ): VirtualServiceDetailBuilder {
    if (param === 'additionalInfo') {
      this._virtualServiceDetail._additionalInfo = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamsType, 'additionalInfo'>;

      this._virtualServiceDetail[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  /**
   * @param info
   * @returns
   */
  addAdditionalInfo(info: string): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.additionalInfo = this._virtualServiceDetail.additionalInfo || [];
    this._virtualServiceDetail.additionalInfo.push(info);
    return this;
  }

  setMultipleAdditionalInfo(info: string[]): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.additionalInfo = info;
    return this;
  }

  setAddressString(address: string): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.addressString = address;
    return this;
  }

  setAddressUrl(uri: string): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.addressUrl = uri;
    return this;
  }

  setMaxParticipants(max: number): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.maxParticipants = max;
    return this;
  }

  setSessionKey(key: string): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.sessionKey = key;
    return this;
  }

  setAddressContactPoint(contactPoint: IElement): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.addressContactPoint = contactPoint;
    return this;
  }

  setAddressExtendedContactDetail(extendedContactDetail: IExtendedContactDetail): VirtualServiceDetailBuilder {
    this._virtualServiceDetail.addressExtendedContactDetail = extendedContactDetail;
    return this;
  }

  build(): IVirtualServiceDetail {
    return JSON.parse(this.serialize());
  }

  raw(): IVirtualServiceDetail {
    return {
      ...this._virtualServiceDetail,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
