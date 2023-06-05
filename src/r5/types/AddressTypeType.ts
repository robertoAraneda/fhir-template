import { AddressTypeEnum } from '../enums/AddressTypeEnum';

const typesArray = Object.values(AddressTypeEnum).map((value: any) => {
  return value;
}) as string[];

export type AddressTypeType = (typeof typesArray)[number];
