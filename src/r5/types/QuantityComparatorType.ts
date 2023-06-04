import { QuantityComparator } from '../enums/QuantityComparator';

const typesArray = Object.values(QuantityComparator).map((value: any) => {
  return value;
}) as string[];

export type QuantityComparatorType = (typeof typesArray)[number];
