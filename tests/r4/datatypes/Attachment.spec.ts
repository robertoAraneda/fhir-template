import FHIRContext from '../../../src';
import { IAttachment } from '../../../src/r4/interfaces/datatypes';
import { AttachmentBuilder } from '../../../src/r4/models/datatypes/AttachmentBuilder';
import { AttachmentValidator } from '../../../src/r4/models/datatypes/AttachmentValidator';

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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new attachment [IAttachment]', async () => {
    const item: IAttachment = {
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: 'application/pdf',
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    };

    expect(() => AttachmentValidator(item)).not.toThrowError();
  });

  it('should be able to validate a multiple attachment', async () => {
    const item1 = {
      id: '123',
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    };
    const item2: IAttachment = {
      id: '123',
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    };
    const item3: IAttachment = {
      id: '123',
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    };

    expect(() => AttachmentValidator([item1, item2, item3])).not.toThrowError();
  });

  it('should be able to create a new attachment using builder methods [new Attachment()]', async () => {
    const item = builder
      .setId('123')
      .setData('data')
      .setContentType('application/pdf')
      .setCreation('2020-01-01')
      .setUrl('http://example.com')
      .addParamExtension('url', {
        extension: [
          {
            url: 'pages',
            valueString: 'pages',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      id: '123',
      _url: {
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

    expect(() => AttachmentValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Attachment",
    );
  });

  it('should be get errors validators If the Attachment has data, it SHALL have a contentType (att-1)', async () => {
    const item: IAttachment = {
      id: '123',
      url: 'http://example.com',
      data: 'data',
      title: 'title',
      language: 'en',
      contentType: undefined, // missing contentType
      _data: {
        extension: [
          {
            id: 'data',
            url: 'data',
            valueString: 'data',
          },
        ],
      },
    };

    expect(() => AttachmentValidator(item)).toThrow(
      'ConstraintException: [Attachment] If the Attachment has data, it SHALL have a contentType (att-1)',
    );
  });
});
