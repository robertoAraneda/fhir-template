import { IAttachment } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import { AttachmentBuilder } from '../../src/r5/builders/datatypes';
import FHIRContext from '../../src';

describe('Attachment', () => {
  let validator: IValidatorContext;
  let builder: AttachmentBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new AttachmentBuilder();
  });

  it('should be able to create a new attachment and validate with correct data', async () => {
    const dataType: IAttachment = {
      id: '123',
      url: 'http://hl7.org/fhir/sid/us-npi',
      contentType: 'test',
      language: 'test',
      data: 'test',
      size: 1,
      hash: 'test',
      title: 'test',
      creation: '2020-01-01',
      width: 1,
      height: 1,
      frames: 1,
      duration: 1,
      pages: 1,
      _creation: {
        extension: [
          {
            url: 'test',
            valueDate: '2020-01-01',
          },
        ],
      },
    };

    const validate = await validator.dataTypes.Attachment(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new attachment and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      url: 'http://hl7.org/fhir/sid/us-npi',
      contentType: 'test',
      language: 'test',
      data: 'test',
      size: 1,
      hash: 'test',
      title: 'test',
      creation: '2020',
      width: 1,
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.Attachment(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'test' },
        message: 'must NOT have additional properties',
      },
    ]);
  });

  it('should be able to create a new attachment using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setCreation('2020-01-01')
      .setContentType('test')
      .setData('test')
      .setHash('test')
      .setHeight(1)
      .setId('123')
      .setLanguage('test')
      .setPages(1)
      .setSize(1)
      .addAttachmentParamExtension('pages', {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _pages: {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      },
      contentType: 'test',
      creation: '2020-01-01',
      data: 'test',
      hash: 'test',
      height: 1,
      id: '123',
      language: 'test',
      pages: 1,
      size: 1,
    });
  });
});
