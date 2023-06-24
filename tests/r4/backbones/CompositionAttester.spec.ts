import FHIRContext from '../../../src';
import { ICompositionAttester } from '../../../src/r4/interfaces/backbones';
import CompositionAttesterBuilder from '../../../src/r4/models/backbones/CompositionAttesterBuilder';

describe('CompositionAttester FHIR R4', () => {
  let builder: CompositionAttesterBuilder;
  const { CompositionAttester: Entity } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Entity.builder();
  });

  it('should be able to validate a new composition_attester [new CompositionAttester()]', async () => {
    expect(
      () =>
        new Entity({
          id: '123',
          mode: 'legal',
          party: {
            reference: 'RelatedPerson/id',
          },
          time: '2020-01-01T00:00:00.000Z',
        }),
    ).not.toThrow();
  });

  it('should be able to validate a new composition_attester [ICompositionAttester]', async () => {
    const item: ICompositionAttester = {
      id: '123',
      mode: 'legal',
      party: {
        reference: 'Patient/id',
      },
      time: '2020-01-01T00:00:00.000Z',
    };

    expect(() => Entity.validate(item)).not.toThrow();

    /*

    expect(() => CompositionAttester.validate(item, 'ajv')).toThrow(
      "Invalid Backbone Element CompositionAttester: \"The value '/party/reference' does not match with datatype 'string'\"",
    );

     */
  });

  it('should be able to create a new composition_attester using builder methods [CompositionAttester.builder()]', async () => {
    const item = builder
      .setId('123')
      .setTime('2020-01-01T00:00:00.000Z')
      .setMode('official')
      .setParty({
        reference: 'Patient/123',
      })
      .build();

    expect(item).toEqual({
      id: '123',
      mode: 'official',
      party: {
        reference: 'Patient/123',
      },
      time: '2020-01-01T00:00:00.000Z',
    });
  });

  it('should be get errors validators if new composition_attester has wrong data', async () => {
    const item = {
      time: 'wrong date format', // Wrong date format
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => Entity.validate(item as any, 'format')).toThrowError(
      "Invalid Backbone Element Composition_Attester: \"must NOT have additional properties: [wrongProperty], The value '/time' does not match with datatype 'dateTime'\"",
    );
  });

  it('should be get errors validators if new composition_attester has wrong references format', async () => {
    const item = {
      id: '123',
      mode: 'legal',
      party: {
        reference: 'RelatedPerson', // Wrong format
      },
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });

  it('should be get errors validators if new composition_attester has wrong references resource', async () => {
    const item = {
      id: '123',
      mode: 'legal',
      party: {
        reference: 'WrongResource/id', // WrongResource
      },
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });
});
