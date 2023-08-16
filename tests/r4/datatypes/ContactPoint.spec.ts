import { IContactPoint } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { ContactPointBuilder } from '../../../src/r4/models/datatypes/ContactPointBuilder';
import { ContactPointValidator } from '../../../src/r4/models/datatypes/ContactPointValidator';

describe('ContactPoint FHIR R4', () => {
  let builder: ContactPointBuilder;
  const { ContactPoint } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = ContactPoint.builder();
  });

  it('should be able to create a new contact point and validate with correct data [new ContactPoint()]', async () => {
    const item = new ContactPoint({
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
      extension: [
        {
          id: '123',
          url: 'http://example.com',
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new contact point and validate with correct data [IContactPoint]', async () => {
    const item: IContactPoint = {
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    };

    expect(() => ContactPointValidator(item)).not.toThrow();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 'test',
      system: 'bad system', // wrong property
      rank: 1,
      use: 'home',
      test: 'test', // wrong property
    };

    expect(() => ContactPointValidator(item as IContactPoint)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for ContactPoint",
    );
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setRank(1)
      .setSystem('url')
      .setValue('test')
      .addParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      id: '123',
      rank: 1,
      system: 'url',
      value: 'test',
      _system: {
        extension: [
          {
            id: '123',
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      },
    });
  });
});
