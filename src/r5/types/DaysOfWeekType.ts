import { DaysOfWeek } from '../enums/DaysOfWeek';

const typesArray = Object.values(DaysOfWeek).map((value: any) => {
  return value;
}) as string[];

export type DaysOfWeekType = (typeof typesArray)[number];
