import { IExtendedContactDetail } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import ExtendedContactDetailBuilder from '../../../src/r5/models/datatypes/ExtendedContactDetailBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('ExtendedContactDetail FHIR R5', () => {
  let builder: ExtendedContactDetailBuilder;
  const { ExtendedContactDetail } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = ExtendedContactDetail.builder();
  });

  it('should be able to create a new contact point and validate with correct data [new ExtendedContactDetail()]', async () => {
    const item = new ExtendedContactDetail({
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

    const validate = await _validateDataType(item, 'ExtendedContactDetail');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [IExtendedContactDetail]', async () => {
    const item: IExtendedContactDetail = {
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

    const validate = await _validateDataType(item, 'ExtendedContactDetail');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
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

    const validate = await _validateDataType(item, 'ExtendedContactDetail');

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
    const item = builder
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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
    const validate = await _validateDataType(item, 'ExtendedContactDetail');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
