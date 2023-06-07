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
  CodeableReferenceBuilder: () => new DataTypesBuilder.CodeableReferenceBuilder(),
  DurationBuilder: () => new DataTypesBuilder.DurationBuilder(),
  ExtendedContactDetailBuilder: () => new DataTypesBuilder.ExtendedContactDetailBuilder(),
};
