import { IMeta } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import MetaBuilder from '../../../src/r5/models/datatypes/MetaBuilder';
import { MetaValidator } from '../../../src/r5/models/datatypes/MetaValidator';

describe('Meta FHIR R5', () => {
  let builder: MetaBuilder;
  const { Meta } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Meta.builder();
  });

  it('should be able to create a new meta and validate with correct data [new Meta()]', async () => {
    const item = new Meta({
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      profile: ['test'],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030-06-02T12:00:00.000Z',
      versionId: 'test',
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new meta and validate with correct data [IMeta]', async () => {
    const item: IMeta = {
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030-06-02T12:00:00.000Z',
      versionId: 'test',
    };

    expect(() => MetaValidator(item)).not.toThrow();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const item = {
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030', // wrong date
      versionId: 'test',
      wrongProperty: 'test', // wrong property
    };

    expect(() => MetaValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Meta",
    );
  });

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .addProfile('http://hl7.org/fhir/us/core/StructureDefinition/patient')
      .addSecurity({ system: 'test', code: 'test' })
      .addTag({ code: '123', system: 'http://hl7.org/fhir/sid/us-npi' })
      .setLastUpdated('2030-06-02T12:00:00.000Z')
      .setSource('test')
      .setVersionId('test')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      source: 'test',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      versionId: 'test',
      lastUpdated: '2030-06-02T12:00:00.000Z',
      profile: ['http://hl7.org/fhir/us/core/StructureDefinition/patient'],
      security: [
        {
          system: 'test',
          code: 'test',
        },
      ],
    });
  });
});
