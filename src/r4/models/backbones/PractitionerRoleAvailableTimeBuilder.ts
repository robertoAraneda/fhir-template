import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import PractitionerRoleAvailableTime from './PractitionerRoleAvailableTime';
import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';

type ParamExtensionType = 'daysOfWeek' | 'allDay' | 'availableStartTime' | 'availableEndTime';

export interface IPractitionerRoleAvailableTimeBuilder
  extends IBuildable<PractitionerRoleAvailableTime>,
    IBackboneElementBuilder<PractitionerRoleAvailableTimeBuilder>,
    IElementBuilder<PractitionerRoleAvailableTimeBuilder> {
  addDaysOfWeek(value: string): this;

  setMultipleDaysOfWeek(value: (DaysOfWeekType | DaysOfWeekEnum)[]): this;

  setAllDay(value: boolean): this;

  setAvailableStartTime(value: string): this;

  setAvailableEndTime(value: string): this;

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'daysOfWeek' ? IElement[] : IElement,
  ): this;
}

export class PractitionerRoleAvailableTimeBuilder
  extends BackboneElementBuilder<PractitionerRoleAvailableTimeBuilder>
  implements IPractitionerRoleAvailableTimeBuilder
{
  private readonly practitionerRoleAvailableTime: IPractitionerRoleAvailableTime;

  constructor() {
    super();
    this.practitionerRoleAvailableTime = {} as IPractitionerRoleAvailableTime;
  }

  addDaysOfWeek(value: DaysOfWeekEnum | DaysOfWeekType): this {
    this.practitionerRoleAvailableTime.daysOfWeek = this.practitionerRoleAvailableTime.daysOfWeek || [];
    this.practitionerRoleAvailableTime.daysOfWeek.push(value);
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'daysOfWeek' ? IElement[] : IElement,
  ): this {
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
    return new PractitionerRoleAvailableTime(this.practitionerRoleAvailableTime).toJson();
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

  setMultipleDaysOfWeek(value: (DaysOfWeekEnum | DaysOfWeekType)[]): this {
    this.practitionerRoleAvailableTime.daysOfWeek = value;
    return this;
  }
}
