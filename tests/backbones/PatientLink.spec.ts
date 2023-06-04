import BackboneElementBuilder from '../../src/r5/BackboneElementBuilder';
import BackboneElementValidator from '../../src/r5/BackboneElementValidator';
import { PatientLinkBuilder } from '../../src/r5/builders/backbones/PatientLinkBuilder';
import { PatientLink } from '../../src/r5/interfaces/backbones/PatientLink';

describe('PatientLink', () => {
  let builder: PatientLinkBuilder;

  // create global
  beforeEach(() => {
    builder = BackboneElementBuilder.PatientLink();
  });

  it('should be able to create a new patient_link payload and validate with correct data', async () => {
    const dataType: PatientLink = {
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

    const validate = await BackboneElementValidator.PatientLink(dataType);

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

    const validate = await BackboneElementValidator.PatientLink(dataType);

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

  it('should be able to create a new patient_link payload using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .addPatientLinkParamExtension('type', {
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
    });
  });
});
