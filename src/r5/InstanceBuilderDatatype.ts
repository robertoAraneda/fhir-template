import { DatatypeTypeR5 } from './GlobalDatatypes';
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

export const generateInstanceDatatype = (resourceType: DatatypeTypeR5, d: any) => {
  switch (resourceType) {
    case 'Address':
      return new Address(d);
    case 'Availability':
      return new Availability(d);
    case 'CodeableConcept':
      return new CodeableConcept(d);
    case 'CodeableReference':
      return new CodeableReference(d);
    case 'Period':
      return new Period(d);
    case 'Coding':
      return new Coding(d);
    case 'Meta':
      return new Meta(d);
    case 'Reference':
      //TODO - this is a hack, but it works for now
      return new Extension(d);
    case 'Identifier':
      return new Identifier(d);
    case 'HumanName':
      return new HumanName(d);
    case 'Extension':
      return new Extension(d);
    case 'ExtendedContactDetail':
      return new ExtendedContactDetail(d);
    case 'Quantity':
      return new Quantity(d);
    case 'Duration':
      return new Duration(d);
    case 'ContactPoint':
      return new ContactPoint(d);
    case 'Attachment':
      return new Attachment(d);
    default:
      throw new Error(`Datatype ${resourceType} not supported`);
  }
};
