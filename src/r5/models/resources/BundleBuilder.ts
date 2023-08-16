import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder, ResourceBuilder } from '../base/ResourceBuilder';
import { IElement, IResource } from '../../interfaces/base';
import { IIdentifier, ISignature } from '../../interfaces/datatypes';
import { BundleTypeEnum } from '../../enums';
import { BundleTypeType } from '../../types';
import { IBundleEntry, IBundleLink } from '../../interfaces/backbones';
import Bundle from './Bundle';
import IBundle from '../../interfaces/resources/IBundle';

type ParamExtensionType = 'type' | 'timestamp' | 'total';

export interface IBundleBuilder extends IBuildable<Bundle>, IResourceBuilder<BundleBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;

  setIdentifier(identifier: IIdentifier): this;

  setType(type: BundleTypeEnum | BundleTypeType): this;

  setTimestamp(timestamp: string): this;

  setTotal(total: number): this;

  addLink(link: IBundleLink): this;

  setMultipleLink(link: IBundleLink[]): this;

  addEntry(entry: IBundleEntry): this;

  setMultipleEntry(entry: IBundleEntry[]): this;

  setSignature(signature: ISignature): this;

  setIssues(issues: IResource): this;
}

export default class BundleBuilder extends ResourceBuilder<BundleBuilder> implements IBundleBuilder {
  private readonly bundle: IBundle;

  constructor() {
    super();
    this.bundle = {} as IBundle;
  }

  addEntry(entry: IBundleEntry): this {
    this.bundle.entry = this.bundle.entry || [];
    this.bundle.entry.push(entry);
    return this;
  }

  addLink(link: IBundleLink): this {
    this.bundle.link = this.bundle.link || [];
    this.bundle.link.push(link);
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.bundle[`_${param}`] = extension;
    return this;
  }

  build(): Bundle {
    Object.assign(this.bundle, { ...super.entity() });
    return new Bundle(this.bundle).toJson();
  }

  setIdentifier(identifier: IIdentifier): this {
    this.bundle.identifier = identifier;
    return this;
  }

  setMultipleEntry(entry: IBundleEntry[]): this {
    entry.forEach((entry) => this.addEntry(entry));
    return this;
  }

  setMultipleLink(link: IBundleLink[]): this {
    link.forEach((link) => this.addLink(link));
    return this;
  }

  setSignature(signature: ISignature): this {
    this.bundle.signature = signature;
    return this;
  }

  setTimestamp(timestamp: string): this {
    this.bundle.timestamp = timestamp;
    return this;
  }

  setTotal(total: number): this {
    this.bundle.total = total;
    return this;
  }

  setType(type: BundleTypeEnum | BundleTypeType): this {
    this.bundle.type = type;
    return this;
  }

  setIssues(issues: IResource): this {
    this.bundle.issues = issues;
    return this;
  }
}
