import { ResourceType } from '../interfaces/ResourceType';

export const typesArray = Object.values(ResourceType).map((value: any) => {
  return value;
}) as string[];

export type ResourceTypeType = (typeof typesArray)[number];
