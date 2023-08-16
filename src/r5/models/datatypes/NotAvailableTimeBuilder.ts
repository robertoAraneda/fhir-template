import { IBuildable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import NotAvailableTime from './NotAvailableTime';
import { INotAvailableTime, IPeriod } from '../../interfaces/datatypes';

export interface INotAvailableTimeBuilder
  extends IBuildable<NotAvailableTime>,
    IElementBuilder<NotAvailableTimeBuilder> {
  setDescription(description: string): this;
  setDuring(during: IPeriod): this;
}

export default class NotAvailableTimeBuilder
  extends ElementBuilder<NotAvailableTimeBuilder>
  implements INotAvailableTimeBuilder
{
  private readonly notAvailableTime: INotAvailableTime;

  constructor() {
    super();
    this.notAvailableTime = {} as INotAvailableTime;
  }

  setDescription(description: string): this {
    this.notAvailableTime.description = description;
    return this;
  }

  setDuring(during: IPeriod): this {
    this.notAvailableTime.during = during;
    return this;
  }

  build(): NotAvailableTime {
    Object.assign(this.notAvailableTime, { ...super.entity() });
    return new NotAvailableTime(this.notAvailableTime).toJson();
  }
}
