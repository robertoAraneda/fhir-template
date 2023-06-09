import { DatatypeTypeR4 } from './GlobalDatatypes';
import { Address } from './models/datatypes/Address';
import { Availability } from './models/datatypes/Availability';
import { CodeableConcept } from './models/datatypes/CodeableConcept';
import { CodeableReference } from './models/datatypes/CodeableReference';
import { Period } from './models/datatypes/Period';
import { Coding } from './models/datatypes/Coding';
import { Meta } from './models/datatypes/Meta';
import { Extension } from './models/datatypes/Extension';
import { Identifier } from './models/datatypes/Identifier';
import { HumanName } from './models/datatypes/HumanName';
import { ExtendedContactDetail } from './models/datatypes/ExtendedContactDetail';
import { Quantity } from './models/datatypes/Quantity';
import { Duration } from './models/datatypes/Duration';
import { ContactPoint } from './models/datatypes/ContactPoint';
import { Attachment } from './models/datatypes/Attachment';
import { VirtualServiceDetail } from './models/datatypes/VirtualServiceDetail';

export const generateInstanceDatatype = (resourceType: DatatypeTypeR4, data: any) => {
  switch (resourceType) {
    case 'Address':
      return new Address(data);
    case 'Availability':
      return new Availability(data);
    case 'CodeableConcept':
      return new CodeableConcept(data);
    case 'CodeableReference':
      return new CodeableReference(data);
    case 'Period':
      return new Period(data);
    case 'Coding':
      return new Coding(data);
    case 'Meta':
      return new Meta(data);
    case 'Reference':
      //TODO - this is a hack, but it works for now
      return new Extension(data);
    case 'Identifier':
      return new Identifier(data);
    case 'HumanName':
      return new HumanName(data);
    case 'Extension':
      return new Extension(data);
    case 'ExtendedContactDetail':
      return new ExtendedContactDetail(data);
    case 'Quantity':
      return new Quantity(data);
    case 'Duration':
      return new Duration(data);
    case 'ContactPoint':
      return new ContactPoint(data);
    case 'Attachment':
      return new Attachment(data);
    case 'VirtualServiceDetail':
      return new VirtualServiceDetail(data);
    default:
      throw new Error(`Datatype ${resourceType} not supported`);
  }
};
