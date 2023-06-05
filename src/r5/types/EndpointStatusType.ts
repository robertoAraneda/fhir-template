import { EndpointStatusEnum } from '../enums/EndpointStatusEnum';

const typesArray = Object.values(EndpointStatusEnum).map((value: any) => {
  return value;
}) as string[];

export type EndpointStatusType = (typeof typesArray)[number];
