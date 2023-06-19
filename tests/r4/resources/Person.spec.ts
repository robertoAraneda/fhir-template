import { IPerson } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';

import { IPersonBuilder } from '../../../src/r4/models/resources/PersonBuilder';

describe('Person Resource FHIR R4', () => {
  let builder: IPersonBuilder;
  const context = new FHIRContext();
  const { Validator, Person } = context.forR4();

  // create global
  beforeEach(() => {
    builder = Person.builder();
  });

  it('should be able to create a new person and validate with correct data [IPerson]', async () => {
    const item: IPerson = {
      resourceType: 'Person',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'usual',
          system: 'urn:oid:1.2.36.146.595.217.0.1',
          value: '12345',
          period: {
            start: '2001-05-06',
          },
          assigner: {
            display: 'Acme Healthcare',
          },
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James'],
        },
        {
          use: 'usual',
          given: ['Jim'],
        },
      ],
      telecom: [
        {
          use: 'home',
        },
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work',
        },
        {
          system: 'email',
          value: 'Jim@example.org',
          use: 'home',
        },
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      address: [
        {
          use: 'home',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          state: 'Vic',
          postalCode: '3999',
        },
      ],
      link: [
        {
          target: {
            reference: 'RelatedPerson/peter',
            display: 'Peter Chalmers',
          },
        },
        {
          target: {
            reference: 'Person/example',
            display: 'Peter Chalmers',
          },
        },
      ],
    };

    const validate = await Validator.Person(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new person and validate with correct data [new Person()]', async () => {
    const item = new Person({
      resourceType: 'Person',
      id: 'grahame',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'usual',
          system: 'urn:oid:1.2.36.146.595.217.0.1',
          value: '12345',
          period: {
            start: '2001-05-06',
          },
          assigner: {
            display: 'Acme Healthcare',
          },
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James'],
        },
        {
          use: 'usual',
          given: ['Jim'],
        },
      ],
      telecom: [
        {
          use: 'home',
        },
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work',
        },
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      address: [
        {
          use: 'home',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          state: 'Vic',
          postalCode: '3999',
        },
      ],
      managingOrganization: {
        reference: 'Organization/1',
      },
    });

    const validate = await Validator.Person(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new person and validate with correct data [Example Person/per4]', async () => {
    const item: IPerson = {
      resourceType: 'Person',
      id: 'per4',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'usual',
          system: 'urn:oid:0.1.2.3.4.5.6.7',
          value: '123458',
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Notsowell',
          given: ['Sandy'],
        },
      ],
      gender: 'female',
      birthDate: '1982-08-02',
      link: [
        {
          target: {
            reference: 'Person/pat4',
          },
        },
        {
          target: {
            reference: 'Practitioner/prac4',
          },
        },
      ],
    };

    const validate = await Validator.Person(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new person and validate with wrong data', async () => {
    const item = {
      resourceType: 'Person',
      id: 'f002',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n     Ariadne Bor-Jansma\n    </div>',
      },
      active: true,
      name: [
        {
          use: 'usual',
          text: 'Ariadne Bor-Jansma',
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '+31201234567',
          use: 'home',
        },
      ],
      gender: 'female',
      birthDate: 'wrong date', // wrong date
      // wrong property
      photo: [
        {
          contentType: 'image/jpeg',
          data: 'data',
        },
      ],
      link: [
        {
          target: {
            reference: 'RelatedPerson/f002',
            display: 'Ariadne Bor-Jansma',
          },
        },
      ],
      wrongProperty: 'test', // wrong property
    };

    const validate = await Validator.Person(item);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(3);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/birthDate',
        keyword: 'pattern',
        message: "The value '/birthDate' does not match with datatype 'date'",
        params: { value: '/birthDate' },
        schemaPath: 'r4base.schema.json#/definitions/date/pattern',
      },
      {
        instancePath: '/photo',
        keyword: 'type',
        message: 'must be object',
        params: { type: 'object' },
        schemaPath: '#/type',
      },
    ]);
  });

  it('should be able to create a new person using builder methods [ new PersonBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .addParamExtension('active', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueCode: 'unknown',
          },
        ],
      })
      .build();

    const validate = await Validator.Person(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
      resourceType: 'Person',
      _active: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueCode: 'unknown',
          },
        ],
      },
    });
  });
});
