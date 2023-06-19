import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import PractitionerRoleAvailableTime from './PractitionerRoleAvailableTime';

type ParamExtensionType = 'daysOfWeek' | 'allDay' | 'availableStartTime' | 'availableEndTime';

export interface IPractitionerRoleAvailableTimeBuilder
  extends IBuildable<PractitionerRoleAvailableTime>,
    IBackboneElementBuilder<PractitionerRoleAvailableTimeBuilder>,
    IElementBuilder<PractitionerRoleAvailableTimeBuilder> {
  addDaysOfWeek(value: string): PractitionerRoleAvailableTimeBuilder;

  setMultipleDaysOfWeek(value: DaysOfWeekType[] | DaysOfWeekEnum): PractitionerRoleAvailableTimeBuilder;

  setAllDay(value: boolean): PractitionerRoleAvailableTimeBuilder;

  setAvailableStartTime(value: string): PractitionerRoleAvailableTimeBuilder;

  setAvailableEndTime(value: string): PractitionerRoleAvailableTimeBuilder;

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'daysOfWeek' ? IElement[] : IElement,
  ): PractitionerRoleAvailableTimeBuilder;
}

export class PractitionerRoleAvailableTimeBuilder
  extends BackboneElementBuilder<PractitionerRoleAvailableTimeBuilder>
  implements IPractitionerRoleAvailableTimeBuilder
{
  private readonly practitionerRoleAvailableTime: PractitionerRoleAvailableTime;

  constructor() {
    super();
    this.practitionerRoleAvailableTime = new PractitionerRoleAvailableTime();
  }

  addDaysOfWeek(value: DaysOfWeekEnum | DaysOfWeekType): PractitionerRoleAvailableTimeBuilder {
    this.practitionerRoleAvailableTime.daysOfWeek = this.practitionerRoleAvailableTime.daysOfWeek || [];
    this.practitionerRoleAvailableTime.daysOfWeek.push(value);
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'daysOfWeek' ? IElement[] : IElement,
  ): PractitionerRoleAvailableTimeBuilder {
    const includes = ['daysOfWeek'];
    if (includes.includes(param)) {
      const localMultipleParam = param as Exclude<
        ParamExtensionType,
        'allDay' | 'availableStartTime' | 'availableEndTime'
      >;
      this.practitionerRoleAvailableTime[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'daysOfWeek'>;
      this.practitionerRoleAvailableTime[`_${localParam}`] = extension as IElement;
    }
    return this;
  }

  build(): PractitionerRoleAvailableTime {
    Object.assign(this.practitionerRoleAvailableTime, { ...super.entity() });
    return this.practitionerRoleAvailableTime.toJson();
  }

  setAllDay(value: boolean): PractitionerRoleAvailableTimeBuilder {
    this.practitionerRoleAvailableTime.allDay = value;
    return this;
  }

  setAvailableEndTime(value: string): PractitionerRoleAvailableTimeBuilder {
    this.practitionerRoleAvailableTime.availableEndTime = value;
    return this;
  }

  setAvailableStartTime(value: string): PractitionerRoleAvailableTimeBuilder {
    this.practitionerRoleAvailableTime.availableStartTime = value;
    return this;
  }

  setMultipleDaysOfWeek(value: DaysOfWeekEnum[] | DaysOfWeekType[]): PractitionerRoleAvailableTimeBuilder {
    this.practitionerRoleAvailableTime.daysOfWeek = value;
    return this;
  }
}
