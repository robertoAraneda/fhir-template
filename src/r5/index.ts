import { PatientR5 } from './resources/Patient';
export class FhirContextR5 {
  public Patient(): PatientR5 {
    return new PatientR5();
  }
}
