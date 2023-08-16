import { INotAvailableTime, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import NotAvailableTimeBuilder from './NotAvailableTimeBuilder';
import { NotAvailableTimeValidator } from './NotAvailableTimeValidator';
import Element from '../base/Element';

export default class NotAvailableTime extends Element implements INotAvailableTime {
  _description: IElement;
  description: string;
  during: IPeriod;

  toJson(): NotAvailableTime {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `NotAvailableTime${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `NotAvailableTime${JSON.stringify(this.toJson(), null, 2)}`;
  }

  static builder(): NotAvailableTimeBuilder {
    return new NotAvailableTimeBuilder();
  }

  constructor(args: INotAvailableTime) {
    super();
    NotAvailableTimeValidator(args);
    Object.assign(this, args);
  }
}
