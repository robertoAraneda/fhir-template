import { FhirContextR5 } from './r5';
import { Identifier } from './r5/datatypes/Identifier';
import { Organization } from './r5/resources/Organization';
import { Period } from './r5/datatypes/Period';
import { Reference } from './r5/datatypes/Reference';
import { Patient } from './r5/resources/Patient';
import { HumanNameBuilder } from './r5/builders/HumanNameBuilder';

class FHIRTemplateResource {
  createContext(version: string) {
    if (version === 'R5' || version === 'r5') {
      return new FhirContextR5();
    }
    return new Error('Unsupported FHIR version');
  }
}

const template = new FHIRTemplateResource();
export = {
  createContext: template.createContext,
  HumanNameBuilder: HumanNameBuilder,
};
