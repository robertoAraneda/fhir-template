import { INotAvailableTime } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import NotAvailableTimeBuilder from '../../../src/r5/models/datatypes/NotAvailableTimeBuilder';
import { Period } from '../../../src/r5/models/datatypes';
import { NotAvailableTimeValidator } from '../../../src/r5/models/datatypes/NotAvailableTimeValidator';

describe('NotAvailableTime FHIR R5', () => {
  let builder: NotAvailableTimeBuilder;

  const { NotAvailableTime } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = NotAvailableTime.builder();
  });

  it('should be able to create a new not available time and validate with correct data [new NotAvailableTime()]', async () => {
    const item = new NotAvailableTime({
      description: 'test',
      during: {
        start: '2023-01-01',
        end: '2024-01-01',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new not available time and validate with correct data [INotAvailableTime]', async () => {
    const item: INotAvailableTime = {
      id: '123',

      _description: {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      },
    };

    expect(() => NotAvailableTimeValidator(item)).not.toThrow();
  });

  it('should be able to validate a new not available time and validate with wrong data', async () => {
    const item = {
      id: '123',
      test: 'test', // wrong property
    };

    expect(() => NotAvailableTimeValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for NotAvailableTime",
    );
  });

  it('should be able to create a new not available time using builder methods [new NotAvailableTimeBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setDescription('test')
      .setDuring(
        new Period({
          start: '2023-01-01',
          end: '2024-01-01',
        }),
      )
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      id: '123',
      description: 'test',
      during: {
        start: '2023-01-01',
        end: '2024-01-01',
      },
    });
  });
});
