import { IHumanName } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import HumanNameBuilder from '../../../src/r5/models/datatypes/HumanNameBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('HumanName FHIR R5', () => {
  let builder: HumanNameBuilder;
  const { HumanName } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = new HumanNameBuilder();
  });

  it('should be able to create a new humanname and validate with correct data [new HumanName()]', async () => {
    const item = new HumanName({
      use: 'maiden',
      family: 'Windsor',
      given: ['Peter', 'James'],
      period: {
        end: '2002',
      },
      _use: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueCode: 'test',
          },
        ],
      },
    });

    const validate = await _validateDataType(item, 'HumanName');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new humanname and validate with correct data [IHumanName]', async () => {
    const item: IHumanName = {
      use: 'maiden',
      family: 'Windsor',
      given: ['Peter', 'James'],
      period: {
        end: '2002',
      },
      _use: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueCode: 'test',
          },
        ],
      },
    };

    const validate = await _validateDataType(item, 'HumanName');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new humanname and validate with wrong data', async () => {
    const item = {
      test: 'test', // wrong property
      use: 'wrong use', // wrong property
      family: 'Windsor',
      given: ['Peter', 'James'],
      period: {
        end: '2002',
      },
      _use: {
        extension: [
          {
            id: 'test',
            url: 'test',
            valueCode: 'test',
          },
        ],
      },
    };

    const validate = await _validateDataType(item, 'HumanName');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'test' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/use',
        keyword: 'enum',
        message: 'must be equal to one of the allowed values',
        params: { allowedValues: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'] },
        schemaPath: '#/properties/use/enum',
      },
    ]);
  });

  it('should be able to create a new identifier using builder methods [new HumanNameBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setUse('official')
      .addGiven('Peter')
      .addGiven('James')
      .setFamily('Windsor')
      .setPeriod({ end: '2002' })
      .addParamExtension('given', [
        {
          extension: [
            {
              url: 'url',
              valueCode: 'valueCode',
            },
          ],
        },
      ])
      .addParamExtension('family', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/humanname-mothers-family',
            valueString: 'White',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _family: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/humanname-mothers-family',
            valueString: 'White',
          },
        ],
      },
      family: 'Windsor',
      given: ['Peter', 'James'],
      _given: [
        {
          extension: [
            {
              url: 'url',
              valueCode: 'valueCode',
            },
          ],
        },
      ],
      period: {
        end: '2002',
      },
      use: 'official',
    });

    const validate = await _validateDataType(item, 'HumanName');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
