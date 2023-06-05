import { BackboneTypeR5, DatatypeTypeR5, FhirContextR5, IValidatorContext, ResourceTypeR5 } from './r5';

class FHIRContext {
  forR5() {
    return {
      createResource: <T extends ResourceTypeR5>(resourceType: T) => {
        return new FhirContextR5().createResource<T>(resourceType);
      },
      createResourceWithBuilder: <T extends ResourceTypeR5>(resourceType: T) => {
        return new FhirContextR5().createResourceWithBuilder<T>(resourceType);
      },
      createBackboneElementWithBuilder: <T extends BackboneTypeR5>(resourceType: T) => {
        return new FhirContextR5().createBackboneElementWithBuilder<T>(resourceType);
      },
      createDataTypeWithBuilder: <T extends DatatypeTypeR5>(resourceType: T) => {
        return new FhirContextR5().createDatatypeWithBuilder<T>(resourceType);
      },
      validators: new FhirContextR5().getValidator(),
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
