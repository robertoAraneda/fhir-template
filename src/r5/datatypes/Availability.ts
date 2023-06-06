import { IAvailability, IAvailableTime, IExtension, INotAvailableTime } from '../interfaces/datatypes';

export class Availability implements IAvailability {
  id?: string;
  extension?: IExtension[];
  availableTime?: IAvailableTime[];
  notAvailableTime?: INotAvailableTime[];

  constructor(args?: IAvailability) {
    Object.assign(this, args);
  }
}
