import FHIRContext from '../../src';
import { IValidatorContext } from '../../src/r5';
import { EndpointPayloadBuilder } from '../../src/r5/builders/backbones';
import { IEndpointPayload } from '../../src/r5/interfaces/backbones';

describe('EndpointPayload', () => {
  let validator: IValidatorContext;
  let builder: EndpointPayloadBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new EndpointPayloadBuilder();
  });

  it('should be able to create a new endpoint payload and validate with correct data', async () => {
    const dataType: IEndpointPayload = {
      id: '123',
      type: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/endpoint-payload-type',
              code: 'any',
              display: 'Any',
            },
          ],
        },
      ],
    };

    const validate = await validator.EndpointPayload(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new endpoint payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      type: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/endpoint-payload-type',
              code: 'any',
              display: 'Any',
            },
          ],
        },
      ],
      test: 'test', // wrong property
    };

    const validate = await validator.EndpointPayload(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'test' },
        message: 'must NOT have additional properties',
      },
    ]);
  });

  it('should be able to create a new endpoint payload using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .addType({
        coding: [
          {
            code: 'any',
            display: 'Any',
            system: 'http://hl7.org/fhir/endpoint-payload-type',
          },
        ],
      })
      .addEndpointPayloadParamExtension('mimeType', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/endpoint-mimeType',
            valueId: '1221',
          },
        ],
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _mimeType: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/endpoint-mimeType',
            valueId: '1221',
          },
        ],
      },
      id: '123',
      type: [
        {
          coding: [
            {
              code: 'any',
              display: 'Any',
              system: 'http://hl7.org/fhir/endpoint-payload-type',
            },
          ],
        },
      ],
    });
  });
});
