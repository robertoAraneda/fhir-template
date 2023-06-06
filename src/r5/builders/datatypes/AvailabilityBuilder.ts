import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { IAvailability, IAvailableTime, INotAvailableTime } from '../../interfaces/datatypes';
import { Availability } from '../../models/datatypes/Availability';

export class AvailabilityBuilder
  extends ElementBuilder<AvailabilityBuilder>
  implements IBuildable<IAvailability>, ISerializable
{
  private availability: IAvailability;

  constructor() {
    super();
    this.availability = new Availability();
  }

  fromJSON(json: IAvailability) {
    this.availability = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
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
