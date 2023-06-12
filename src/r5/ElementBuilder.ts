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
  CodeableReferenceBuilder: () => new DataTypesBuilder.CodeableReferenceBuilder(),
  Duration: () => new DataTypesBuilder.DurationBuilder(),
  ExtendedContactDetailBuilder: () => new DataTypesBuilder.ExtendedContactDetailBuilder(),
  AvailabilityBuilder: () => new DataTypesBuilder.AvailabilityBuilder(),
  Extension: () => new DataTypesBuilder.ExtensionBuilder(),
  Quantity: () => new DataTypesBuilder.QuantityBuilder(),
  VirtualServiceDetailBuilder: () => new DataTypesBuilder.VirtualServiceDetailBuilder(),
};
