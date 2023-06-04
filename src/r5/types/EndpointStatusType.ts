import { EndpointStatus } from '../enums/EndpointStatus';

const typesArray = Object.values(EndpointStatus).map((value: any) => {
  return value;
}) as string[];

export type EndpointStatusType = (typeof typesArray)[number];
