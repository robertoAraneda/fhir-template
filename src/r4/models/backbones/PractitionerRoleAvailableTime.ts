import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

export default class PractitionerRoleAvailableTime extends BackboneElement implements IPractitionerRoleAvailableTime {
  // PractitionerRoleAvailableTime attributes
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;

  // Extensions
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;

  static builder(): IPractitionerRoleAvailableTimeBuilder {
    return new PractitionerRoleAvailableTimeBuilder();
  }

  constructor(args?: PractitionerRoleAvailableTime) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'daysOfWeek' | 'allDay' | 'availableStartTime' | 'availableEndTime';
export interface IPractitionerRoleAvailableTimeBuilder
  extends IBuildable<IPractitionerRoleAvailableTime>,
    ISerializable,
    IBackboneElementBuilder<IPractitionerRoleAvailableTimeBuilder>,
    IElementBuilder<IPractitionerRoleAvailableTimeBuilder> {
  addDaysOfWeek(value: string): this;
  setMultipleDaysOfWeek(value: DaysOfWeekType[] | DaysOfWeekEnum): this;
  setAllDay(value: boolean): this;
  setAvailableStartTime(value: string): this;
  setAvailableEndTime(value: string): this;
  addParamExtension(param: ParamType, extension: IElement): this;
}
class PractitionerRoleAvailableTimeBuilder
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
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IPractitionerRoleAvailableTime {
    return {
      ...this.practitionerRoleAvailableTime,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
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
