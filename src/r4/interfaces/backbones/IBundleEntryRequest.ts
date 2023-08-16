import { IBackboneElement, IElement } from '../base';
import { BundleEntryRequestMethodType } from '../../../types';
import { BundleEntryRequestMethodEnum } from '../../../enums';

export interface IBundleEntryRequest extends IBackboneElement {
  method: BundleEntryRequestMethodType | BundleEntryRequestMethodEnum;
  url: string;
  ifNoneMatch?: string;
  ifModifiedSince?: string;
  ifMatch?: string;
  ifNoneExist?: string;

  _method?: IElement;
  _url?: IElement;
  _ifNoneMatch?: IElement;
  _ifModifiedSince?: IElement;
  _ifMatch?: IElement;
  _ifNoneExist?: IElement;
}
