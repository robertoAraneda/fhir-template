import {
  IAddress,
  IAttachment,
  IAvailability,
  ICodeableConcept,
  ICodeableReference,
  IContactPoint,
  IDuration,
  IExtendedContactDetail,
  IPeriod,
} from './interfaces/datatypes';
import {
  AddressBuilder,
  AttachmentBuilder,
  AvailabilityBuilder,
  CodeableConceptBuilder,
  CodeableReferenceBuilder,
  ContactPointBuilder,
  DurationBuilder,
  ExtendedContactDetailBuilder,
  PeriodBuilder,
} from './builders/datatypes';
import { DatatypeTypeR5 } from './GlobalDatatypes';

export const generateInstanceDatatype = (resourceType: DatatypeTypeR5) => {
  switch (resourceType) {
    case 'Address':
      return { data: (address: IAddress) => new AddressBuilder().fromJSON(address).build() };
    case 'Availability':
      return { data: (availability: IAvailability) => new AvailabilityBuilder().fromJSON(availability).build() };
    case 'CodeableConcept':
      return {
        data: (codeableConcept: ICodeableConcept) => new CodeableConceptBuilder().fromJSON(codeableConcept).build(),
      };
    case 'CodeableReference':
      return {
        data: (codeableReference: ICodeableReference) =>
          new CodeableReferenceBuilder().fromJSON(codeableReference).build(),
      };
    case 'Period':
      return { data: (period: IPeriod) => new PeriodBuilder().fromJSON(period).build() };
    case 'Coding':
    case 'Meta':
    case 'Reference':
    case 'Identifier':
    case 'HumanName':
    case 'ExtendedContactDetail':
      return {
        data: (duration: IExtendedContactDetail) => new ExtendedContactDetailBuilder().fromJSON(duration).build(),
      };
    case 'Duration':
      return { data: (duration: IDuration) => new DurationBuilder().fromJSON(duration).build() };
    case 'ContactPoint':
      return { data: (contactPoint: IContactPoint) => new ContactPointBuilder().fromJSON(contactPoint).build() };
    case 'Attachment':
      return { data: (attachment: IAttachment) => new AttachmentBuilder().fromJSON(attachment).build() };
    default:
      throw new Error(`Datatype ${resourceType} not supported`);
  }
};
