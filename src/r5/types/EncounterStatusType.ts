import { EncounterStatus } from '../enums/EncounterStatus';

const typesArray = Object.values(EncounterStatus).map((value: any) => {
  return value;
}) as string[];

export type EncounterStatusType = (typeof typesArray)[number];
