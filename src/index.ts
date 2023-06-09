import { FhirContextR5 } from './r5';
import { DataType, DatatypeTypeR5 } from './r5/GlobalDatatypes';
import { ResourceType, ResourceTypeR5 } from './r5/GlobalResourceTypes';

class FHIRContext {
  forR5() {
    return {
      builders: new FhirContextR5().getBuilders(),
      validators: new FhirContextR5().getValidator(),
      createResource: <T extends ResourceTypeR5>(resourceType: T, data: ResourceType<T>) => {
        return new FhirContextR5().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR5>(datatypeType: T, data: DataType<T>) => {
        return new FhirContextR5().createDatatype<T>(datatypeType, data);
      },
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
