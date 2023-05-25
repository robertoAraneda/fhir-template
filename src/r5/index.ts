import { PatientR5 } from './resources/Patient';
export class FhirContextR5 {
  public Patient() {
    return new PatientR5();
  }
}
