import { FhirContextR5 } from './r5';

class FHIRContext {
  forR5() {
    return FhirContextR5;
  }
}

export default FHIRContext;
module.exports = FHIRContext;

export * from '../src/r5/resources';
export * from '../src/r5/interfaces';
export * from '../src/r5/builders';
