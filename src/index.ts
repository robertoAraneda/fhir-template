import { FhirContextR5 } from './r5';

class FHIRTemplateResource {
  constructor() {}

  createContext(version: string) {
    if (version === 'R5' || version === 'r5') {
      return new FhirContextR5();
    }
    return new Error('Unsupported FHIR version');
  }
}
