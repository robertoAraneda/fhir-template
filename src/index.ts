import { FhirContextR5 } from './r5';
import { FhirContextR4 } from './r4';

class FHIRContext {
  private r4: FhirContextR4;
  private r5: FhirContextR5;

  forR5() {
    this.r5 = new FhirContextR5();
    return {
      ...this.r5.getInstances(),
      Validator: this.r5.getValidator(),
    };
  }
  forR4() {
    this.r4 = new FhirContextR4();
    return {
      Validator: this.r4.getValidator(),
      ...this.r4.getInstances(),
    };
  }
}

module.exports = exports = FHIRContext;
Object.defineProperty(exports, '__esModule', { value: true });

export default FHIRContext;
