import Ajv, { ErrorObject, SchemaObject, ValidateFunction } from 'ajv';
import * as defSchema from '../schemas/base.schema.json';
import * as extensionSchema from '../schemas/extension.schema.json';
import * as datatypeSchema from '../schemas/datatypes.schema.json';
import * as backboneSchema from '../schemas/backbone.schema.json';
import * as baseResourceSchema from '../schemas/base-resource.schema.json';
import { IValidateProperties } from '../interfaces/IValidateProperties';

const ajv = new Ajv({
  allErrors: true,
  strict: false,
  schemas: [defSchema, datatypeSchema, extensionSchema, backboneSchema, baseResourceSchema],
  /*
  loadSchema: (uri) => {
    return new Promise((resolve, reject) => {
      if (uri === 'base.schema.json') {
        resolve(defSchema);
      } else if (uri === 'datatypes.schema.json') {
        resolve(datatypeSchema);
      } else if (uri === 'extension.schema.json') {
        resolve(extensionSchema);
      } else if (uri === 'backbone.schema.json') {
        resolve(backboneSchema);
      } else if (uri === 'base-resource.schema.json') {
        resolve(baseResourceSchema);
      } else {
        reject(new Error(`Unable to load schema: ${uri}`));
      }
    });
  },

   */
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

const _validate = (schema: any, data: any) => {
  const validate = ajv.compile(schema);

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

export const _validateBaseResource = (data: any, entity: string): IValidateProperties => {
  if (typeof data !== 'object') {
    throw new Error('Data must be a JSON object');
  }

  const schema = extractSchemaFromDefinition(entity, 'BaseResource');

  return _validate(schema, data);
};

export const _validateDataType = (data: any, entity: string): IValidateProperties => {
  if (typeof data !== 'object') {
    throw new Error('Data must be a JSON object');
  }

  const schema = extractSchemaFromDefinition(entity, 'DataType');

  return _validate(schema, data);
};

export const _validateBackbone = (data: any, entity: string): IValidateProperties => {
  if (typeof data !== 'object') {
    throw new Error('Data must be a JSON object');
  }

  const schema = extractSchemaFromDefinition(entity, 'BackboneElement');

  return _validate(schema, data);
};
