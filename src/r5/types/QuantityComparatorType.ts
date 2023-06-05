import { QuantityComparatorEnum } from '../enums/QuantityComparatorEnum';

const typesArray = Object.values(QuantityComparatorEnum).map((value: any) => {
  return value;
}) as string[];

export type QuantityComparatorType = (typeof typesArray)[number];
