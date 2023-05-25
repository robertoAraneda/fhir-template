import { FhirContextR5 } from './r5';
import { Identifier } from './r5/datatypes/Identifier';
import { OrganizationR5 } from './r5/resources/Organization';
import { Period } from './r5/datatypes/Period';
import { Reference } from './r5/datatypes/Reference';

class FHIRTemplateResource {
  createContext(version: string) {
    if (version === 'R5' || version === 'r5') {
      return new FhirContextR5();
    }
    return new Error('Unsupported FHIR version');
  }
}

export = {
  FHIRTemplateResource,
  Identifier,
  Period,
  Reference,
  Organization: OrganizationR5,
};
