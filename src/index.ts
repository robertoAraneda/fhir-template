import { FhirContextR5 } from './r5';
import { FhirContextR4 } from './r4';

class FHIRContext {
  private readonly r4: FhirContextR4;
  private readonly r5: FhirContextR5;

  constructor() {
    this.r4 = new FhirContextR4();
    this.r5 = new FhirContextR5();
  }
  forR5() {
    return {
      ...this.r5.getInstances(),
      Validator: this.r5.getValidator(),
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
