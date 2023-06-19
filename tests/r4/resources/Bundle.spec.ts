import FHIRContext from '../../../src';
import { IBundleBuilder } from '../../../src/r4/models/resources/Bundle';
import { IBundle } from '../../../src/r4/interfaces/resources/IBundle';
import { BundleTypeEnum } from '../../../src/r4/enums';

describe('Bundle FHIR R4', () => {
  let builder: IBundleBuilder;
  const context = new FHIRContext();
  const { Bundle, Validator } = context.forR4();

  // create global
  beforeEach(() => {
    builder = Bundle.builder();
  });

  it('should be able to create a new bundle and validate with correct data [IBundle]', async () => {
    const item: IBundle = {
      resourceType: 'Bundle',
      id: 'bundle-example',
      meta: {
        lastUpdated: '2014-08-18T01:43:30Z',
      },
      type: 'searchset',
      total: 3,
      link: [
        {
          relation: 'self',
          url: 'https://example.com/base/MedicationRequest?patient=347&_include=MedicationRequest.medication&_count=2',
        },
        {
          relation: 'next',
          url: 'https://example.com/base/MedicationRequest?patient=347&searchId=ff15fd40-ff71-4b48-b366-09c706bed9d0&page=2',
        },
      ],
      entry: [
        {
          fullUrl: 'https://example.com/base/MedicationRequest/3123',
          resource: {
            resourceType: 'MedicationRequest',
            id: '3123',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 3123</p><p><b>status</b>: unknown</p><p><b>intent</b>: order</p><p><b>medication</b>: <a>Medication/example</a></p><p><b>subject</b>: <a>Patient/347</a></p></div>',
            },
            status: 'unknown',
            intent: 'order',
            medicationReference: {
              reference: 'Medication/example',
            },
            subject: {
              reference: 'Patient/347',
            },
          },
          search: {
            mode: 'match',
            score: 1,
          },
        },
        {
          fullUrl: 'https://example.com/base/Medication/example',
          resource: {
            resourceType: 'Medication',
            id: 'example',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p></div>',
            },
          },
          search: {
            mode: 'include',
          },
        },
      ],
    };

    const validate = await Validator.Bundle(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle and validate with correct data [new Bundle()]', async () => {
    const item = new Bundle({
      resourceType: 'Bundle',
      id: 'bundle-transaction',
      meta: {
        lastUpdated: '2014-08-18T01:43:30Z',
      },
      type: 'transaction',
      entry: [
        {
          fullUrl: 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a',
          resource: {
            resourceType: 'Patient',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            active: true,
            name: [
              {
                use: 'official',
                family: 'Chalmers',
                given: ['Peter', 'James'],
              },
            ],
            gender: 'male',
            birthDate: '1974-12-25',
          },
          request: {
            method: 'POST',
            url: 'Patient',
          },
        },
        {
          fullUrl: 'urn:uuid:88f151c0-a954-468a-88bd-5ae15c08e059',
          resource: {
            resourceType: 'Patient',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            identifier: [
              {
                system: 'http:/example.org/fhir/ids',
                value: '234234',
              },
            ],
            active: true,
            name: [
              {
                use: 'official',
                family: 'Chalmers',
                given: ['Peter', 'James'],
              },
            ],
            gender: 'male',
            birthDate: '1974-12-25',
          },
          request: {
            method: 'POST',
            url: 'Patient',
            ifNoneExist: 'identifier=http:/example.org/fhir/ids|234234',
          },
        },
        {
          fullUrl: 'http://example.org/fhir/Patient/123',
          resource: {
            resourceType: 'Patient',
            id: '123',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            active: true,
            name: [
              {
                use: 'official',
                family: 'Chalmers',
                given: ['Peter', 'James'],
              },
            ],
            gender: 'male',
            birthDate: '1974-12-25',
          },
          request: {
            method: 'PUT',
            url: 'Patient/123',
          },
        },
        {
          fullUrl: 'urn:uuid:74891afc-ed52-42a2-bcd7-f13d9b60f096',
          resource: {
            resourceType: 'Patient',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            identifier: [
              {
                system: 'http:/example.org/fhir/ids',
                value: '456456',
              },
            ],
            active: true,
            name: [
              {
                use: 'official',
                family: 'Chalmers',
                given: ['Peter', 'James'],
              },
            ],
            gender: 'male',
            birthDate: '1974-12-25',
          },
          request: {
            method: 'PUT',
            url: 'Patient?identifier=http:/example.org/fhir/ids|456456',
          },
        },
        {
          fullUrl: 'http://example.org/fhir/Patient/123a',
          resource: {
            resourceType: 'Patient',
            id: '123a',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            active: true,
            name: [
              {
                use: 'official',
                family: 'Chalmers',
                given: ['Peter', 'James'],
              },
            ],
            gender: 'male',
            birthDate: '1974-12-25',
          },
          request: {
            method: 'PUT',
            url: 'Patient/123a',
            ifMatch: 'W/"2"',
          },
        },
        {
          request: {
            method: 'DELETE',
            url: 'Patient/234',
          },
        },
        {
          request: {
            method: 'DELETE',
            url: 'Patient?identifier=123456',
          },
        },
        {
          fullUrl: 'urn:uuid:79378cb8-8f58-48e8-a5e8-60ac2755b674',
          resource: {
            resourceType: 'Parameters',
            parameter: [
              {
                name: 'coding',
                valueCoding: {
                  system: 'http://loinc.org',
                  code: '1963-8',
                },
              },
            ],
          },
          request: {
            method: 'POST',
            url: 'ValueSet/$lookup',
          },
        },
        {
          request: {
            method: 'GET',
            url: 'Patient?name=peter',
          },
        },
        {
          request: {
            method: 'GET',
            url: 'Patient/12334',
            ifNoneMatch: 'W/"4"',
            ifModifiedSince: '2015-08-31T08:14:33+10:00',
          },
        },
      ],
    });

    const validate = await Validator.Bundle(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle and validate with correct data [Bundle-example-patientlist.json]', async () => {
    const item: IBundle = {
      resourceType: 'Bundle',
      id: 'bundle-response-medsallergies',
      type: 'batch-response',
      entry: [
        {
          resource: {
            resourceType: 'Patient',
            id: 'example',
            meta: {
              versionId: '1',
              lastUpdated: '2018-11-12T03:35:20.715Z',
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>Name</td>\n                                    <td>Peter James \n                                        <b>Chalmers</b> (&quot;Jim&quot;)\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Address</td>\n                                    <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n                                </tr>\n                                <tr>\n                                    <td>Contacts</td>\n                                    <td>Home: unknown. Work: (03) 5555 6473</td>\n                                </tr>\n                                <tr>\n                                    <td>Id</td>\n                                    <td>MRN: 12345 (Acme Healthcare)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>',
            },
            identifier: [
              {
                use: 'usual',
                type: {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                      code: 'MR',
                    },
                  ],
                },
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
              {
                use: 'maiden',
                family: 'Windsor',
                given: ['Peter', 'James'],
                period: {
                  end: '2002',
                },
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
                rank: 1,
              },
              {
                system: 'phone',
                value: '(03) 3410 5613',
                use: 'mobile',
                rank: 2,
              },
              {
                system: 'phone',
                value: '(03) 5555 8834',
                use: 'old',
                period: {
                  end: '2014',
                },
              },
            ],
            gender: 'male',
            birthDate: '1974-12-25',
            _birthDate: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
                  valueDateTime: '1974-12-25T14:35:45-05:00',
                },
              ],
            },
            deceasedBoolean: false,
            address: [
              {
                use: 'home',
                type: 'both',
                text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
                line: ['534 Erewhon St'],
                city: 'PleasantVille',
                district: 'Rainbow',
                state: 'Vic',
                postalCode: '3999',
                period: {
                  start: '1974-12-25',
                },
              },
            ],
            contact: [
              {
                relationship: [
                  {
                    coding: [
                      {
                        system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                        code: 'N',
                      },
                    ],
                  },
                ],
                name: {
                  family: 'du Marché',
                  _family: {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                        valueString: 'VV',
                      },
                    ],
                  },
                  given: ['Bénédicte'],
                },
                telecom: [
                  {
                    system: 'phone',
                    value: '+33 (237) 998327',
                  },
                ],
                address: {
                  use: 'home',
                  type: 'both',
                  line: ['534 Erewhon St'],
                  city: 'PleasantVille',
                  district: 'Rainbow',
                  state: 'Vic',
                  postalCode: '3999',
                  period: {
                    start: '1974-12-25',
                  },
                },
                gender: 'female',
                period: {
                  start: '2012',
                },
              },
            ],
            managingOrganization: {
              reference: 'Organization/1',
            },
          },
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
        {
          resource: {
            resourceType: 'Bundle',
            id: '5bdf95d0-24a6-4024-95f5-d546fb479b',
            meta: {
              lastUpdated: '2018-11-12T05:42:16.086Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r4/MedicationStatement?_format=application/fhir+xml&search-id=804eee4a-0a54-4414-9c07-169952f929&&patient=example&_list=%24current%2Dmedications&_sort=_id',
              },
            ],
          },
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
        {
          resource: {
            resourceType: 'Bundle',
            id: '0c11a91c-3638-4d58-8cf1-40e60f43c6',
            meta: {
              lastUpdated: '2018-11-12T05:42:16.209Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r4/AllergyIntolerance?_format=application/fhir+xml&search-id=b1981f8a-4139-4db6-923d-77d764c990&&patient=example&_list=%24current%2Dallergies&_sort=_id',
              },
            ],
          },
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
        {
          resource: {
            resourceType: 'Bundle',
            id: '19f0fa29-f8fe-4b07-b035-f488893f06',
            meta: {
              lastUpdated: '2018-11-12T05:42:16.279Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r4/Condition?_format=application/fhir+xml&search-id=4d097c43-54aa-4157-b500-be22208dd0&&patient=example&_list=%24current%2Dproblems&_sort=_id',
              },
            ],
          },
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
        {
          resource: {
            resourceType: 'Bundle',
            id: 'dff8ab42-33f9-42ec-88c5-83d3f05323',
            meta: {
              lastUpdated: '2018-11-12T05:42:16.351Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r4/MedicationStatement?_format=application/fhir+xml&search-id=31d4af75-cdcf-4f85-9666-4bafadebb5&&patient=example&_sort=_id',
              },
            ],
          },
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
      ],
    };

    const validate = await Validator.Bundle(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle and validate with wrong data', async () => {
    const item = {
      resourceType: 'Bundle',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
    };
    const validate = await Validator.Bundle(item);

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
    ]);
  });

  it('should be able to create a new bundle with builder methods [new BundleBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setType(BundleTypeEnum.TRANSACTION)
      .addEntry({
        fullUrl: 'http://localhost:8080/fhir/Patient/123',
        id: '123',
      })
      .setTimestamp('2019-01-01T00:00:00.000Z')
      .build();

    const validate = await Validator.Bundle(item);

    console.log(JSON.stringify(validate, null, 2));

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      entry: [
        {
          fullUrl: 'http://localhost:8080/fhir/Patient/123',
          id: '123',
        },
      ],
      id: '123',
      resourceType: 'Bundle',
      timestamp: '2019-01-01T00:00:00.000Z',
      type: 'transaction',
    });
  });
});
