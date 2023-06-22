import { IElement, IResource } from '../../interfaces/base';
import {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
} from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { BundleEntryBuilder } from './BundleEntryBuilder';
import Resource from '../base/Resource';
import { ResourcesListR5, ResourceTypeR5 } from '../../GlobalResourceTypes';
import { _validateBaseResource } from '../../validators/BaseValidator';
import { IPatient } from '../../interfaces/resources';

export default class BundleEntry extends BackboneElement implements IBundleEntry {
  // BundleEntry attributes
  fullUrl?: string;
  link?: IBundleLink[];
  request?: IBundleEntryRequest;
  resource?: IResource & { [key: string]: any };
  response?: IBundleEntryResponse;
  search?: IBundleEntrySearch;

  // Extensions of bundle entry attributes
  _fullUrl?: IElement;
  toJson(): BundleEntry {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `BundleEntry${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `BundleEntry${JSON.stringify(this.toJson(), null, 2)}`;
  }

  static builder(): BundleEntryBuilder {
    return new BundleEntryBuilder();
  }

  constructor(args?: IBundleEntry) {
    super();
    if (args) {
      Object.assign(this, args);
      if (this.resource) {
        if (!this.resource.resourceType) throw new Error('BundleEntry must have a resourceType');
        const validate = _validateBaseResource(this.resource, this.resource.resourceType);

        if (!validate.isValid) {
          throw new Error(`Invalid resource for BundleEntry: ${JSON.stringify(validate.errors, null, 2)}`);
        }
      }
    }

    // If resource is a string, convert it to an object
  }
}
