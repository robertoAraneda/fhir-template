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
  CodeableReference: () => new DataTypesBuilder.CodeableReferenceBuilder(),
  Duration: () => new DataTypesBuilder.DurationBuilder(),
  ExtendedContactDetail: () => new DataTypesBuilder.ExtendedContactDetailBuilder(),
  Availability: () => new DataTypesBuilder.AvailabilityBuilder(),
  Extension: () => new DataTypesBuilder.ExtensionBuilder(),
  Quantity: () => new DataTypesBuilder.QuantityBuilder(),
  VirtualServiceDetail: () => new DataTypesBuilder.VirtualServiceDetailBuilder(),
};
