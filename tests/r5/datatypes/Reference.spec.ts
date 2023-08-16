import { IOrganization } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import { IReference } from '../../../src/r5/interfaces/datatypes';
import ReferenceBuilder from '../../../src/r5/models/datatypes/ReferenceBuilder';
import { ReferenceValidator } from '../../../src/r5/models/datatypes/ReferenceValidator';

describe('Reference FHIR R5', () => {
  let builder: ReferenceBuilder;
  const { Reference } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Reference.builder();
  });

  it('should be able to create a new reference and validate with correct data [new Reference()]', async () => {
    const item = new Reference({
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new reference and validate with correct data [IReference]', async () => {
    const item: IReference = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
    };

    expect(() => ReferenceValidator(item)).not.toThrow();
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
      test: 'test', // wrong property
    };

    expect(() => ReferenceValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for Reference",
    );
  });

  it('should be able to create a new reference using builder methods [new ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setType('official')
      .setReference('Organization/123')
      .setDisplay('Organization display')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({ type: 'official', display: 'Organization display', reference: 'Organization/123' });
  });

  it('should return errors if reference has wrong data', async () => {
    try {
      builder
        .setType('official')
        .setReference('Organization/123')
        .setIdentifier({
          period: {
            start: '2020-01-01 HH:MM:SS',
            end: '2020-01-02',
          },
        })
        .setDisplay('Organization display')
        .build();
    } catch (e: any) {
      expect(e.message).toEqual('Invalid dateTime: 2020-01-01 HH:MM:SS at path: Reference.identifier.period.start');
    }
  });

  it('should be able to create a new reference as resource with builder methods', async () => {
    const organization: IOrganization = {
      resourceType: 'Organization',
      id: '123',
    };
    const item = new ReferenceBuilder().setReference(organization).setDisplay('Organization display').build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      reference: 'Organization/123',
      display: 'Organization display',
    });
  });
});
