import { BackboneTypeR5, DatatypeTypeR5, FhirContextR5, IValidatorContext, ResourceTypeR5 } from './r5';

class FHIRContext {
  forR5() {
    return {
      builders: new FhirContextR5().getBuilders(),
      validators: new FhirContextR5().getValidator(),
      createResource: <T extends ResourceTypeR5>(resourceType: T) => {
        return new FhirContextR5().createResource<T>(resourceType);
      },
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
