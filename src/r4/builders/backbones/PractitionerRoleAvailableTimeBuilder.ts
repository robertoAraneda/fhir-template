import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { PractitionerRoleAvailableTime } from '../../models/backbones/PractitionerRoleAvailableTime';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';

type ParamType = 'daysOfWeek' | 'allDay' | 'availableStartTime' | 'availableEndTime';
interface IPractitionerRoleAvailableTimeBuilder extends IBuildable<IPractitionerRoleAvailableTime>, ISerializable {
  addDaysOfWeek(value: string): this;
  setMultipleDaysOfWeek(value: DaysOfWeekType[] | DaysOfWeekEnum): this;
  setAllDay(value: boolean): this;
  setAvailableStartTime(value: string): this;
  setAvailableEndTime(value: string): this;
  addParamExtension(param: ParamType, extension: IElement): this;
}
export class PractitionerRoleAvailableTimeBuilder
  extends BackboneElementBuilder<PractitionerRoleAvailableTimeBuilder>
  implements IPractitionerRoleAvailableTimeBuilder
{
  private readonly practitionerRoleAvailableTime: IPractitionerRoleAvailableTime;
  constructor() {
    super();
    this.practitionerRoleAvailableTime = new PractitionerRoleAvailableTime();
  }
  addDaysOfWeek(value: DaysOfWeekEnum | DaysOfWeekType): this {
    this.practitionerRoleAvailableTime.daysOfWeek = this.practitionerRoleAvailableTime.daysOfWeek || [];
    this.practitionerRoleAvailableTime.daysOfWeek.push(value);
    return this;
  }

  addParamExtension<T extends ParamType>(param: T, extension: T extends 'daysOfWeek' ? IElement[] : IElement): this {
    const includes = ['daysOfWeek'];
    if (includes.includes(param)) {
      const localMultipleParam = param as Exclude<ParamType, 'allDay' | 'availableStartTime' | 'availableEndTime'>;
      this.practitionerRoleAvailableTime[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamType, 'daysOfWeek'>;
      this.practitionerRoleAvailableTime[`_${localParam}`] = extension as IElement;
    }
    return this;
  }

  build(): IPractitionerRoleAvailableTime {
    return JSON.parse(this.serialize());
  }

  raw(): IPractitionerRoleAvailableTime {
    return {
      ...this.practitionerRoleAvailableTime,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  setAllDay(value: boolean): this {
    this.practitionerRoleAvailableTime.allDay = value;
    return this;
  }

  setAvailableEndTime(value: string): this {
    this.practitionerRoleAvailableTime.availableEndTime = value;
    return this;
  }

  setAvailableStartTime(value: string): this {
    this.practitionerRoleAvailableTime.availableStartTime = value;
    return this;
  }

  setMultipleDaysOfWeek(value: DaysOfWeekEnum[] | DaysOfWeekType[]): this {
    this.practitionerRoleAvailableTime.daysOfWeek = value;
    return this;
  }
}
