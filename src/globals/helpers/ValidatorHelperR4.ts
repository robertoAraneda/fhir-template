import { AttributeHelperDefinitionR4 } from './generateListAttributesHelper';
import { ValidatorType, Validator } from './ValidatorDefinitionR4';
import InvalidFieldException from '../exceptions/InvalidFieldException';
import { ElementValidator } from '../../r4/models/base/ElementValidator';
import { IElement as IElementR4, IResource as IResourceR4 } from '../../r4/interfaces/base';

export const ValidatorHelperR4 = <T extends {}>(
  payload: T,
  elements: ReadonlyArray<AttributeHelperDefinitionR4<T, ValidatorType>>,
  path: string,
) => {
  elements.forEach((element) => {
    // validate additional fields

    if (element.type === 'Resource') {
      const data = payload[element.name] as IResourceR4;
      if (data) {
        // @ts-ignore
        const validator = Validator[data.resourceType] as (data: any, path: string) => void;
        if (validator) {
          validator(data, `${path}.${String(element.name)}`);
        }
        /*
        else {
          console.warn("Resource validator doesn't exist", data.resourceType);
        }

         */
      }
    } else {
      const payloadProperties = Object.keys(payload);
      const additionalFields = payloadProperties.filter((property) => {
        return !elements.find((_element) => _element.name === property);
      });

      if (additionalFields.length) {
        throw new InvalidFieldException(path, additionalFields.join(', '));
        // throw new Error(`Additional fields are not allowed in ${path}: ${additionalFields.join(', ')}`);
      }
    }

    // validate required fields
    if (element.isRequired && !hasValue(payload[element.name])) {
      throw new Error(`Missing required field ${String(element.name)} in ${path}`);
    }

    // validate array fields
    if (element.isArray && payload[element.name] && !Array.isArray(payload[element.name])) {
      throw new Error(`Field ${String(element.name)} must be an array in ${path}`);
    }

    if (element.isArray && payload[element.name] && Array.isArray(payload[element.name])) {
      const payloadArray = payload[element.name] as any[];
      if (element.type === 'Reference') {
        const validator = Validator[element.type] as (data: any, resources: any, path: string) => void;

        const data = payload[element.name];
        validator(data, element.referenceValues, `${path}.${String(element.name)}`);
      } else {
        const validator = Validator[element.type] as (data: any, path: string) => void;

        payloadArray.forEach((item: any, index: number) => {
          validator(item, `${path}.${String(element.name)}[${index}]`);
        });
      }

      if (element.isRequired && payloadArray.length === 0) {
        throw new Error(
          `Field '${String(element.name)}' must have at least one item in path: '${path}.${String(element.name)}'`,
        );
      }

      if (element.enumValues && payloadArray.length > 0) {
        payloadArray.forEach((item: string, index: number) => {
          if (!element.enumValues?.includes(item)) {
            throw new Error(
              `Field must be one of [${element.enumValues?.join(', ')}] in ${path}.${String(element.name)}[${index}]`,
            );
          }
        });
      }
    }

    // validate fields
    if (payload[element.name]) {
      if (element.type === 'Reference') {
        const validator = Validator[element.type] as (data: any, resources: any, path: string) => void;

        const data = payload[element.name];
        validator(data, element.referenceValues, `${path}.${String(element.name)}`);
      } else if (element.type === 'Element') {
        const data = payload[element.name];
        ElementValidator(data as IElementR4, `${path}.${String(element.name)}`);
      } else if (element.type === 'Resource') {
        const data = payload[element.name] as IResourceR4;

        // @ts-ignore
        const validator = Validator[data.resourceType] as (data: any, path: string) => void;

        if (validator) {
          validator(data, `${path}.${String(element.name)}`);
        }
        /*
        else {
          console.warn("Resource validator doesn't exist", data.resourceType);
        }

         */
      } else {
        const validator = Validator[element.type] as (data: any, path: string) => void;
        if (validator) {
          const data = payload[element.name];
          validator(data, `${path}.${String(element.name)}`);
        }
      }
    }

    // validate enum fields
    if (element.enumValues && payload[element.name] && !element.isArray) {
      const data = payload[element.name] as string;

      if (!element.enumValues.includes(data)) {
        throw new Error(`Field must be one of [${element.enumValues.join(', ')}] in ${path}.${String(element.name)}`);
      }
    }
  });
};

function hasValue(value: any): boolean {
  return value !== null && value !== undefined;
}
