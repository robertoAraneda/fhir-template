import { AddressUseEnum } from '../enums/AddressUseEnum';

const typesArray = Object.values(AddressUseEnum).map((value: any) => {
  return value;
}) as string[];

export type AddressUseType = (typeof typesArray)[number];
