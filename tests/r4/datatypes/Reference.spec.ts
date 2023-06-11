import { IReference } from '../../../src/r4/interfaces/datatypes';
import { ReferenceBuilder } from '../../../src/r4/builders/datatypes';
import FHIRContext from '../../../src';
import { Reference } from '../../../src/r4/models/datatypes';
import { Patient } from '../../../src/r4/models/resources';

describe('Reference FHIR R4', () => {
  let builder: ReferenceBuilder;
  let builderFromFunction: ReferenceBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new ReferenceBuilder();
    builderFromFunction = Builder.dataTypes.ReferenceBuilder();
  });

  it('should be able to create a new reference and validate with correct data [createDatatype()]', async () => {
    const item = createDatatype('Reference', {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
    });

    const validate = await Validator.dataTypes.Reference(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new reference and validate with correct data [new Reference()]', async () => {
    const item = new Reference({
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
    });

    const validate = await Validator.dataTypes.Reference(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new reference and validate with correct data [IReference]', async () => {
    const item: IReference = {
      reference: 'Patient/1',
      display: 'test',
      type: 'Patient',
    };

    const validate = await Validator.dataTypes.Reference(item);

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

    const validate = await Validator.dataTypes.Reference(item);

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

    expect(item).toBeDefined();
    expect(item).toEqual({
      display: 'test',
      reference: 'Patient/1',
      type: 'Patient',
    });
  });

  it('should be able to create a new attachment using builder methods [Builder.dataTypes.ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction
      .setType('Patient')
      .setDisplay('test')
      .setReference(
        new Patient({
          id: '2',
          resourceType: 'Patient',
        }),
      )
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      display: 'test',
      reference: 'Patient/2',
      type: 'Patient',
    });
  });
});
