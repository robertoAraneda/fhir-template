import { PatientR5 } from './resources/Patient';
export class FhirContextR5 {
  constructor() {}

  public Patient() {
    return new PatientR5();
  }
}
