import { IPatientLink } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PatientLinkBuilder from '../../../src/r5/models/backbones/PatientLinkBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

describe('PatientLink FHIR R5', () => {
  const { PatientLink } = new FHIRContext().forR5();
  let builder: PatientLinkBuilder;

  // create global
  beforeEach(() => {
    builder = PatientLink.builder();
  });

  it('should be able to create a new patient_link payload and validate with correct data [IPatientLink]', async () => {
    const dataType: IPatientLink = {
      id: '123',
      other: {
        reference: 'test',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    };

    const validate = await _validateBackbone(dataType, 'Patient_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_link payload and validate with correct data [new PatientLink()]', async () => {
    const dataType = new PatientLink({
      id: '123',
      other: {
        reference: 'test',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    });

    const validate = await _validateBackbone(dataType, 'Patient_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_link payload and validate with wrong data', async () => {
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

    const validate = await _validateBackbone(dataType, 'Patient_Link');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(3);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'other'",
        params: { missingProperty: 'other' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'type'",
        params: { missingProperty: 'type' },
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

  it('should be able to create a new patient_link payload using builder methods [new PatientLinkBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setOther({
        reference: 'Observation/123',
      })
      .setType('seealso')
      .addParamExtension('type', {
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
      _type: {
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
      other: {
        reference: 'Observation/123',
      },
      type: 'seealso',
    });

    const validate = await _validateBackbone(dataType, 'Patient_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
