import { Reference } from '../datatypes/Reference';
import { Patient } from '../resources/Patient';
import { LinkType } from '../enums/LinkType';
import { LinkTypeType } from '../types/LinkTypeType';
import { BackboneElement } from '../datatypes/BackboneElement';
import { Organization } from '../resources/Organization';

export class PatientLink extends BackboneElement {
  other: Reference<Patient | string>;
  type: LinkType | LinkTypeType;

  constructor(args?: Partial<PatientLink>) {
    super();
    Object.assign(this, args);

    if (args) {
      if (!(args.other?.reference instanceof Patient) && typeof args.other?.reference !== 'string') {
        throw new Error('Managing organization reference must be an instance of Patient');
      }

      if (typeof args.other?.reference === 'string' && !args.other?.reference.startsWith('Patient/')) {
        throw new Error('Managing organization reference must start with Patient/');
      }

      if (typeof args.other?.reference !== 'string') {
        const reference = args.other?.reference as Patient;
        args.other.reference = `Patient/${reference.id}`;
      }
    }
  }
}
