import { DatatypeTypeR4 } from './GlobalDatatypes';
import * as datatype from './models/datatypes';
export const generateInstanceDatatype = (resourceType: DatatypeTypeR4, data: any) => {
  switch (resourceType) {
    case 'Address':
      return new datatype.Address(data);
    case 'CodeableConcept':
      return new datatype.CodeableConcept(data);
    case 'Period':
      return new datatype.Period(data);
    case 'Coding':
      return new datatype.Coding(data);
    case 'Meta':
      return new datatype.Meta(data);
    case 'Reference':
      return new datatype.Reference(data);
    case 'Identifier':
      return new datatype.Identifier(data);
    case 'HumanName':
      return new datatype.HumanName(data);
    case 'Extension':
      return new datatype.Extension(data);
    case 'Quantity':
      return new datatype.Quantity(data);
    case 'Duration':
      return new datatype.Duration(data);
    case 'ContactPoint':
      return new datatype.ContactPoint(data);
    case 'Attachment':
      return new datatype.Attachment(data);
    case 'Range':
      return new datatype.Range(data);
    case 'SimpleQuantity':
      return new datatype.SimpleQuantity(data);
    default:
      throw new Error(`Datatype ${resourceType} not supported`);
  }
};
