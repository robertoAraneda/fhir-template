import * as DataTypesBuilder from './builders/datatypes';

export const ElementBuilder = {
  Address: () => new DataTypesBuilder.AddressBuilder(),
  Attachment: () => new DataTypesBuilder.AttachmentBuilder(),
  CodeableConcept: () => new DataTypesBuilder.CodeableConceptBuilder(),
  Coding: () => new DataTypesBuilder.CodingBuilder(),
  ContactPoint: () => new DataTypesBuilder.ContactPointBuilder(),
  HumanName: () => new DataTypesBuilder.HumanNameBuilder(),
  Identifier: () => new DataTypesBuilder.IdentifierBuilder(),
  Meta: () => new DataTypesBuilder.MetaBuilder(),
  Period: () => new DataTypesBuilder.PeriodBuilder(),
  Reference: () => new DataTypesBuilder.ReferenceBuilder(),
  Duration: () => new DataTypesBuilder.DurationBuilder(),
  Extension: () => new DataTypesBuilder.ExtensionBuilder(),
  Quantity: () => new DataTypesBuilder.QuantityBuilder(),
  Range: () => new DataTypesBuilder.RangeBuilder(),
  SimpleQuantity: () => new DataTypesBuilder.SimpleQuantityBuilder(),
};
