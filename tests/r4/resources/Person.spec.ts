import { IPerson } from '../../../src/r4/interfaces/resources';
import { PersonBuilder } from '../../../src/r4/builders/resources';
import FHIRContext from '../../../src';
import { Person } from '../../../src/r4/models/resources';

describe('Person Resource FHIR R4', () => {
  let builder: PersonBuilder;
  let builderFromFunction: PersonBuilder;
  const context = new FHIRContext();
  const { Validator, Builder, createResource } = context.forR4();

  // create global
  beforeEach(() => {
    builder = new PersonBuilder();
    builderFromFunction = Builder.resources.Person();
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

    const validate = await Validator.resources.Person(item);
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

    const validate = await Validator.resources.Person(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new person and validate with correct data [Example Person/pp]', async () => {
    const item = createResource('Person', {
      resourceType: 'Person',
      id: 'pp',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'urn:oid:2.16.840.1.113883.4.3.39',
          value: 'TL545786',
          period: {
            start: '2041-09-23',
          },
          assigner: {
            display: 'Ohio Bureau of Motor Vehicles',
          },
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Everywoman',
          given: ['Eve', 'Marie'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '(621)-479-9743',
          use: 'home',
        },
      ],
      gender: 'female',
      birthDate: '1974-03-07',
      address: [
        {
          use: 'home',
          line: ['2086 College St'],
          city: 'Sandusky',
          state: 'OH',
          postalCode: '44870',
          country: 'USA',
        },
      ],
      managingOrganization: {
        reference: 'http://www.goodhealth.com/Organization/12',
        display: 'Goodhealth Person Portal',
      },
      link: [
        {
          target: {
            reference: 'http://www.goodhealth.com/Person/98574',
            display: 'Eve Everywoman',
          },
          assurance: 'level3',
        },
        {
          target: {
            reference: 'http://www.acme-medical.com/Person/ab34d',
            display: 'Eve Marie Everywoman',
          },
          assurance: 'level2',
        },
      ],
    });

    const validate = await Validator.resources.Person(item);
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

    const validate = await Validator.resources.Person(item);
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

    const validate = await Validator.resources.Person(item);

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

  it('should be able to create a new person using builder methods [Builder.resources.Person()]', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction
      .addParamExtension('active', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueCode: 'unknown',
          },
        ],
      })
      .build();

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
