import FHIRContext from '../../../src';
import { AttachmentBuilder } from '../../../src/r4/builders/datatypes';
import { Attachment } from '../../../src/r4/models/datatypes';
import { IAttachment } from '../../../src/r4/interfaces/datatypes';

describe('Attachment FHIR R4', () => {
  let builder: AttachmentBuilder;
  let builderFromFunction: AttachmentBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new AttachmentBuilder();
    builderFromFunction = Builder.dataTypes.AttachmentBuilder();
  });

  it('should be able to validate a new attachment [createDatatype]', async () => {
    const item = createDatatype('Attachment', {
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: 'application/pdf',
    });

    const validate = await Validator.dataTypes.Attachment(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await Validator.dataTypes.Attachment(item);
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

    const validate = await Validator.dataTypes.Attachment(item);

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

    expect(item).toEqual({
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

  it('should be able to create a new attachment using builder methods [builders.dataTypes.AttachmentBuilder()]', async () => {
    const item = builderFromFunction
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

    expect(item).toEqual({
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

    const validate = await Validator.dataTypes.Attachment(item);
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
