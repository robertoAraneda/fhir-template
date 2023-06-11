import FHIRContext from '../../../src';
import { PatientLink } from '../../../src/r4/models/backbones/PatientLink';
import { PatientLinkBuilder } from '../../../src/r4/builders/backbones';
import { IPatientLink } from '../../../src/r4/interfaces/backbones';
import { LinkTypeEnum } from '../../../src/r4/enums';

describe('PatientLink FHIR R4', () => {
  let builder: PatientLinkBuilder;
  let builderFromFunction: PatientLinkBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new PatientLinkBuilder();
    builderFromFunction = Builder.backboneElements.PatientLinkBuilder();
  });

  it('should be able to validate a new patient_link [createBackboneElement]', async () => {
    const backboneElement = createBackboneElement('PatientLink', {
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
    });

    const validate = await Validator.backboneElements.PatientLink(backboneElement);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_link [new PatientLink()]', async () => {
    const item = new PatientLink({
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
    });

    const validateAddress = await Validator.backboneElements.PatientLink(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_link [IPatientLink]', async () => {
    const item: IPatientLink = {
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
    };

    const validate = await Validator.backboneElements.PatientLink(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_link using builder methods [new PatientLink()]', async () => {
    const item = builder
      .setId('123')
      .setType(LinkTypeEnum.REPLACES)
      .setOther({
        reference: 'Patient/123',
      })
      .addParamExtension('type', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _type: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      other: {
        reference: 'Patient/123',
      },
      type: 'replaces',
    });
  });

  it('should be able to create a new address using builder methods [builders.dataTypes.AddressBuilder()]', async () => {
    const item = builderFromFunction
      .setId('123')
      .setType(LinkTypeEnum.REPLACES)
      .setOther({
        reference: 'Patient/123',
      })
      .addParamExtension('type', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _type: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      other: {
        reference: 'Patient/123',
      },
      type: 'replaces',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await Validator.backboneElements.PatientLink(item);
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'other'",
        params: {
          missingProperty: 'other',
        },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
