import { AddressType } from '../enums/AddressType';

const typesArray = Object.values(AddressType).map((value: any) => {
  return value;
}) as string[];

export type AddressTypeType = (typeof typesArray)[number];
