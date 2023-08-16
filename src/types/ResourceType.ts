import { ResourceEnum } from '../enums';

export const typesArray = Object.values(ResourceEnum).map((value: any) => {
  return value;
}) as string[];

export type ResourceType = (typeof typesArray)[number];
