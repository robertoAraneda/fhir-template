import FHIRContext from '../../../src';
import { ICompositionRelatesTo } from '../../../src/r4/interfaces/backbones';
import CompositionRelatesToBuilder from '../../../src/r4/models/backbones/CompositionRelatesToBuilder';

import { CompositionRelatesToValidator } from '../../../src/r4/models/backbones/CompositionRelatesToValidator';

describe('CompositionRelatesTo FHIR R4', () => {
  let builder: CompositionRelatesToBuilder;
  const { CompositionRelatesTo } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = CompositionRelatesTo.builder();
  });

  it('should be able to validate a new composition_relates_to [new CompositionRelatesTo()]', () => {
    const item = new CompositionRelatesTo({
      id: '123',
      code: 'signs',
      targetIdentifier: {
        system: 'http://example.org/fhir/NamingSystem/document-ids',
        value: '1234567',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new composition_relates_to [ICompositionRelatesTo]', () => {
    const item: ICompositionRelatesTo = {
      id: '123',
      code: 'signs',
      targetIdentifier: {
        system: 'http://example.org/fhir/NamingSystem/document-ids',
        value: '1234567',
      },
    };

    expect(() => CompositionRelatesToValidator(item)).not.toThrow();
  });

  it('should be able to create a new composition_relates_to using builder methods [CompositionRelatesTo.builder()]', () => {
    const item = builder
      .setId('123')
      .setCode('appends')
      .setTargetReference({
        reference: 'Composition/1234567',
        type: 'Composition',
        display: 'Composition',
      })
      .addParamExtension('code', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      _code: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueDate: '2020-01-01',
          },
        ],
      },
      code: 'appends',
      id: '123',
      targetReference: {
        display: 'Composition',
        reference: 'Composition/1234567',
        type: 'Composition',
      },
    });
  });

  it('should be get errors validators if new composition_relates_to has wrong data', () => {
    const item = {
      code: 'wrongCode', // Wrong code
      targetReference: {
        reference: 'Composition/1234567',
      },
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => CompositionRelatesToValidator(item as ICompositionRelatesTo)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for CompositionRelatesTo",
    );
  });

  it('should be get errors validators if new composition_relates_to has wrong references format', () => {
    const item = {
      id: '123',
      code: 'code',
      targetReference: {
        reference: '/1234567',
      },
    };

    expect(() => CompositionRelatesToValidator(item as ICompositionRelatesTo)).toThrowError(
      'ReferenceException: [value=/1234567]. Reference must be in the format {ResourceType}/{id}. Path: CompositionRelatesTo.targetReference.reference',
    );
  });

  it('should be get errors validators if new composition_relates_to has wrong references resource', () => {
    const item = {
      id: '123',
      code: 'code',
      targetReference: {
        reference: 'Patient/1234567',
      },
    };

    expect(() => CompositionRelatesToValidator(item as ICompositionRelatesTo)).toThrowError(
      'ReferenceException: [value=Patient]. ResourceType must be one of the following: [Composition]. Path: CompositionRelatesTo.targetReference.reference',
    );
  });

  it('should be get errors validators if new composition_relates_to has no code or _code', () => {
    const item = {
      id: '123',
      targetReference: {
        reference: 'Patient/1234567',
      },
    };

    expect(() => CompositionRelatesToValidator(item as ICompositionRelatesTo)).toThrowError(
      'Missing required field code in CompositionRelatesTo',
    );
  });
});
