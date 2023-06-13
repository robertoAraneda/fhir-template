import { PractitionerQualificationBuilder } from '../../../src/r5/builders/backbones';
import { IPractitionerQualification } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import { PractitionerQualification } from '../../../src/r5/models/backbones';

describe('PractitionerQualification FHIR R5', () => {
  const { Validator, Builder, createBackboneElement } = new FHIRContext().forR5();
  let builder: PractitionerQualificationBuilder;
  let builderFromFunction: PractitionerQualificationBuilder;

  // create global
  beforeEach(() => {
    builder = new PractitionerQualificationBuilder();
    builderFromFunction = Builder.backboneElements.PractitionerQualification();
  });

  it('should be able to create a new practitioner_qualification payload and validate with correct data [IPractitionerQualification]', async () => {
    const dataType: IPractitionerQualification = {
      id: '123',
      issuer: {
        reference: 'test',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
    };

    const validate = await Validator.backboneElements.PractitionerQualification(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner_qualification payload and validate with correct data [new PractitionerQualification()]', async () => {
    const dataType = new PractitionerQualification({
      id: '123',
      issuer: {
        reference: 'test',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
    });

    const validate = await Validator.backboneElements.PractitionerQualification(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner_qualification payload and validate with correct data [createBackboneElement()]', async () => {
    const dataType = createBackboneElement('PractitionerQualification', {
      id: '123',
      issuer: {
        reference: 'test',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
    });

    const validate = await Validator.backboneElements.PractitionerQualification(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new practitioner_qualification payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      issuer: {
        reference: 'test',
      },
      period: {
        start: 'wrong date', // wrong date
        end: '2023-01-01',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
      wrongProperty: 'test', // wrong property
    };

    const validate = await Validator.backboneElements.PractitionerQualification(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/period/start',
        keyword: 'pattern',
        message: "The value '/period/start' does not match with datatype 'dateTime'",
        params: { value: '/period/start' },
        schemaPath: 'base.schema.json#/definitions/dateTime/pattern',
      },
    ]);
  });

  it('should be able to create a new practitioner_qualification payload using builder methods [new PractitionerQualificationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      })
      .setIssuer({
        reference: 'Organization/1',
      })
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      })
      .addIdentifier({
        use: 'official',
        system: 'http://hl7.org/fhir/sid/us-npi',
        value: '123',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      code: {
        coding: [
          {
            code: 'any',
            system: 'http://hl7.org/fhir/organization-qualification',
          },
        ],
        text: 'test',
      },
      id: '123',
      identifier: [
        {
          system: 'http://hl7.org/fhir/sid/us-npi',
          use: 'official',
          value: '123',
        },
      ],
      issuer: {
        reference: 'Organization/1',
      },
    });
  });

  it('should be able to create a new practitioner_qualification payload using builder methods [Builder.backboneElements.PractitionerQualification()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setId('123')
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      })
      .setIssuer({
        reference: 'Organization/1',
      })
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      })
      .addIdentifier({
        use: 'official',
        system: 'http://hl7.org/fhir/sid/us-npi',
        value: '123',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      code: {
        coding: [
          {
            code: 'any',
            system: 'http://hl7.org/fhir/organization-qualification',
          },
        ],
        text: 'test',
      },
      id: '123',
      identifier: [
        {
          system: 'http://hl7.org/fhir/sid/us-npi',
          use: 'official',
          value: '123',
        },
      ],
      issuer: {
        reference: 'Organization/1',
      },
    });
  });
});
