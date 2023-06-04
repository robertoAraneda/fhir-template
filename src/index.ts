import FhirContextR5 from './r5';

enum FhirVersion {
  R5 = 'R5',
  r5 = 'r5',
}

class FHIRTemplateResource {
  createContext(version: 'R5' | 'r5' | FhirVersion = 'R5') {
    if (version === 'R5' || version === 'r5') {
      return FhirContextR5;
    }
    return FhirContextR5;
  }
}

const template = new FHIRTemplateResource();
export = {
  createContext: template.createContext,
  FhirVersion,
};
