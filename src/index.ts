import FhirContextR5 from './r5';

class FHIRTemplateResource {
  createContext(version: string) {
    if (version === 'R5' || version === 'r5') {
      return FhirContextR5;
    }
    return FhirContextR5;
  }
}

const template = new FHIRTemplateResource();
export = {
  createContext: template.createContext,
};
