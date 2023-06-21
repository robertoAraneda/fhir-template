import { ElementBuilder } from '../base/ElementBuilder';
import { IAvailableTime, INotAvailableTime } from '../../interfaces/datatypes';
import { Availability } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

interface IAvailabilityBuilder extends IBuildable<Availability>, IElementBuilder<AvailabilityBuilder> {
  addAvailableTime(value: IAvailableTime): AvailabilityBuilder;
  setMultipleAvailableTimes(value: IAvailableTime[]): AvailabilityBuilder;
  addNotAvailableTime(value: INotAvailableTime): AvailabilityBuilder;
  setMultipleNotAvailableTimes(value: INotAvailableTime[]): AvailabilityBuilder;
}
export default class AvailabilityBuilder extends ElementBuilder<AvailabilityBuilder> implements IAvailabilityBuilder {
  private readonly availability: Availability;

  constructor() {
    super();
    this.availability = new Availability();
  }

  addAvailableTime(value: IAvailableTime): AvailabilityBuilder {
    this.availability.availableTime = this.availability.availableTime || [];
    this.availability.availableTime.push(value);
    return this;
  }

  setMultipleAvailableTimes(value: IAvailableTime[]): AvailabilityBuilder {
    this.availability.availableTime = value;
    return this;
  }

  addNotAvailableTime(value: INotAvailableTime): AvailabilityBuilder {
    this.availability.notAvailableTime = this.availability.notAvailableTime || [];
    this.availability.notAvailableTime.push(value);
    return this;
  }

  setMultipleNotAvailableTimes(value: INotAvailableTime[]): AvailabilityBuilder {
    this.availability.notAvailableTime = value;
    return this;
  }

  build(): Availability {
    Object.assign(this.availability, { ...super.entity() });
    return this.availability.toJson();
  }
}
