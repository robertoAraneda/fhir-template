import { FhirContextR5 } from './r5';
import { ParseDataTypeR5, DataTypeR5 } from './r5/GlobalDatatypes';
import { ParseResourceTypeR5, ResourceTypeR5 } from './r5/GlobalResourceTypes';
import { ParseDataTypeR4, DatatypeTypeR4 } from './r4/GlobalDatatypes';
import { ParseResourceTypeR4, ResourceTypeR4 } from './r4/GlobalResourceTypes';
import { FhirContextR4 } from './r4';
import { BackboneElementTypeR4, ParseBackboneElementTypeR4 } from './r4/GlobalBackboneElements';
import { BackboneElementTypeR5, ParseBackboneElementTypeR5 } from './r5/GlobalBackboneElements';

class FHIRContext {
  private r4: FhirContextR4;
  private r5: FhirContextR5;

  constructor() {
    this.r4 = new FhirContextR4();
    this.r5 = new FhirContextR5();
  }
  forR5() {
    return {
      Builder: new FhirContextR5().getBuilders(),
      Validator: new FhirContextR5().getValidator(),
      createResource: <T extends ResourceTypeR5>(resourceType: T, data: ParseResourceTypeR5<T>) => {
        return new FhirContextR5().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DataTypeR5>(datatypeType: T, data: ParseDataTypeR5<T>) => {
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
      Validator: this.r4.getValidator(),
      ...this.r4.getInstances(),
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
