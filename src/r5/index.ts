import { Patient } from './resources/Patient';
export class FhirContextR5 {
  public setPatient(): Patient {
    return new Patient();
  }
}
