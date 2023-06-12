import { BackboneElementValidator, Wait } from './validators/BackboneElementValidator';
import { DataTypesValidator } from './validators/ElementValidator';
import { ResourceValidator } from './validators/ResourceValidator';
import { ResourceBuilder } from './ResourceBuilder';
import { ElementBuilder } from './ElementBuilder';
import { BackboneElementBuilder } from './BackboneElementBuilder';
import { ParseDataTypeR4, DatatypeTypeR4, IDatatypeValidatorProperties } from './GlobalDatatypes';
import {
  BackboneElementTypeR4,
  ParseBackboneElementTypeR4,
  IBackboneElementValidatorProperties,
} from './GlobalBackboneElements';
import { IResourceValidatorProperties, ParseResourceTypeR4, ResourceTypeR4 } from './GlobalResourceTypes';
import { generateInstanceDatatype } from './InstanceBuilderDatatype';
import { generateInstanceResource } from './InstanceBuilderResource';
import { generateInstanceBackboneElement } from './InstanceBuilderBackboneElement';

export interface IValidatorContext {
  backboneElements: IBackboneElementValidatorProperties;
  dataTypes: IDatatypeValidatorProperties;
  resources: IResourceValidatorProperties;
}

export class FhirContextR4 {
  createResource<T extends ResourceTypeR4>(resourceType: T, data?: ParseResourceTypeR4<T>) {
    return generateInstanceResource(resourceType, data) as ParseResourceTypeR4<T>;
  }

  createDatatype<T extends DatatypeTypeR4>(datatypeType: T, d: ParseDataTypeR4<T>) {
    return generateInstanceDatatype(datatypeType, d) as ParseDataTypeR4<T>;
  }

  createBackboneElement<T extends BackboneElementTypeR4>(backboneType: T, data?: ParseBackboneElementTypeR4<T>) {
    return generateInstanceBackboneElement(backboneType, data) as ParseBackboneElementTypeR4<T>;
  }
  public getBuilders() {
    return {
      backboneElements: BackboneElementBuilder,
      dataTypes: ElementBuilder,
      resources: ResourceBuilder,
    };
  }

  public getValidator(): IValidatorContext {
    return {
      backboneElements: BackboneElementValidator,
      dataTypes: DataTypesValidator,
      resources: ResourceValidator,
    };
  }
}
