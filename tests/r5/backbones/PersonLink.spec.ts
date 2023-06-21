import { IPersonLink } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PersonLinkBuilder from '../../../src/r5/models/backbones/PersonLinkBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

describe('PersonLink FHIR R5', () => {
  const { PersonLink } = new FHIRContext().forR5();
  let builder: PersonLinkBuilder;

  // create global
  beforeEach(() => {
    builder = PersonLink.builder();
  });

  it('should be able to create a new person_link payload and validate with correct data [IPersonLink]', async () => {
    const item: IPersonLink = {
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

    const validate = await _validateBackbone(item, 'Person_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new person_link payload and validate with correct data [new PersonLink()]', async () => {
    const item = new PersonLink({
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
    });

    const validate = await _validateBackbone(item, 'Person_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new person_link payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
      wrongProperty: 'test', // wrong property
    };

    const validate = await _validateBackbone(item, 'Person_Link');

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

  it('should be able to create a new person_link payload using builder methods [new PersonLinkBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setTarget({
        reference: 'Patient/123',
      })
      .addParamExtension('assurance', {
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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
      target: {
        reference: 'Patient/123',
      },
    });

    const validate = await _validateBackbone(item, 'Person_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
