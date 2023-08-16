import { AttributeHelperDefinitionR5 } from '../../globals/helpers/generateListAttributesHelper';
import InvalidFieldException from '../../globals/exceptions/InvalidFieldException';
import { Validator, ValidatorType } from './ValidatorDefinitionR5';
import { IElement, IResource } from '../interfaces/base';
import { ElementValidator } from '../models/base/ElementValidator';
import { IAddress } from '../interfaces/datatypes';
import { AddressValidator } from '../models/datatypes/AddressValidator';

export const ValidatorHelperR5 = <T extends {}>(
  payload: T,
  elements: ReadonlyArray<AttributeHelperDefinitionR5<T, ValidatorType>>,
  path: string,
) => {
  elements.forEach((element) => {
    // validate additional fields

    if (element.type === 'Resource') {
      const data = payload[element.name] as IResource;
      if (data) {
        // @ts-ignore
        const validator = Validator[data.resourceType] as (data: any, path: string) => void;
        if (validator) {
          validator(data, `${path}.${String(element.name)}`);
        } else {
          console.warn("Resource validator doesn't exist", data.resourceType);
        }
      }
    } else {
      const payloadProperties = Object.keys(payload);
      const additionalFields = payloadProperties.filter((property) => {
        return !elements.find((element) => element.name === property);
      });

      if (additionalFields.length) {
        throw new InvalidFieldException(path, additionalFields.join(', '));
        //throw new Error(`Additional fields are not allowed in ${path}: ${additionalFields.join(', ')}`);
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
      const payloadArray = payload[element.name] as Array<any>;
      if (element.type === 'Element') {
        const data = payloadArray as Array<IElement>;
        data.forEach((item: IElement, index: number) => {
          ElementValidator(item, `${path}.${String(element.name)}[${index}]`);
        });
      } else if (element.type === 'Reference') {
        const validator = Validator[element.type] as (data: any, resources: any, path: string) => void;

        const data = payload[element.name];
        validator(data, element.referenceValues, `${path}.${String(element.name)}`);
      } else if (element.type === 'Address') {
        const data = payload[element.name] as Array<IAddress>;
        data.forEach((item: IAddress, index: number) => {
          AddressValidator(item, `${path}.${String(element.name)}[${index}]`);
        });
      } else {
        const validator = Validator[element.type] as (data: any, path: string) => void;

        if (validator) {
          payloadArray.forEach((item: any, index: number) => {
            validator(item, `${path}.${String(element.name)}[${index}]`);
          });
        } else {
          console.warn("Validator doesn't exist", element.type);
        }
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

    //validate fields
    if (payload[element.name]) {
      if (element.type === 'Reference') {
        const validator = Validator[element.type] as (data: any, resources: any, path: string) => void;

        const data = payload[element.name];
        validator(data, element.referenceValues, `${path}.${String(element.name)}`);
      } else if (element.type === 'Element') {
        const data = payload[element.name];
        ElementValidator(data as IElement, `${path}.${String(element.name)}`);
      } else if (element.type === 'Resource') {
        const data = payload[element.name] as IResource;

        // @ts-ignore
        const validator = Validator[data.resourceType] as (data: any, path: string) => void;

        if (validator) {
          validator(data, `${path}.${String(element.name)}`);
        } else {
          console.warn("Resource validator doesn't exist", data.resourceType);
        }
        //TODO: validate resource
      } else if (element.type === 'Address') {
        const data = payload[element.name] as IAddress;
        AddressValidator(data, `${path}.${String(element.name)}`);
      } else {
        const validator = Validator[element.type] as (data: any, path: string) => void;

        if (validator) {
          const data = payload[element.name];
          validator(data, `${path}.${String(element.name)}`);
        } else {
          console.warn("Validator doesn't exist", element.type);
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
