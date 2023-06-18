import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ILocationHoursOfOperation } from '../../interfaces/backbones';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { LocationHoursOfOperation } from '../../models/backbones';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';

interface ILocationHoursOfOperationBuilder extends IBuildable<ILocationHoursOfOperation>, ISerializable {
  addDaysOfWeek(daysOfWeek: DaysOfWeekEnum | DaysOfWeekType): this;
  setAllDay(allDay: boolean): this;
  setOpeningTime(openingTime: string): this;
  setClosingTime(closingTime: string): this;
  setMultipleDaysOfWeek(daysOfWeek: string[]): this;
}
export default class LocationHoursOfOperationBuilder
  extends BackboneElementBuilder<LocationHoursOfOperationBuilder>
  implements ILocationHoursOfOperationBuilder
{
  private readonly locationHoursOfOperation: ILocationHoursOfOperation;
  constructor() {
    super();
    this.locationHoursOfOperation = new LocationHoursOfOperation();
  }

  addDaysOfWeek(daysOfWeek: DaysOfWeekEnum | DaysOfWeekType): this {
    this.locationHoursOfOperation.daysOfWeek = this.locationHoursOfOperation.daysOfWeek || [];
    this.locationHoursOfOperation.daysOfWeek.push(daysOfWeek);
    return this;
  }

  build(): ILocationHoursOfOperation {
    return JSON.parse(this.serialize());
  }

  raw(): ILocationHoursOfOperation {
    return {
      ...this.locationHoursOfOperation,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  setAllDay(allDay: boolean): this {
    this.locationHoursOfOperation.allDay = allDay;
    return this;
  }

  setClosingTime(closingTime: string): this {
    this.locationHoursOfOperation.closingTime = closingTime;
    return this;
  }

  setMultipleDaysOfWeek(daysOfWeek: DaysOfWeekEnum[] | DaysOfWeekType[]): this {
    this.locationHoursOfOperation.daysOfWeek = daysOfWeek;
    return this;
  }

  setOpeningTime(openingTime: string): this {
    this.locationHoursOfOperation.openingTime = openingTime;
    return this;
  }
}
