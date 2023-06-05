import { IPersonLink } from '../../src/r5/interfaces/backbones';
import { PersonLinkBuilder } from '../../src/r5/builders/backbones';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';

describe('PersonLink', () => {
  let validator: IValidatorContext;
  let builder: PersonLinkBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new PersonLinkBuilder();
  });

  it('should be able to create a new person_link payload and validate with correct data', async () => {
    const dataType: IPersonLink = {
      id: '123',
      target: {
        reference: 'test',
      },
      assurance: 'level1', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    };

    const validate = await validator.PersonLink(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new person_link payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
      wrongProperty: 'test', // wrong property
    };

    const validate = await validator.PersonLink(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'target'",
        params: { missingProperty: 'target' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });

  it('should be able to create a new person_link payload using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .addPersonLinkParamExtension('assurance', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      })
      .addExtension({
        url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
        valueString: 'Jane Doe',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _assurance: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
          valueString: 'Jane Doe',
        },
      ],
    });
  });
});
