import { IReference } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { IReferenceBuilder } from '../../../src/r4/models/datatypes/Reference';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';

describe('Reference FHIR R4', () => {
  let builder: IReferenceBuilder;

  const { Reference } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Reference.builder();
  });

  it('should be able to create a new reference and validate with correct data [new Reference()]', async () => {
    const item = new Reference({
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
    });

    const validate = await _validateDataType(item, 'Reference');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new reference and validate with correct data [IReference]', async () => {
    const item: IReference = {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
    };

    const validate = await _validateDataType(item, 'Reference');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
      wrongProperty: 'test',
    };

    const validate = await _validateDataType(item, 'Reference');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });

  it('should be able to create a new attachment using builder methods [new ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder.setType('Patient').setDisplay('test').setReference('Patient/1').build();

    const validate = await _validateDataType(item, 'Reference');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
      display: 'test',
      reference: 'Patient/1',
      type: 'Patient',
    });
  });
});
