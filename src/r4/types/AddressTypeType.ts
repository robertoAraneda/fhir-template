import { AddressTypeEnum } from '../enums';

const typesArray = Object.values(AddressTypeEnum).map((value: any) => {
  return value;
}) as string[];

export type AddressTypeType = (typeof typesArray)[number];
