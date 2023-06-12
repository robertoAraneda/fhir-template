import { FhirContextR5 } from './r5';
import { DataType as DTR5, DatatypeTypeR5 } from './r5/GlobalDatatypes';
import { ResourceType as RTR5, ResourceTypeR5 } from './r5/GlobalResourceTypes';
import { ParseDataTypeR4 as DTR4, DatatypeTypeR4 } from './r4/GlobalDatatypes';
import { ParseResourceTypeR4 as RTR4, ResourceTypeR4 } from './r4/GlobalResourceTypes';
import { FhirContextR4 } from './r4';
import { BackboneElementTypeR4, ParseBackboneElementTypeR4 } from './r4/GlobalBackboneElements';
import { BackboneElementTypeR5, ParseBackboneElementTypeR5 } from './r5/GlobalBackboneElements';

class FHIRContext {
  forR5() {
    return {
      Builder: new FhirContextR5().getBuilders(),
      Validator: new FhirContextR5().getValidator(),
      createResource: <T extends ResourceTypeR5>(resourceType: T, data: RTR5<T>) => {
        return new FhirContextR5().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR5>(datatypeType: T, data: DTR5<T>) => {
        return new FhirContextR5().createDatatype<T>(datatypeType, data);
      },

      createBackboneElement: <T extends BackboneElementTypeR5>(
        backboneType: T,
        data: ParseBackboneElementTypeR5<T>,
      ) => {
        return new FhirContextR5().createBackboneElement<T>(backboneType, data);
      },
    };
  }
  forR4() {
    return {
      Builder: new FhirContextR4().getBuilders(),
      Validator: new FhirContextR4().getValidator(),
      createResource: <T extends ResourceTypeR4>(resourceType: T, data: RTR4<T>) => {
        return new FhirContextR4().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR4>(datatypeType: T, data: DTR4<T>) => {
        return new FhirContextR4().createDatatype<T>(datatypeType, data);
      },

      createBackboneElement: <T extends BackboneElementTypeR4>(
        backboneType: T,
        data: ParseBackboneElementTypeR4<T>,
      ) => {
        return new FhirContextR4().createBackboneElement<T>(backboneType, data);
      },
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
