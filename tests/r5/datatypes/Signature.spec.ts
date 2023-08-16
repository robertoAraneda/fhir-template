import { ISignature } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import { SignatureBuilder } from '../../../src/r5/models/datatypes/SignatureBuilder';
import { SignatureValidator } from '../../../src/r5/models/datatypes/SignatureValidator';

describe('Signature FHIR R5', () => {
  let builder: SignatureBuilder;

  const { Signature } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Signature.builder();
  });

  it('should be able to create a new signature and validate with correct data [new Signature()]', async () => {
    const item = new Signature({
      id: 'test',
      who: {
        reference: 'Patient/123',
      },
      type: [
        {
          code: 'test',
          system: 'test',
        },
      ],
      when: '2021-01-01T00:00:00.000Z',
    });
    expect(item).toBeDefined();
  });

  it('should be able to create a new signature and validate with correct data [ISignature]', async () => {
    const item: ISignature = {
      id: 'test',
      who: {
        reference: 'Patient/123',
      },
      type: [
        {
          code: 'test',
          system: 'test',
        },
      ],
      when: '2021-01-01T00:00:00.000Z',
    };

    expect(() => SignatureValidator(item)).not.toThrow();
  });

  it('should be able to validate a new signature and validate with wrong data', async () => {
    const item = {
      id: 'test',
      who: {
        reference: 'Patient/123',
      },
      type: [
        {
          code: 'test',
          system: 'test',
        },
      ],
      when: '2021-01-01T00:00:00.000Z',
      test: 'test', // wrong property
    };

    expect(() => SignatureValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for Signature",
    );
  });

  it('should be able to create a new attachment using builder methods [new SignatureBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .addType({ code: 'code' })
      .setWho({ reference: 'Patient/123' })
      .setWhen('2021-01-01T00:00:00.000Z')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      id: '123',
      type: [
        {
          code: 'code',
        },
      ],
      when: '2021-01-01T00:00:00.000Z',
      who: {
        reference: 'Patient/123',
      },
    });
  });
});
