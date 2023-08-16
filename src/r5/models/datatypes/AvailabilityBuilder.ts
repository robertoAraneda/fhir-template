import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IAvailability, IAvailableTime, INotAvailableTime } from '../../interfaces/datatypes';
import { Availability } from './index';
import { IBuildable } from '../../../globals/interfaces';

interface IAvailabilityBuilder extends IBuildable<Availability>, IElementBuilder<AvailabilityBuilder> {
  addAvailableTime(value: IAvailableTime): this;
  setMultipleAvailableTimes(value: IAvailableTime[]): this;
  addNotAvailableTime(value: INotAvailableTime): this;
  setMultipleNotAvailableTimes(value: INotAvailableTime[]): this;
}
export default class AvailabilityBuilder extends ElementBuilder<AvailabilityBuilder> implements IAvailabilityBuilder {
  private readonly availability: IAvailability;

  constructor() {
    super();
    this.availability = {} as IAvailability;
  }

  addAvailableTime(value: IAvailableTime): this {
    this.availability.availableTime = this.availability.availableTime || [];
    this.availability.availableTime.push(value);
    return this;
  }

  setMultipleAvailableTimes(value: IAvailableTime[]): this {
    this.availability.availableTime = value;
    return this;
  }

  addNotAvailableTime(value: INotAvailableTime): this {
    this.availability.notAvailableTime = this.availability.notAvailableTime || [];
    this.availability.notAvailableTime.push(value);
    return this;
  }

  setMultipleNotAvailableTimes(value: INotAvailableTime[]): this {
    this.availability.notAvailableTime = value;
    return this;
  }

  build(): Availability {
    Object.assign(this.availability, { ...super.entity() });
    return new Availability(this.availability).toJson();
  }
}
