import FHIRContext from '../../../src';
import { ICompositionEvent } from '../../../src/r4/interfaces/backbones';
import CompositionEventBuilder from '../../../src/r4/models/backbones/CompositionEventBuilder';

describe('CompositionEvent FHIR R4', () => {
  let builder: CompositionEventBuilder;
  const { CompositionEvent: Entity } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Entity.builder();
  });

  it('should be able to validate a new composition_event [new CompositionEvent()]', async () => {
    expect(
      () =>
        new Entity({
          id: '123',
          code: [
            {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '34133-9',
                  display: 'Summarization of episode note',
                },
              ],
            },
          ],
          period: {
            start: '2020-01-01T00:00:00.000Z',
            end: '2020-01-01T00:00:00.000Z',
          },
          detail: [
            {
              reference: 'Observation/id',
            },
          ],
        }),
    ).not.toThrow();
  });

  it('should be able to validate a new composition_event [ICompositionEvent]', async () => {
    const item: ICompositionEvent = {
      id: '123',
      code: [
        {
          coding: [
            {
              system: 'http://loinc.org',
              code: '34133-9',
              display: 'Summarization of episode note',
            },
          ],
        },
      ],
      period: {
        start: '2020-01-01T00:00:00.000Z',
        end: '2020-01-01T00:00:00.000Z',
      },
      detail: [
        {
          reference: 'Observation/id',
        },
      ],
    };

    expect(() => Entity.validate(item)).not.toThrow();

    /*
    
        expect(() => CompositionEvent.validate(item, 'ajv')).toThrow(
          "Invalid Backbone Element CompositionEvent: \"The value '/party/reference' does not match with datatype 'string'\"",
        );
    
         */
  });

  it('should be able to create a new composition_event using builder methods [CompositionEvent.builder()]', async () => {
    const item = builder
      .setId('123')
      .setPeriod({
        start: '2020-01-01T00:00:00.000Z',
        end: '2020-01-01T00:00:00.000Z',
      })
      .addCode({
        coding: [
          {
            system: 'http://loinc.org',
            code: '34133-9',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      code: [
        {
          coding: [
            {
              code: '34133-9',
              system: 'http://loinc.org',
            },
          ],
        },
      ],
      id: '123',
      period: {
        end: '2020-01-01T00:00:00.000Z',
        start: '2020-01-01T00:00:00.000Z',
      },
    });
  });

  it('should be get errors validators if new composition_event has wrong data', async () => {
    const item = {
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => Entity.validate(item as any, 'format')).toThrowError(
      'Invalid Backbone Element Composition_Event: "must NOT have additional properties: [wrongProperty]',
    );
  });

  it('should be get errors validators if new composition_event has wrong references format', async () => {
    const item = {
      id: '123',
      detail: [
        {
          reference: '/id', // Wrong reference
        },
      ],
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });

  it('should be get errors validators if new composition_event has wrong references resource', async () => {
    const item = {
      id: '123',
      detail: [
        {
          reference: 'WrongReference/id', // Wrong reference
        },
      ],
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });
});
