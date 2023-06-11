import * as DataTypesBuilder from './builders/datatypes';

export const ElementBuilder = {
  AddressBuilder: () => new DataTypesBuilder.AddressBuilder(),
  AttachmentBuilder: () => new DataTypesBuilder.AttachmentBuilder(),
  CodeableConceptBuilder: () => new DataTypesBuilder.CodeableConceptBuilder(),
  CodingBuilder: () => new DataTypesBuilder.CodingBuilder(),
  ContactPointBuilder: () => new DataTypesBuilder.ContactPointBuilder(),
  HumanNameBuilder: () => new DataTypesBuilder.HumanNameBuilder(),
  IdentifierBuilder: () => new DataTypesBuilder.IdentifierBuilder(),
  MetaBuilder: () => new DataTypesBuilder.MetaBuilder(),
  PeriodBuilder: () => new DataTypesBuilder.PeriodBuilder(),
  ReferenceBuilder: () => new DataTypesBuilder.ReferenceBuilder(),
  DurationBuilder: () => new DataTypesBuilder.DurationBuilder(),
  ExtensionBuilder: () => new DataTypesBuilder.ExtensionBuilder(),
  QuantityBuilder: () => new DataTypesBuilder.QuantityBuilder(),
};