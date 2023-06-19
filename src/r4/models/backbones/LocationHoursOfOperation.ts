import { ILocationHoursOfOperation } from '../../interfaces/backbones';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

export default class LocationHoursOfOperation extends BackboneElement implements ILocationHoursOfOperation {
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;

  static builder(): ILocationHoursOfOperationBuilder {
    return new LocationHoursOfOperationBuilder();
  }

  constructor(args?: ILocationHoursOfOperation) {
    super();
    Object.assign(this, args);
  }
}

export interface ILocationHoursOfOperationBuilder
  extends IBuildable<ILocationHoursOfOperation>,
    ISerializable,
    IBackboneElementBuilder<ILocationHoursOfOperationBuilder>,
    IElementBuilder<ILocationHoursOfOperationBuilder> {
  addDaysOfWeek(daysOfWeek: DaysOfWeekEnum | DaysOfWeekType): this;
  setAllDay(allDay: boolean): this;
  setOpeningTime(openingTime: string): this;
  setClosingTime(closingTime: string): this;
  setMultipleDaysOfWeek(daysOfWeek: string[]): this;
}
class LocationHoursOfOperationBuilder
  extends BackboneElementBuilder<LocationHoursOfOperationBuilder>
  implements ILocationHoursOfOperationBuilder
{
  private readonly locationHoursOfOperation: ILocationHoursOfOperation;
  constructor() {
    super();
    this.locationHoursOfOperation = {} as ILocationHoursOfOperation;
  }

  addDaysOfWeek(daysOfWeek: DaysOfWeekEnum | DaysOfWeekType): this {
    this.locationHoursOfOperation.daysOfWeek = this.locationHoursOfOperation.daysOfWeek || [];
    this.locationHoursOfOperation.daysOfWeek.push(daysOfWeek);
    return this;
  }

  build(): ILocationHoursOfOperation {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): ILocationHoursOfOperation {
    return {
      ...this.locationHoursOfOperation,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
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
