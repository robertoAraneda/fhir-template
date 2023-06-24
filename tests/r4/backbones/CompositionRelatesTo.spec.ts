import FHIRContext from '../../../src';
import { ICompositionRelatesTo } from '../../../src/r4/interfaces/backbones';
import CompositionRelatesToBuilder from '../../../src/r4/models/backbones/CompositionRelatesToBuilder';

describe('CompositionRelatesTo FHIR R4', () => {
  let builder: CompositionRelatesToBuilder;
  const { CompositionRelatesTo: Entity } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Entity.builder();
  });

  it('should be able to validate a new composition_relates_to [new CompositionRelatesTo()]', async () => {
    expect(
      () =>
        new Entity({
          id: '123',
          code: 'signs',
          targetIdentifier: {
            system: 'http://example.org/fhir/NamingSystem/document-ids',
            value: '1234567',
          },
          targetReference: {
            reference: 'DocumentReference/1234567',
          },
        }),
    ).not.toThrow();
  });

  it('should be able to validate a new composition_relates_to [ICompositionRelatesTo]', async () => {
    const item: ICompositionRelatesTo = {
      id: '123',
      code: 'signs',
      targetIdentifier: {
        system: 'http://example.org/fhir/NamingSystem/document-ids',
        value: '1234567',
      },
      targetReference: {
        reference: 'DocumentReference/1234567',
      },
    };

    expect(() => Entity.validate(item)).not.toThrow();
  });

  it('should be able to create a new composition_relates_to using builder methods [CompositionRelatesTo.builder()]', async () => {
    const item = builder
      .setId('123')
      .setCode('appends')
      .setTargetIdentifier({
        value: '1234567',
        system: 'http://example.org/fhir/NamingSystem/document-ids',
      })
      .setTargetReference({
        reference: 'Composition/1234567',
        type: 'Composition',
        display: 'Composition',
      })
      .addParamExtension('code', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueDate: '2020-01-01T00:00:00.000Z',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _code: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueDate: '2020-01-01T00:00:00.000Z',
          },
        ],
      },
      code: 'appends',
      id: '123',
      targetIdentifier: {
        system: 'http://example.org/fhir/NamingSystem/document-ids',
        value: '1234567',
      },
      targetReference: {
        display: 'Composition',
        reference: 'Composition/1234567',
        type: 'Composition',
      },
    });
  });

  it('should be get errors validators if new composition_relates_to has wrong data', async () => {
    const item = {
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => Entity.validate(item as any, 'format')).toThrowError(
      'Invalid Backbone Element Composition_RelatesTo: "must NOT have additional properties: [wrongProperty]',
    );
  });

  it('should be get errors validators if new composition_relates_to has wrong references format', async () => {
    const item = {
      id: '123',
      targetReference: {
        reference: '/1234567',
      },
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });

  it('should be get errors validators if new composition_relates_to has wrong references resource', async () => {
    const item = {
      id: '123',
      targetReference: {
        reference: 'Patient/1234567',
      },
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });
});
