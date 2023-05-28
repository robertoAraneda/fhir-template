import { Reference } from '../datatypes/Reference';
import { PatientInterface } from './PatientInterface';
import { Patient } from '../resources/Patient';

export interface LinkPatient {
  other: Reference<Patient>;
  type: string;
}
