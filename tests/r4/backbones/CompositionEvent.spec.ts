import FHIRContext from '../../../src';
import { ICompositionEvent } from '../../../src/r4/interfaces/backbones';
import CompositionEventBuilder from '../../../src/r4/models/backbones/CompositionEventBuilder';

import { CompositionEventValidator } from '../../../src/r4/models/backbones/CompositionEventValidator';

describe('CompositionEvent FHIR R4', () => {
  let builder: CompositionEventBuilder;
  const { CompositionEvent } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = CompositionEvent.builder();
  });

  it('should be able to validate a new composition_event [new CompositionEvent()]', async () => {
    const item = new CompositionEvent({
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
    });
    expect(item).toBeDefined();
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

    expect(() => CompositionEventValidator(item)).not.toThrow();

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

    expect(() => CompositionEventValidator(item as ICompositionEvent)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for CompositionEvent",
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

    expect(() => CompositionEventValidator(item as ICompositionEvent)).toThrowError(
      'ReferenceException: [value=/id]. Reference must be in the format {ResourceType}/{id}. Path: CompositionEvent.detail[0].reference',
    );
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

    expect(() => CompositionEventValidator(item as ICompositionEvent)).toThrowError(
      'ReferenceException: [value=WrongReference]. ResourceType can be any FHIR resource type. Path: CompositionEvent.detail[0].reference',
    );
  });
});
