import { IAttachment } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import AttachmentBuilder from '../../../src/r5/models/datatypes/AttachmentBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('Attachment FHIR R5', () => {
  let builder: AttachmentBuilder;

  const { Attachment } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Attachment.builder();
  });

  it('should be able to create a new attachment and validate with correct data [new Attachment()]', async () => {
    const item = new Attachment({
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
    });

    const validate = await _validateDataType(item, 'Attachment');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new attachment and validate with correct data [IAttachment]', async () => {
    const item: IAttachment = {
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

    const validate = await _validateDataType(item, 'Attachment');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new attachment and validate with wrong data', async () => {
    const item = {
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

    const validate = await _validateDataType(item, 'Attachment');

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

  it('should be able to create a new attachment using builder methods [new AttachmentBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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

    const validate = await _validateDataType(item, 'Attachment');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
