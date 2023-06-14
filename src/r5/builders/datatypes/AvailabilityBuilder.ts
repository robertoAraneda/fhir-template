import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { IAvailability, IAvailableTime, INotAvailableTime } from '../../interfaces/datatypes';
import { Availability } from '../../models/datatypes';

interface IAvailabilityBuilder extends IBuildable<IAvailability>, ISerializable {
  addAvailableTime(value: IAvailableTime): AvailabilityBuilder;
  setMultipleAvailableTimes(value: IAvailableTime[]): AvailabilityBuilder;
  addNotAvailableTime(value: INotAvailableTime): AvailabilityBuilder;
  setMultipleNotAvailableTimes(value: INotAvailableTime[]): AvailabilityBuilder;
}
export default class AvailabilityBuilder extends ElementBuilder<AvailabilityBuilder> implements IAvailabilityBuilder {
  private readonly availability: IAvailability;

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

  build(): IAvailability {
    return JSON.parse(this.serialize());
  }

  raw(): IAvailability {
    return {
      ...this.availability,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }
}
