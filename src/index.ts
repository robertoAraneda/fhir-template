import { FhirContextR5 } from './r5';
import { DataType as DTR5, DatatypeTypeR5 } from './r5/GlobalDatatypes';
import { ResourceType as RTR5, ResourceTypeR5 } from './r5/GlobalResourceTypes';
import { DataType as DTR4, DatatypeTypeR4 } from './r4/GlobalDatatypes';
import { ResourceType as RTR4, ResourceTypeR4 } from './r4/GlobalResourceTypes';
import { DataType as DTR4B, DatatypeTypeR4B } from './r4b/GlobalDatatypes';
import { ResourceType as RTR4B, ResourceTypeR4B } from './r4b/GlobalResourceTypes';
import { FhirContextR4 } from './r4';
import { FhirContextR4B } from './r4b';

class FHIRContext {
  forR5() {
    return {
      builders: new FhirContextR5().getBuilders(),
      validators: new FhirContextR5().getValidator(),
      createResource: <T extends ResourceTypeR5>(resourceType: T, data: RTR5<T>) => {
        return new FhirContextR5().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR5>(datatypeType: T, data: DTR5<T>) => {
        return new FhirContextR5().createDatatype<T>(datatypeType, data);
      },
    };
  }
  forR4() {
    return {
      builders: new FhirContextR4().getBuilders(),
      validators: new FhirContextR4().getValidator(),
      createResource: <T extends ResourceTypeR4>(resourceType: T, data: RTR4<T>) => {
        return new FhirContextR4().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR4>(datatypeType: T, data: DTR4<T>) => {
        return new FhirContextR4().createDatatype<T>(datatypeType, data);
      },
    };
  }

  forR4B() {
    return {
      builders: new FhirContextR4B().getBuilders(),
      validators: new FhirContextR4B().getValidator(),
      createResource: <T extends ResourceTypeR4>(resourceType: T, data: RTR4B<T>) => {
        return new FhirContextR4B().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR4>(datatypeType: T, data: DTR4B<T>) => {
        return new FhirContextR4B().createDatatype<T>(datatypeType, data);
      },
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
