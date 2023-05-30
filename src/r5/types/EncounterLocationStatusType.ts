import { EncounterLocationStatus } from '../enums/EncounterLocationStatus';

const typesArray = Object.values(EncounterLocationStatus).map((value: any) => {
  return value;
}) as string[];

export type EncounterLocationStatusType = (typeof typesArray)[number];
