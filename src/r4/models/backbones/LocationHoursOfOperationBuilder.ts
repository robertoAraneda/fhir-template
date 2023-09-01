import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import LocationHoursOfOperation from './LocationHoursOfOperation';
import { ILocationHoursOfOperation } from '../../interfaces/backbones';

export interface ILocationHoursOfOperationBuilder
  extends IBuildable<LocationHoursOfOperation>,
    IBackboneElementBuilder<LocationHoursOfOperationBuilder>,
    IElementBuilder<LocationHoursOfOperationBuilder> {
  addDaysOfWeek(daysOfWeek: DaysOfWeekEnum | DaysOfWeekType): LocationHoursOfOperationBuilder;

  setAllDay(allDay: boolean): LocationHoursOfOperationBuilder;

  setOpeningTime(openingTime: string): LocationHoursOfOperationBuilder;

  setClosingTime(closingTime: string): LocationHoursOfOperationBuilder;

  setMultipleDaysOfWeek(daysOfWeek: string[]): LocationHoursOfOperationBuilder;
}

export class LocationHoursOfOperationBuilder
  extends BackboneElementBuilder<LocationHoursOfOperationBuilder>
  implements ILocationHoursOfOperationBuilder
{
  private readonly locationHoursOfOperation: ILocationHoursOfOperation;

  constructor() {
    super();
    this.locationHoursOfOperation = {} as ILocationHoursOfOperation;
  }

  addDaysOfWeek(daysOfWeek: DaysOfWeekEnum | DaysOfWeekType): LocationHoursOfOperationBuilder {
    this.locationHoursOfOperation.daysOfWeek = this.locationHoursOfOperation.daysOfWeek || [];
    this.locationHoursOfOperation.daysOfWeek.push(daysOfWeek);
    return this;
  }

  build(): LocationHoursOfOperation {
    Object.assign(this.locationHoursOfOperation, { ...super.entity() });
    return new LocationHoursOfOperation(this.locationHoursOfOperation).toJson();
  }

  setAllDay(allDay: boolean): LocationHoursOfOperationBuilder {
    this.locationHoursOfOperation.allDay = allDay;
    return this;
  }

  setClosingTime(closingTime: string): LocationHoursOfOperationBuilder {
    this.locationHoursOfOperation.closingTime = closingTime;
    return this;
  }

  setMultipleDaysOfWeek(daysOfWeek: DaysOfWeekEnum[] | DaysOfWeekType[]): LocationHoursOfOperationBuilder {
    this.locationHoursOfOperation.daysOfWeek = daysOfWeek;
    return this;
  }

  setOpeningTime(openingTime: string): LocationHoursOfOperationBuilder {
    this.locationHoursOfOperation.openingTime = openingTime;
    return this;
  }
}
