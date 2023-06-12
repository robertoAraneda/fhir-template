import { PractitionerBuilder } from '../../../src/r4/builders/resources';
import { IPractitioner } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';
import { Practitioner } from '../../../src/r4/models/resources';

describe('Practitioner FHIR R4', () => {
  let builder: PractitionerBuilder;
  let builderFromFunction: PractitionerBuilder;
  const context = new FHIRContext();
  const { Validator, Builder, createResource } = context.forR4();

  // create global
  beforeEach(() => {
    builder = new PractitionerBuilder();
    builderFromFunction = Builder.resources.Practitioner();
  });

  it('should be able to create a new practitioner and validate with correct data [IPractitioner]', async () => {
    const item: IPractitioner = {
      resourceType: 'Practitioner',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org/practitioners',
          value: '23',
        },
      ],
      active: true,
      name: [
        {
          family: 'Careful',
          given: ['Adam'],
          prefix: ['Dr'],
        },
      ],
      address: [
        {
          use: 'home',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          state: 'Vic',
          postalCode: '3999',
        },
      ],
      qualification: [
        {
          identifier: [
            {
              system: 'http://example.org/UniversityIdentifier',
              value: '12345',
            },
          ],
          code: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0360/2.7',
                code: 'BS',
                display: 'Bachelor of Science',
              },
            ],
            text: 'Bachelor of Science',
          },
          period: {
            start: '1995',
          },
          issuer: {
            display: 'Example University',
          },
        },
      ],
    };

    const validate = await Validator.resources.Practitioner(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner and validate with correct data [new Practitioner()]', async () => {
    const item = new Practitioner({
      resourceType: 'Practitioner',
      id: 'f001',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'urn:oid:2.16.528.1.1007.3.1',
          value: '938273695',
        },
        {
          use: 'usual',
          system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
          value: '129IDH4OP733',
        },
      ],
      name: [
        {
          use: 'official',
          family: 'van den broek',
          given: ['Eric'],
          suffix: ['MD'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '0205568263',
          use: 'work',
        },
        {
          system: 'email',
          value: 'E.M.vandenbroek@bmc.nl',
          use: 'work',
        },
        {
          system: 'fax',
          value: '0205664440',
          use: 'work',
        },
      ],
      gender: 'male',
      birthDate: '1975-12-07',
      address: [
        {
          use: 'work',
          line: ['Galapagosweg 91'],
          city: 'Den Burg',
          postalCode: '9105 PZ',
          country: 'NLD',
        },
      ],
    });

    const validate = await Validator.resources.Practitioner(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner and validate with correct data [createResource]', async () => {
    const item = createResource('Practitioner', {
      resourceType: 'Practitioner',
      id: 'prac4',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
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
    });

    const validate = await Validator.resources.Practitioner(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner and validate with correct data [Example Practitioner/f003]', async () => {
    const item: IPractitioner = {
      resourceType: 'Practitioner',
      id: 'f003',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'urn:oid:2.16.528.1.1007.3.1',
          value: '846100293',
        },
        {
          use: 'usual',
          system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
          value: '243HID3RT938',
        },
      ],
      name: [
        {
          use: 'official',
          family: 'Versteegh',
          given: ['Marc'],
          suffix: ['MD'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '0205562431',
          use: 'work',
        },
        {
          system: 'email',
          value: 'm.versteegh@bmc.nl',
          use: 'work',
        },
        {
          system: 'fax',
          value: '0205662948',
          use: 'work',
        },
      ],
      gender: 'male',
      birthDate: '1963-07-01',
      address: [
        {
          use: 'work',
          line: ['Galapagosweg 91'],
          city: 'Amsterdam',
          postalCode: '1105 AZ',
          country: 'NLD',
        },
      ],
    };

    const validate = await Validator.resources.Practitioner(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner and validate with correct data [Example Practitioner/f204]', async () => {
    const item: IPractitioner = {
      resourceType: 'Practitioner',
      id: 'f204',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'urn:oid:2.16.528.1.1007.3.1',
          value: '12345678904',
        },
      ],
      name: [
        {
          use: 'usual',
          text: 'Carla Espinosa',
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '+31715262169',
          use: 'work',
        },
      ],
      gender: 'female',
      birthDate: '1967-11-05',
      address: [
        {
          use: 'work',
          line: ['Walvisbaai 3'],
          city: 'Den helder',
          postalCode: '2333ZA',
          country: 'NLD',
        },
      ],
    };

    const validate = await Validator.resources.Practitioner(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner and validate with wrong data', async () => {
    const item = {
      resourceType: 'Practitioner',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'http://healthcare.example.org/identifiers/staff',
          value: 'D234123',
        },
      ],
      name: [
        {
          use: 'wrong', // wrong use
          family: 'Dopplemeyer',
          given: ['Sherry'],
        },
      ],
      telecom: [
        {
          system: 'email',
          value: 'john.doe@healthcare.example.org',
        },
      ],
    };
    const validate = await Validator.resources.Practitioner(item);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'wrongProperty' },
        message: 'must NOT have additional properties',
      },
      {
        instancePath: '/name/0/use',
        schemaPath: '#/properties/use/enum',
        keyword: 'enum',
        params: { allowedValues: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'] },
        message: 'must be equal to one of the allowed values',
      },
    ]);
  });

  it('should be able to create a new practitioner with builder methods [new PractitionerBuilder()]', async () => {
    const practitioner = builder
      .setActive(true)
      .addName({
        family: 'Notsowell',
        given: ['Sandy'],
        use: 'official',
      })
      .addParamExtension('active', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueCode: 'unknown',
          },
        ],
      })
      .addExtension({
        url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
        valueCode: 'unknown',
      })
      .build();

    expect(practitioner).toEqual({
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
          valueCode: 'unknown',
        },
      ],
      resourceType: 'Practitioner',
      active: true,
      name: [
        {
          family: 'Notsowell',
          given: ['Sandy'],
          use: 'official',
        },
      ],
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

  it('should be able to create a new practitioner with builder methods [Builder.resources.Practitioner()]', async () => {
    const practitioner = builderFromFunction
      .setActive(true)
      .addName({
        family: 'Notsowell',
        given: ['Sandy'],
        use: 'official',
      })
      .addParamExtension('active', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueCode: 'unknown',
          },
        ],
      })
      .addExtension({
        url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
        valueCode: 'unknown',
      })
      .build();

    expect(practitioner).toEqual({
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
          valueCode: 'unknown',
        },
      ],
      resourceType: 'Practitioner',
      active: true,
      name: [
        {
          family: 'Notsowell',
          given: ['Sandy'],
          use: 'official',
        },
      ],
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
