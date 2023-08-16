import FHIRContext from '../../../src';
import { IEndpointPayload } from '../../../src/r5/interfaces/backbones';
import EndpointPayloadBuilder from '../../../src/r5/models/backbones/EndpointPayloadBuilder';
import { EndpointPayloadValidator } from '../../../src/r5/models/backbones/EndpointPayloadValidator';

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
    expect(item).toBeDefined();
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

    expect(() => EndpointPayloadValidator(item)).not.toThrow();
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

    expect(() => EndpointPayloadValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for EndpointPayload",
    );
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
