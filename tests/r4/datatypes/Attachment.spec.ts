import FHIRContext from '../../../src';
import { IAttachment } from '../../../src/r4/interfaces/datatypes';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';

import { AttachmentBuilder } from '../../../src/r4/models/datatypes/AttachmentBuilder';

describe('Attachment FHIR R4', () => {
  let builder: AttachmentBuilder;
  const { Attachment } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Attachment.builder();
  });

  it('should be able to validate a new attachment [new Attachment()]', async () => {
    const item = new Attachment({
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: 'application/pdf',
    });

    const validate = await _validateDataType(item, 'Attachment');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new attachment [IAttachment]', async () => {
    const item: IAttachment = {
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: 'application/pdf',
    };

    const validate = await _validateDataType(item, 'Attachment');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new attachment using builder methods [new Attachment()]', async () => {
    const item = builder
      .setId('123')
      .setData('data')
      .setContentType('application/pdf')
      .setCreation('2020-01-01')
      .setUrl('http://example.com')
      .addParamExtension('pages', {
        extension: [
          {
            url: 'pages',
            valueString: 'pages',
          },
        ],
      })
      .build();

    const validate = await _validateDataType(item, 'Attachment');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      id: '123',
      _pages: {
        extension: [
          {
            url: 'pages',
            valueString: 'pages',
          },
        ],
      },
      contentType: 'application/pdf',
      creation: '2020-01-01',
      data: 'data',
      url: 'http://example.com',
    });
  });

  it('should be get errors validators if new attachment has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrong',
    };

    const validate = await _validateDataType(item, 'Attachment');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
