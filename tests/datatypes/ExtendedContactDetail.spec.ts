import { ExtendedContactDetailBuilder } from '../../src/r5/builders/datatypes';
import { IExtendedContactDetail } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';
import { ExtendedContactDetail } from '../../src/r5/models/datatypes/ExtendedContactDetail';

describe('ExtendedContactDetail', () => {
  let validator: IValidatorContext;
  let builder: ExtendedContactDetailBuilder;
  let builderFromFunction: ExtendedContactDetailBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR5();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new ExtendedContactDetailBuilder();
    builderFromFunction = builders.dataTypes.ExtendedContactDetailBuilder();
  });

  it('should be able to create a new contact point and validate with correct data [createDatatype]', async () => {
    const dataType = createDatatype('ExtendedContactDetail').data({
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
    });

    const validate = await validator.dataTypes.ExtendedContactDetail(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [new ExtendedContactDetail()]', async () => {
    const dataType = new ExtendedContactDetail({
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
    });

    const validate = await validator.dataTypes.ExtendedContactDetail(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [IExtendedContactDetail]', async () => {
    const dataType: IExtendedContactDetail = {
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
    };

    const validate = await validator.dataTypes.ExtendedContactDetail(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.ExtendedContactDetail(dataType);

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

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .setAddress({
        type: 'both',
        text: 'test',
        line: ['test'],
      })
      .setPurpose({
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
      })
      .setOrganization({
        reference: 'Organization/test',
        display: 'test',
        type: 'test',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      address: {
        line: ['test'],
        text: 'test',
        type: 'both',
      },
      id: '123',
      organization: {
        display: 'test',
        reference: 'Organization/test',
        type: 'test',
      },
      purpose: {
        coding: [
          {
            code: 'test',
            system: 'test',
          },
        ],
      },
    });
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setId('123')
      .setAddress({
        type: 'both',
        text: 'test',
        line: ['test'],
      })
      .setPurpose({
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
      })
      .setOrganization({
        reference: 'Organization/test',
        display: 'test',
        type: 'test',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      address: {
        line: ['test'],
        text: 'test',
        type: 'both',
      },
      id: '123',
      organization: {
        display: 'test',
        reference: 'Organization/test',
        type: 'test',
      },
      purpose: {
        coding: [
          {
            code: 'test',
            system: 'test',
          },
        ],
      },
    });
  });
});
