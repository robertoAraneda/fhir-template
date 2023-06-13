import { DatatypeTypeR5 } from './GlobalDatatypes';
import * as datatype from './models/datatypes';

export const generateInstanceDatatype = (resourceType: DatatypeTypeR5, data: any) => {
  switch (resourceType) {
    case 'Address':
      return new datatype.Address(data);
    case 'Availability':
      return new datatype.Availability(data);
    case 'CodeableConcept':
      return new datatype.CodeableConcept(data);
    case 'CodeableReference':
      return new datatype.CodeableReference(data);
    case 'Period':
      return new datatype.Period(data);
    case 'Coding':
      return new datatype.Coding(data);
    case 'Meta':
      return new datatype.Meta(data);
    case 'Reference':
      //TODO - this is a hack, but it works for now
      return new datatype.Extension(data);
    case 'Identifier':
      return new datatype.Identifier(data);
    case 'HumanName':
      return new datatype.HumanName(data);
    case 'Extension':
      return new datatype.Extension(data);
    case 'ExtendedContactDetail':
      return new datatype.ExtendedContactDetail(data);
    case 'Quantity':
      return new datatype.Quantity(data);
    case 'Duration':
      return new datatype.Duration(data);
    case 'ContactPoint':
      return new datatype.ContactPoint(data);
    case 'Attachment':
      return new datatype.Attachment(data);
    case 'VirtualServiceDetail':
      return new datatype.VirtualServiceDetail(data);
    default:
      throw new Error(`Datatype ${resourceType} not supported`);
  }
};
