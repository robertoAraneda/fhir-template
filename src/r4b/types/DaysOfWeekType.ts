import { DaysOfWeekEnum } from '../enums/DaysOfWeekEnum';

const typesArray = Object.values(DaysOfWeekEnum).map((value: any) => {
  return value;
}) as string[];

export type DaysOfWeekType = (typeof typesArray)[number];
