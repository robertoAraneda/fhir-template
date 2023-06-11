import { DatatypeTypeR4 } from './GlobalDatatypes';
import {
  Address,
  Attachment,
  CodeableConcept,
  Coding,
  ContactPoint,
  Duration,
  Extension,
  HumanName,
  Identifier,
  Meta,
  Period,
  Quantity,
  Reference,
} from './models/datatypes';
export const generateInstanceDatatype = (resourceType: DatatypeTypeR4, data: any) => {
  switch (resourceType) {
    case 'Address':
      return new Address(data);
    case 'CodeableConcept':
      return new CodeableConcept(data);
    case 'Period':
      return new Period(data);
    case 'Coding':
      return new Coding(data);
    case 'Meta':
      return new Meta(data);
    case 'Reference':
      return new Reference(data);
    case 'Identifier':
      return new Identifier(data);
    case 'HumanName':
      return new HumanName(data);
    case 'Extension':
      return new Extension(data);
    case 'Quantity':
      return new Quantity(data);
    case 'Duration':
      return new Duration(data);
    case 'ContactPoint':
      return new ContactPoint(data);
    case 'Attachment':
      return new Attachment(data);
    default:
      throw new Error(`Datatype ${resourceType} not supported`);
  }
};
