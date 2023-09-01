import {
  IBackboneElement as IBackboneElementR4,
  IDomainResource as IDomainResourceR4,
  IElement as IElementR4,
  IResource as IResourceR4,
} from '../../r4/interfaces/base';
import IDomainResourceR5 from '../../r5/interfaces/base/IDomainResource';
import IBackboneElementR5 from '../../r5/interfaces/base/IBackboneElement';
import IElementR5 from '../../r5/interfaces/base/IElement';
import IResourceR5 from '../../r5/interfaces/base/IResource';
import { ValidatorType as ValidatorTypeR4 } from '../../r4/validators/ValidatorDefinitionR4';
import { ValidatorType as ValidatorTypeR5 } from '../../r5/validators/ValidatorDefinitionR5';
import { ResourceTypeR4FromArray } from '../../r4/GlobalResourceTypes';
import { ResourceTypeR5FromArray } from '../../r5/GlobalResourceTypes';

export type AttributeHelperDefinitionR4<T, U> = {
  name: keyof T;
  type: keyof U;
  isRequired: boolean;
  isArray: boolean;
  enumValues?: string[];
  referenceValues?: ResourceTypeR4FromArray[] | 'all' | null;
};

export type AttributeHelperDefinitionR5<T, U> = {
  name: keyof T;
  type: keyof U;
  isRequired: boolean;
  isArray: boolean;
  enumValues?: string[];
  referenceValues?: ResourceTypeR5FromArray[] | 'all' | null;
};

export function DataTypeAttributesHelperR4<T extends IElementR4>(
  array: ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorTypeR4>>,
): ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorTypeR4>> {
  return array.concat([
    {
      isRequired: false,
      isArray: false,
      name: 'id',
      type: 'string',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'extension',
      type: 'Extension',
    },
  ]);
}

export function DataTypeAttributesHelperR5<T extends IElementR5>(
  array: ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorTypeR5>>,
): ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorTypeR5>> {
  return array.concat([
    {
      isRequired: false,
      isArray: false,
      name: 'id',
      type: 'string',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'extension',
      type: 'Extension',
    },
  ]);
}

export function BackboneAttributesHelperR4<T extends IBackboneElementR4>(
  array: ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorTypeR4>>,
): ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorTypeR4>> {
  return array.concat([
    {
      isRequired: false,
      isArray: false,
      name: 'id',
      type: 'string',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'extension',
      type: 'Extension',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'modifierExtension',
      type: 'Extension',
    },
  ]);
}

export function BackboneAttributesHelperR5<T extends IBackboneElementR5>(
  array: ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorTypeR5>>,
): ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorTypeR5>> {
  return array.concat([
    {
      isRequired: false,
      isArray: false,
      name: 'id',
      type: 'string',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'extension',
      type: 'Extension',
    },
    {
      isRequired: false,
      isArray: true,
      name: 'modifierExtension',
      type: 'Extension',
    },
  ]);
}

export function ResourceAttributesHelperR4<T extends IDomainResourceR4 & IResourceR4>(
  array: ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorTypeR4>>,
): ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorTypeR4>> {
  return array.concat([
    {
      name: 'id',
      type: 'string',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'meta',
      type: 'Meta',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'implicitRules',
      type: 'uri',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'language',
      type: 'code',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'text',
      type: 'Narrative',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'contained',
      type: 'Resource',
      isRequired: false,
      isArray: true,
    },
    {
      name: 'extension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
    {
      name: 'modifierExtension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
    {
      name: '_implicitRules',
      type: 'Element',
      isRequired: false,
      isArray: false,
    },
    {
      name: '_language',
      type: 'Element',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'resourceType',
      type: 'code',
      isRequired: false,
      isArray: false,
    },
  ]);
}

export function ResourceAttributesHelperR5<T extends IDomainResourceR5 & IResourceR5>(
  array: ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorTypeR5>>,
): ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorTypeR5>> {
  return array.concat([
    {
      name: 'id',
      type: 'string',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'meta',
      type: 'Meta',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'implicitRules',
      type: 'uri',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'language',
      type: 'code',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'text',
      type: 'Narrative',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'contained',
      type: 'Resource',
      isRequired: false,
      isArray: true,
    },
    {
      name: 'extension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
    {
      name: 'modifierExtension',
      type: 'Extension',
      isRequired: false,
      isArray: true,
    },
    {
      name: '_implicitRules',
      type: 'Element',
      isRequired: false,
      isArray: false,
    },
    {
      name: '_language',
      type: 'Element',
      isRequired: false,
      isArray: false,
    },
    {
      name: 'resourceType',
      type: 'code',
      isRequired: false,
      isArray: false,
    },
  ]);
}
