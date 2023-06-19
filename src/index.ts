import { FhirContextR5 } from './r5';
import { ParseDataTypeR5, DataTypeR5 } from './r5/GlobalDatatypes';
import { ParseResourceTypeR5, ResourceTypeR5 } from './r5/GlobalResourceTypes';
import { ParseDataTypeR4, DatatypeTypeR4 } from './r4/GlobalDatatypes';
import { ParseResourceTypeR4, ResourceTypeR4 } from './r4/GlobalResourceTypes';
import { FhirContextR4 } from './r4';
import { BackboneElementTypeR4, ParseBackboneElementTypeR4 } from './r4/GlobalBackboneElements';
import { BackboneElementTypeR5, ParseBackboneElementTypeR5 } from './r5/GlobalBackboneElements';
import { IBundle } from './r4/interfaces/resources/IBundle';
import { Bundle, Patient, Person, Practitioner } from './r4/models/resources';
import { IPatient, IPerson } from './r4/interfaces/resources';

import { IBundleEntry, IBundleEntryRequest, IBundleEntryResponse, IBundleEntrySearch } from './r4/interfaces/backbones';
import { IAddress, IContactPoint } from './r4/interfaces/datatypes';
import { BundleEntry, BundleEntryRequest, BundleEntryResponse, BundleEntrySearch } from './r4/models/backbones';
import { Address, ContactPoint } from './r4/models/datatypes';

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

      createResource: <T extends ResourceTypeR4>(resourceType: T, data: ParseResourceTypeR4<T>) => {
        return new FhirContextR4().createResource<T>(resourceType, data);
      },
      createDatatype: <T extends DatatypeTypeR4>(datatypeType: T, data: ParseDataTypeR4<T>) => {
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
