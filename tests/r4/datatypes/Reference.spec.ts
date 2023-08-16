import { IReference } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { ReferenceBuilder } from '../../../src/r4/models/datatypes/ReferenceBuilder';
import { ReferenceValidator } from '../../../src/r4/models/datatypes/ReferenceValidator';

describe('Reference FHIR R4', () => {
  let builder: ReferenceBuilder;

  const { Reference } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Reference.builder();
  });

  it('should be able to create a new reference instance and validate with correct data [new Reference()]', async () => {
    const item = new Reference({
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
      extension: [
        {
          id: 'test-1',
          url: 'test-1',
        },
      ],
      identifier: {
        assigner: {
          reference: 'Organization/1',
        },
      },
      _type: {
        extension: [
          {
            id: 'test-1',
            url: 'test-1',
            valueString: 'test-1',
          },
        ],
      },
    });

    expect(item).toBeDefined();
    expect(item).toEqual({
      _type: {
        extension: [
          {
            id: 'test-1',
            url: 'test-1',
            valueString: 'test-1',
          },
        ],
      },
      display: 'test',
      extension: [
        {
          id: 'test-1',
          url: 'test-1',
        },
      ],
      identifier: {
        assigner: {
          reference: 'Organization/1',
        },
      },
      reference: 'Patient/1',
      type: 'Patient',
    });
  });

  it('should throw and error if reference instance has malformed reference string [new Reference()]', async () => {
    try {
      new Reference({
        reference: 'malformed reference string',
        display: 'test',
        type: 'Patient',
      });
    } catch (e: any) {
      expect(e.message).toContain('ReferenceException: [value=malformed reference string]');
    }
  });

  it('should throw and error if reference instance has malformed reference string [new Reference()]', async () => {
    try {
      new Reference({
        reference: 'malformed reference string',
        display: 'test',
        type: 'Patient',
        _type: {
          id: 'test',
          extension: [
            {
              id: 'test',
              url: 'test',
              valueString: 'test',
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain('ReferenceException: [value=malformed reference string]');
    }
  });

  it('should throw and error if extension have extensions and value[x] [_type]', async () => {
    try {
      new Reference({
        _type: {
          extension: [
            {
              id: 'test',
              url: 'test',
              valueString: 'test',
              extension: [],
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain(
        'ConstraintException: [Extension] must have either extensions or value[x], not both for Reference._type.extension[0]',
      );
    }
  });

  it('should throw and error if extension dont have a url or _url field [_type]', async () => {
    try {
      new Reference({
        _type: {
          extension: [
            {
              id: 'test', // missing url or _url
              url: 'test',
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain('Invalid Extension: "Extension.url or Extension._url is required"');
    }
  });

  it('should throw and error if extension have extensions and value[x] [_reference]', async () => {
    try {
      new Reference({
        _reference: {
          extension: [
            {
              id: 'test',
              url: 'test',
              valueString: 'test',
              extension: [],
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain(
        'ConstraintException: [Extension] must have either extensions or value[x], not both for Reference._reference.extension[0]',
      );
    }
  });

  it('should throw and error if extension dont have a url or _url field [_reference]', async () => {
    try {
      new Reference({
        _reference: {
          extension: [
            {
              id: 'test', // missing url or _url
              url: 'test',
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain('Invalid Extension: "Extension.url or Extension._url is required"');
    }
  });

  it('should throw and error if extension have extensions and value[x] [_display]', async () => {
    try {
      new Reference({
        _reference: {
          extension: [
            {
              id: 'test',
              url: 'test',
              valueString: 'test',
              extension: [],
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain(
        'ConstraintException: [Extension] must have either extensions or value[x], not both for Reference._reference.extension[0]',
      );
    }
  });

  it('should throw and error if extension dont have a url or _url field [_display]', async () => {
    try {
      new Reference({
        _display: {
          extension: [
            {
              id: 'test', // missing url or _url
              url: 'test',
            },
          ],
        },
      });
    } catch (e: any) {
      expect(e.message).toContain('Invalid Extension: "Extension.url or Extension._url is required"');
    }
  });

  it('should be able to create a new reference and validate with correct data [IReference]', async () => {
    const item: IReference = {
      reference: 'Organization/1',
      display: 'test',
      type: 'Patient',
    };

    expect(() => ReferenceValidator(item)).not.toThrow();
  });

  it('should be able to validate a new reference with wrong field', async () => {
    const item = {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
      wrongProperty: 'test', // wrong property
    };

    expect(() => ReferenceValidator(item as IReference)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Reference",
    );
  });

  it('should be able to validate a new reference with malformed reference string', async () => {
    const item: IReference = {
      reference: 'malformed', // wrong property
      display: 'test',
      type: 'Patient',
    };

    expect(() => ReferenceValidator(item)).toThrow('ReferenceException: [value=malformed]');
  });

  it('should be able to validate a new reference with unknown resource type', async () => {
    const item: IReference = {
      reference: 'badResourceType/id', // wrong property
      display: 'test',
      type: 'Patient',
    };

    expect(() => ReferenceValidator(item)).toThrow('ReferenceException: [value=badResourceType]');
  });

  it('should be able to validate a new reference with wrong resource type', async () => {
    const item: IReference = {
      reference: 'Organization/id', // wrong resource type
      display: 'test',
      type: 'Patient',
    };

    expect(() => ReferenceValidator(item, ['Patient'])).toThrow(
      'ReferenceException: [value=Organization]. ResourceType must be one of the following: [Patient]',
    );
  });

  it('should be able to create a new attachment using builder methods [new ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder.setType('Patient').setDisplay('test').setReference('Patient/1').build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      display: 'test',
      reference: 'Patient/1',
      type: 'Patient',
    });
  });
});
