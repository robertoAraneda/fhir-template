import { IIdentifier } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { IdentifierBuilder } from '../../../src/r4/models/datatypes/IdentifierBuilder';
import { IdentifierValidator } from '../../../src/r4/models/datatypes/IdentifierValidator';

describe('Identifier FHIR R4', () => {
  let builder: IdentifierBuilder;
  const { Identifier } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Identifier.builder();
  });

  it('should be able to create a new identifier and validate with correct data [new Identifier()]', async () => {
    const item = new Identifier({
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new identifier and validate with correct data [IIdentifier]', async () => {
    const item: IIdentifier = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
    };

    expect(() => IdentifierValidator(item, 'Identifier')).not.toThrow();
  });

  it('should be validate: Malformed assigner reference', async () => {
    const item: IIdentifier = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'malformed reference',
      },
    };

    expect(() => IdentifierValidator(item, 'Identifier')).toThrow(
      'ReferenceException: [value=malformed reference]. Reference must be in the format {ResourceType}/{id}. Path: Identifier.assigner.reference',
    );
  });

  it('should be validate: Malformed assigner reference', async () => {
    const item: IIdentifier = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'WrongResourceType/id',
      },
    };

    expect(() => IdentifierValidator(item, 'Identifier')).toThrow(
      'ReferenceException: [value=WrongResourceType]. ResourceType must be one of the following: [Organization]. Path: Identifier.assigner.reference',
    );
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
      test: 'test', // wrong property
    };

    expect(() => IdentifierValidator(item as IIdentifier, 'Identifier')).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for Identifier",
    );
  });

  it('should be able to create a new identifier using builder methods [new IdentifierBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      assigner: {
        reference: 'Organization/123',
      },
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      system: 'http://hl7.org/fhir/sid/us-npi',
      use: 'official',
      value: '1234567890',
    });
  });
});
