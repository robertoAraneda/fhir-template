import { createBuildAndSerializeMethods } from '../../helpers/buildAndSerialize';
import { IBuildable, IElement, ISerializable } from '../../interfaces/base';
import { IExtendedContactDetail, IVirtualServiceDetail } from '../../interfaces/datatypes';
import { VirtualServiceDetail } from '../../models/datatypes';
import { ElementBuilder } from '../base/ElementBuilder';

type ParamsType = 'addressUrl' | 'maxParticipants' | 'sessionKey' | 'additionalInfo' | 'addressString';
interface IVirtualServiceDetailBuilder extends IBuildable<IVirtualServiceDetail>, ISerializable {
  addParamExtension(param: ParamsType, extension: IElement): VirtualServiceDetailBuilder;
  addAdditionalInfo(info: string): VirtualServiceDetailBuilder;
  setMultipleAdditionalInfo(info: string[]): VirtualServiceDetailBuilder;
  setAddressString(address: string): VirtualServiceDetailBuilder;
  setAddressUrl(url: string): VirtualServiceDetailBuilder;
  setMaxParticipants(max: number): VirtualServiceDetailBuilder;
  setSessionKey(key: string): VirtualServiceDetailBuilder;
  setAddressContactPoint(contactPoint: IElement): VirtualServiceDetailBuilder;
  setAddressExtendedContactDetail(extendedContactDetail: IExtendedContactDetail): VirtualServiceDetailBuilder;
}

export default class VirtualServiceDetailBuilder
  extends ElementBuilder<VirtualServiceDetailBuilder>
  implements IVirtualServiceDetailBuilder
{
  private virtualServiceDetail: IVirtualServiceDetail;
  constructor() {
    super();
    this.virtualServiceDetail = new VirtualServiceDetail();
  }

  addParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'additionalInfo' ? IElement[] : IElement,
  ): VirtualServiceDetailBuilder {
    if (param === 'additionalInfo') {
      this.virtualServiceDetail._additionalInfo = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamsType, 'additionalInfo'>;

      this.virtualServiceDetail[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  /**
   * @param info
   * @returns
   */
  addAdditionalInfo(info: string): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.additionalInfo = this.virtualServiceDetail.additionalInfo || [];
    this.virtualServiceDetail.additionalInfo.push(info);
    return this;
  }

  setMultipleAdditionalInfo(info: string[]): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.additionalInfo = info;
    return this;
  }

  setAddressString(address: string): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.addressString = address;
    return this;
  }

  setAddressUrl(uri: string): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.addressUrl = uri;
    return this;
  }

  setMaxParticipants(max: number): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.maxParticipants = max;
    return this;
  }

  setSessionKey(key: string): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.sessionKey = key;
    return this;
  }

  setAddressContactPoint(contactPoint: IElement): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.addressContactPoint = contactPoint;
    return this;
  }

  setAddressExtendedContactDetail(extendedContactDetail: IExtendedContactDetail): VirtualServiceDetailBuilder {
    this.virtualServiceDetail.addressExtendedContactDetail = extendedContactDetail;
    return this;
  }

  build(): IVirtualServiceDetail {
    return JSON.parse(this.serialize());
  }

  raw(): IVirtualServiceDetail {
    return {
      ...this.virtualServiceDetail,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
