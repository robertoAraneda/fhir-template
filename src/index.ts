import { FhirContextR5, ResourceTypeR5 } from './r5';
import { DatatypeTypeR5 } from './r5/GlobalDatatypes';

class FHIRContext {
  forR5() {
    return {
      builders: new FhirContextR5().getBuilders(),
      validators: new FhirContextR5().getValidator(),
      createResource: <T extends ResourceTypeR5>(resourceType: T) => {
        return new FhirContextR5().createResource<T>(resourceType);
      },
      createDatatype: <T extends DatatypeTypeR5>(datatypeType: T) => {
        return new FhirContextR5().createDatatype<T>(datatypeType);
      },
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
