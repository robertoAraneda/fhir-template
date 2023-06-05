import { HumanNameBuilder } from '../../src/r5/builders/datatypes';
import { IHumanName } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';

describe('HumanName', () => {
  let validator: IValidatorContext;
  let builder: HumanNameBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new HumanNameBuilder();
  });

  it('should be able to create a new humanname and validate with correct data', async () => {
    const dataType: IHumanName = {
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

    const validate = await validator.HumanName(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new humanname and validate with wrong data', async () => {
    const dataType = {
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

    const validate = await validator.HumanName(dataType);

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

  it('should be able to create a new identifier using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setUse('official')
      .addGiven('Peter')
      .addGiven('James')
      .setFamily('Windsor')
      .setPeriod({ end: '2002' })
      .addHumanNameParamExtension('given', [
        {
          extension: [
            {
              url: 'url',
              valueCode: 'valueCode',
            },
          ],
        },
      ])
      .addHumanNameParamExtension('family', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/humanname-mothers-family',
            valueString: 'White',
          },
        ],
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
  });
});
