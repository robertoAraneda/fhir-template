import { IContactPoint, IExtendedContactDetail, IVirtualServiceDetail } from '../../interfaces/datatypes';
import { VirtualServiceDetail } from './index';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

type ParamsExtensionType = 'addressUrl' | 'maxParticipants' | 'sessionKey' | 'additionalInfo' | 'addressString';
interface IVirtualServiceDetailBuilder
  extends IBuildable<VirtualServiceDetail>,
    IElementBuilder<VirtualServiceDetailBuilder> {
  addParamExtension<T extends ParamsExtensionType>(
    param: T,
    extension: T extends 'additionalInfo' ? IElement[] : IElement,
  ): this;
  addAdditionalInfo(info: string): this;
  setMultipleAdditionalInfo(info: string[]): this;
  setAddressString(address: string): this;
  setAddressUrl(url: string): this;
  setMaxParticipants(max: number): this;
  setSessionKey(key: string): this;
  setAddressContactPoint(contactPoint: IContactPoint): this;
  setAddressExtendedContactDetail(extendedContactDetail: IExtendedContactDetail): this;
}

export default class VirtualServiceDetailBuilder
  extends ElementBuilder<VirtualServiceDetailBuilder>
  implements IVirtualServiceDetailBuilder
{
  private virtualServiceDetail: IVirtualServiceDetail;
  constructor() {
    super();
    this.virtualServiceDetail = {} as IVirtualServiceDetail;
  }

  addParamExtension<T extends ParamsExtensionType>(
    param: T,
    extension: T extends 'additionalInfo' ? IElement[] : IElement,
  ): this {
    if (param === 'additionalInfo') {
      this.virtualServiceDetail._additionalInfo = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamsExtensionType, 'additionalInfo'>;

      this.virtualServiceDetail[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  /**
   * @param info
   * @returns
   */
  addAdditionalInfo(info: string): this {
    this.virtualServiceDetail.additionalInfo = this.virtualServiceDetail.additionalInfo || [];
    this.virtualServiceDetail.additionalInfo.push(info);
    return this;
  }

  setMultipleAdditionalInfo(info: string[]): this {
    this.virtualServiceDetail.additionalInfo = info;
    return this;
  }

  setAddressString(address: string): this {
    this.virtualServiceDetail.addressString = address;
    return this;
  }

  setAddressUrl(uri: string): this {
    this.virtualServiceDetail.addressUrl = uri;
    return this;
  }

  setMaxParticipants(max: number): this {
    this.virtualServiceDetail.maxParticipants = max;
    return this;
  }

  setSessionKey(key: string): this {
    this.virtualServiceDetail.sessionKey = key;
    return this;
  }

  setAddressContactPoint(contactPoint: IElement): this {
    this.virtualServiceDetail.addressContactPoint = contactPoint;
    return this;
  }

  setAddressExtendedContactDetail(extendedContactDetail: IExtendedContactDetail): this {
    this.virtualServiceDetail.addressExtendedContactDetail = extendedContactDetail;
    return this;
  }

  build(): VirtualServiceDetail {
    Object.assign(this.virtualServiceDetail, { ...super.entity() });
    return new VirtualServiceDetail(this.virtualServiceDetail).toJson();
  }
}
