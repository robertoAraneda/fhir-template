import { IHumanName } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import HumanNameBuilder from '../../../src/r5/models/datatypes/HumanNameBuilder';
import { HumanNameValidator } from '../../../src/r5/models/datatypes/HumanNameValidator';

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

    expect(item).toBeDefined();
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

    expect(() => HumanNameValidator(item)).not.toThrow();
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

    expect(() => HumanNameValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for HumanName",
    );
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
  });
});
