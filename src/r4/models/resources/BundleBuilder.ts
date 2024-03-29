import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder, ResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IIdentifier, ISignature } from '../../interfaces/datatypes';
import { BundleTypeEnum } from '../../enums';
import { BundleTypeType } from '../../types';
import { IBundleEntry, IBundleLink } from '../../interfaces/backbones';
import Bundle from './Bundle';
import { IBundle } from '../../interfaces/resources';

type ParamExtensionType = 'type' | 'timestamp' | 'total';

export interface IBundleBuilder extends IBuildable<Bundle>, IResourceBuilder<BundleBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, element: IElement): BundleBuilder;

  setIdentifier(identifier: IIdentifier): BundleBuilder;

  setType(type: BundleTypeEnum | BundleTypeType): BundleBuilder;

  setTimestamp(timestamp: string): BundleBuilder;

  setTotal(total: number): BundleBuilder;

  addLink(link: IBundleLink): BundleBuilder;

  setMultipleLink(link: IBundleLink[]): BundleBuilder;

  addEntry(entry: IBundleEntry): BundleBuilder;

  setMultipleEntry(entry: IBundleEntry[]): BundleBuilder;

  setSignature(signature: ISignature): BundleBuilder;
}

export class BundleBuilder extends ResourceBuilder<BundleBuilder> implements IBundleBuilder {
  private readonly bundle: IBundle;

  constructor() {
    super();
    this.bundle = {} as IBundle;
  }

  addEntry(entry: IBundleEntry): BundleBuilder {
    this.bundle.entry = this.bundle.entry || [];
    this.bundle.entry.push(entry);
    return this;
  }

  addLink(link: IBundleLink): BundleBuilder {
    this.bundle.link = this.bundle.link || [];
    this.bundle.link.push(link);
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, element: IElement): BundleBuilder {
    this.bundle[`_${param}`] = element;
    return this;
  }

  build(): Bundle {
    Object.assign(this.bundle, { ...super.entity() });
    return new Bundle(this.bundle).toJson();
  }

  // TODO: Validate that the identifier is a valid IIdentifier
  setIdentifier(identifier: IIdentifier): BundleBuilder {
    this.bundle.identifier = identifier;
    return this;
  }

  setMultipleEntry(entry: IBundleEntry[]): BundleBuilder {
    this.bundle.entry = entry;
    return this;
  }

  setMultipleLink(link: IBundleLink[]): BundleBuilder {
    this.bundle.link = link;
    return this;
  }

  setSignature(signature: ISignature): BundleBuilder {
    this.bundle.signature = signature;
    return this;
  }

  setTimestamp(timestamp: string): BundleBuilder {
    this.bundle.timestamp = timestamp;
    return this;
  }

  setTotal(total: number): BundleBuilder {
    this.bundle.total = total;
    return this;
  }

  setType(type: BundleTypeEnum | BundleTypeType): BundleBuilder {
    this.bundle.type = type;
    return this;
  }
}
