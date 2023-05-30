import { AddressUse } from '../enums/AddressUse';

const typesArray = Object.values(AddressUse).map((value: any) => {
  return value;
}) as string[];

export type AddressUseType = (typeof typesArray)[number];
