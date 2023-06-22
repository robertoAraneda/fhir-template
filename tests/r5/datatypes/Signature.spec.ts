import { ISignature } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';
import { SignatureBuilder } from '../../../src/r5/models/datatypes/SignatureBuilder';

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

    const validate = await _validateDataType(item, 'Signature');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await _validateDataType(item, 'Signature');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await _validateDataType(item, 'Signature');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'test' },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });

  it('should be able to create a new attachment using builder methods [new SignatureBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .addType({ code: 'code' })
      .setWho({ reference: 'Patient/123' })
      .setWhen('2021-01-01T00:00:00.000Z')
      .build();

    const validate = await _validateDataType(item, 'Signature');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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
