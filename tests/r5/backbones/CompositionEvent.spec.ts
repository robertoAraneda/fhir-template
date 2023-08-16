import FHIRContext from '../../../src';
import CompositionEventBuilder from '../../../src/r5/models/backbones/CompositionEventBuilder';
import { CompositionEventValidator } from '../../../src/r5/models/backbones/CompositionEventValidator';
import ICompositionEvent from '../../../src/r5/interfaces/backbones/ICompositionEvent';
import { CodeableReference, Reference } from '../../../src/r5/models/datatypes';

describe('CompositionEvent FHIR R5', () => {
  let builder: CompositionEventBuilder;
  const { CompositionEvent } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = CompositionEvent.builder();
  });

  it('should be able to validate a new composition_event [new CompositionEvent()]', async () => {
    const item = new CompositionEvent({
      id: '123',
      period: {
        start: '2020-01-01T00:00:00.000Z',
        end: '2020-01-01T00:00:00.000Z',
      },
      detail: [
        {
          reference: {
            reference: 'Observation/id',
          },
        },
      ],
    });
    expect(item).toBeDefined();
  });

  it('should be able to validate a new composition_event [ICompositionEvent]', async () => {
    const item: ICompositionEvent = {
      id: '123',
      period: {
        start: '2020-01-01T00:00:00.000Z',
        end: '2020-01-01T00:00:00.000Z',
      },
      detail: [
        {
          reference: {
            reference: 'Observation/id',
          },
        },
      ],
    };

    expect(() => CompositionEventValidator(item)).not.toThrow();
  });

  it('should be able to create a new composition_event using builder methods [CompositionEvent.builder()]', async () => {
    const item = builder
      .setId('123')
      .setPeriod({
        start: '2020-01-01T00:00:00.000Z',
        end: '2020-01-01T00:00:00.000Z',
      })
      .addDetail(new CodeableReference({ reference: new Reference({ reference: 'Observation/id' }) }))
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      detail: [
        {
          reference: {
            reference: 'Observation/id',
          },
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
          reference: {
            reference: '/id', // Wrong reference format
          },
        },
      ],
    };

    expect(() => CompositionEventValidator(item as ICompositionEvent)).toThrowError(
      'ReferenceException: [value=/id]. Reference must be in the format {ResourceType}/{id}. Path: CompositionEvent.detail[0].reference.reference',
    );
  });

  it('should be get errors validators if new composition_event has wrong references resource', async () => {
    const item = {
      id: '123',
      detail: [
        {
          reference: {
            reference: 'WrongReference/id', // Wrong reference
          }, // Wrong reference
        },
      ],
    };

    expect(() => CompositionEventValidator(item as ICompositionEvent)).toThrowError(
      'ReferenceException: [value=WrongReference]. ResourceType can be any FHIR resource type. Path: CompositionEvent.detail[0].reference.reference',
    );
  });
});
