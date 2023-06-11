import Ajv, { ErrorObject, SchemaObject, ValidateFunction } from 'ajv';
import * as defSchema from '../schemas/r4base.schema.json';
import * as extensionSchema from '../schemas/r4extension.schema.json';
import * as datatypeSchema from '../schemas/r4datatypes.schema.json';
import * as backboneSchema from '../schemas/r4backbone.schema.json';
import * as baseResourceSchema from '../schemas/r4base-resource.schema.json';
import { IValidateProperties } from '../../globals/interfaces';

const ajv = new Ajv({
  allErrors: true,
  strict: false,
  loadSchema: (uri) => {
    return new Promise((resolve, reject) => {
      switch (uri) {
        case 'r4base.schema.json':
          resolve(defSchema);
          break;
        case 'r4datatypes.schema.json':
          resolve(datatypeSchema);
          break;
        case 'r4extension.schema.json':
          resolve(extensionSchema);
          break;
        case 'r4backbone.schema.json':
          resolve(backboneSchema);
          break;
        case 'r4base-resource.schema.json':
          resolve(baseResourceSchema);
          break;
        default:
          reject(new Error(`Unable to load schema: ${uri}`));
      }
    });
  },
});

const extractSchemaFromDefinition = (definition: string, schemaName: string) => {
  let schema: SchemaObject = defSchema;

  if (schemaName === 'DataType') {
    schema = datatypeSchema;
  } else if (schemaName === 'BackboneElement') {
    schema = backboneSchema;
  } else if (schemaName === 'BaseResource') {
    schema = baseResourceSchema;
  }

  return schema.definitions[definition];
};

const _validate = async (schema: any, data: any) => {
  const validate = await ajv.compileAsync(schema);

  const valid = validate(data);

  return {
    isValid: valid,
    errors: validate.errors?.map((e: any) => {
      if (e.keyword === 'pattern') {
        const [hash, definition, dataType, pattern] = e.schemaPath.split('/');

        return {
          keyword: e.keyword,
          instancePath: e.instancePath,
          message: `The value '${e.instancePath}' does not match with datatype '${dataType}'`,
          params: {
            value: e.instancePath,
          },
          schemaPath: e.schemaPath,
        };
      }

      return e;
    }),
  };
};

export const _validateBaseResource = async (data: any, entity: string): Promise<IValidateProperties> => {
  if (typeof data !== 'object') {
    throw new Error('Data must be a JSON object');
  }

  const schema = extractSchemaFromDefinition(entity, 'BaseResource');

  return _validate(schema, data);
};

export const _validateDataType = async (data: any, entity: string): Promise<IValidateProperties> => {
  if (typeof data !== 'object') {
    throw new Error('Data must be a JSON object');
  }

  const schema = extractSchemaFromDefinition(entity, 'DataType');

  return _validate(schema, data);
};

export const _validateBackbone = async (data: any, entity: string): Promise<IValidateProperties> => {
  if (typeof data !== 'object') {
    throw new Error('Data must be a JSON object');
  }

  const schema = extractSchemaFromDefinition(entity, 'BackboneElement');

  return _validate(schema, data);
};
