import FHIRContext from '../../../src';
import { IEndpointPayload } from '../../../src/r5/interfaces/backbones';
import EndpointPayloadBuilder from '../../../src/r5/models/backbones/EndpointPayloadBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

describe('EndpointPayload FHIR R5', () => {
  const { EndpointPayload } = new FHIRContext().forR5();
  let builder: EndpointPayloadBuilder;

  // create global
  beforeEach(() => {
    builder = EndpointPayload.builder();
  });

  it('should be able to create a new endpoint payload and validate with correct data [IEndpointPayload]', async () => {
    const item: IEndpointPayload = {
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

    const validate = await _validateBackbone(item, 'Endpoint_Payload');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new endpoint payload and validate with correct data [new EndpointPayload()]', async () => {
    const item = new EndpointPayload({
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
    });

    const validate = await _validateBackbone(item, 'Endpoint_Payload');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new endpoint payload and validate with wrong data', async () => {
    const item = {
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

    const validate = await _validateBackbone(item, 'Endpoint_Payload');

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

  it('should be able to create a new endpoint payload using builder methods [new EndpointPayloadBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
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
      .addParamExtension('mimeType', [
        {
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/endpoint-mimeType',
              valueId: '1221',
            },
          ],
        },
      ])
      .build();

    const validate = await _validateBackbone(item, 'Endpoint_Payload');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _mimeType: [
        {
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/endpoint-mimeType',
              valueId: '1221',
            },
          ],
        },
      ],
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
