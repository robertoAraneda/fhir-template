import FHIRContext from '../../../src';
import IBundle from '../../../src/r5/interfaces/resources/IBundle';
import { BundleTypeEnum } from '../../../src/r5/enums';
import BundleBuilder from '../../../src/r5/models/resources/BundleBuilder';
import { IPatient } from '../../../src/r5/interfaces/resources';
import { BundleValidator } from '../../../src/r5/models/resources/BundleValidator';

describe('Bundle FHIR R5', () => {
  let builder: BundleBuilder;
  const context = new FHIRContext();
  const { Bundle, Validator } = context.forR5();

  // create global
  beforeEach(() => {
    builder = Bundle.builder();
  });

  it('should be able to create a new bundle and validate with correct data [new Bundle()]', async () => {
    const item = new Bundle({
      resourceType: 'Bundle',
      id: 'bundle-transaction',
      meta: {
        lastUpdated: '2015-08-18T01:53:30Z',
      },
      type: 'transaction',
      entry: [
        {
          fullUrl: 'urn:uuid:61ebe359-bfdc-5613-8bf2-c5e300955f0a',
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
            birthDate: '1975-12-25',
          },
          request: {
            method: 'POST',
            url: 'Patient',
          },
        },
        {
          fullUrl: 'urn:uuid:88f151c0-a955-568a-88bd-5ae15c08e059',
          resource: {
            resourceType: 'Patient',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            identifier: [
              {
                system: 'http:/example.org/fhir/ids',
                value: '235235',
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
            birthDate: '1975-12-25',
          },
          request: {
            method: 'POST',
            url: 'Patient',
            ifNoneExist: 'identifier=http:/example.org/fhir/ids|235235',
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
            birthDate: '1975-12-25',
          },
          request: {
            method: 'PUT',
            url: 'Patient/123',
          },
        },
        {
          fullUrl: 'urn:uuid:75891afc-ed52-52a2-bcd7-f13d9b60f096',
          resource: {
            resourceType: 'Patient',
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
            },
            identifier: [
              {
                system: 'http:/example.org/fhir/ids',
                value: '556556',
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
            birthDate: '1975-12-25',
          },
          request: {
            method: 'PUT',
            url: 'Patient?identifier=http:/example.org/fhir/ids|556556',
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
            birthDate: '1975-12-25',
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
            url: 'Patient/235',
          },
        },
        {
          request: {
            method: 'DELETE',
            url: 'Patient?identifier=123556',
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
            url: 'Patient/12335',
            ifNoneMatch: 'W/"5"',
            ifModifiedSince: '2015-08-31T08:15:33+10:00',
          },
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new bundle and validate with correct data [IBundle]', async () => {
    const item: IBundle = {
      resourceType: 'Bundle',
      id: 'bundle-response-simplesummary',
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
          } as IPatient,
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
        {
          resource: {
            resourceType: 'Bundle',
            id: '86846953-60dd-47ba-b37a-7e7d7e3312',
            meta: {
              lastUpdated: '2018-11-12T05:42:49.476Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://test.fhir.org/r5/MedicationStatement?_format=application/fhir+xml&search-id=0f08b401-5120-4444-9a83-3fd21d33df&&patient=example&_sort=_id',
              },
            ],
          } as IBundle,
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
        {
          resource: {
            resourceType: 'Bundle',
            id: '4bafe9c4-ba53-4d7b-89d0-d92ee0859a',
            meta: {
              lastUpdated: '2018-11-12T05:42:49.498Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://test.fhir.org/r5/Observation?_format=application/fhir+xml&search-id=50df0414-1375-48a4-ba1e-66f580360a&&patient=example&code=http%3A//loinc.org%7C55284%2D4&date=ge2015%2D01%2D01&_sort=_id',
              },
            ],
          } as IBundle,
          response: {
            status: '200',
            etag: 'W/1',
            lastModified: '2018-11-12T03:35:20.717Z',
          },
        },
      ],
    };

    expect(() => BundleValidator(item)).not.toThrow();
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
              div: '<div xmlns="http://www.w3.org/1999/xhtml">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>Name</td>\n                                    <td>Peter James \n                                        <b>Chalmers</b> (&quot;Jim&quot;)\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Address</td>\n                                    <td>535 Erewhon, Pleasantville, Vic, 3999</td>\n                                </tr>\n                                <tr>\n                                    <td>Contacts</td>\n                                    <td>Home: unknown. Work: (03) 5555 6573</td>\n                                </tr>\n                                <tr>\n                                    <td>Id</td>\n                                    <td>MRN: 12355 (Acme Healthcare)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>',
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
                system: 'urn:oid:1.2.36.156.595.217.0.1',
                value: '12355',
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
                value: '(03) 5555 6573',
                use: 'work',
                rank: 1,
              },
              {
                system: 'phone',
                value: '(03) 3510 5613',
                use: 'mobile',
                rank: 2,
              },
              {
                system: 'phone',
                value: '(03) 5555 8835',
                use: 'old',
                period: {
                  end: '2015',
                },
              },
            ],
            gender: 'male',
            birthDate: '1975-12-25',
            _birthDate: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
                  valueDateTime: '1975-12-25T15:35:55-05:00',
                },
              ],
            },
            deceasedBoolean: false,
            address: [
              {
                use: 'home',
                type: 'both',
                text: '535 Erewhon St PeasantVille, Rainbow, Vic  3999',
                line: ['535 Erewhon St'],
                city: 'PleasantVille',
                district: 'Rainbow',
                state: 'Vic',
                postalCode: '3999',
                period: {
                  start: '1975-12-25',
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
                  line: ['535 Erewhon St'],
                  city: 'PleasantVille',
                  district: 'Rainbow',
                  state: 'Vic',
                  postalCode: '3999',
                  period: {
                    start: '1975-12-25',
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
            id: '5bdf95d0-25a6-5025-95f5-d556fb579b',
            meta: {
              lastUpdated: '2018-11-12T05:52:16.086Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r5/MedicationStatement?_format=application/fhir+xml&search-id=805eee5a-0a55-5515-9c07-169952f929&&patient=example&_list=%25current%2Dmedications&_sort=_id',
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
            id: '0c11a91c-3638-5d58-8cf1-50e60f53c6',
            meta: {
              lastUpdated: '2018-11-12T05:52:16.209Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r5/AllergyIntolerance?_format=application/fhir+xml&search-id=b1981f8a-5139-5db6-923d-77d765c990&&patient=example&_list=%25current%2Dallergies&_sort=_id',
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
            id: '19f0fa29-f8fe-5b07-b035-f588893f06',
            meta: {
              lastUpdated: '2018-11-12T05:52:16.279Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r5/Condition?_format=application/fhir+xml&search-id=5d097c53-55aa-5157-b500-be22208dd0&&patient=example&_list=%25current%2Dproblems&_sort=_id',
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
            id: 'dff8ab52-33f9-52ec-88c5-83d3f05323',
            meta: {
              lastUpdated: '2018-11-12T05:52:16.351Z',
            },
            type: 'searchset',
            total: 0,
            link: [
              {
                relation: 'self',
                url: 'http://local.fhir.org:960/r5/MedicationStatement?_format=application/fhir+xml&search-id=31d5af75-cdcf-5f85-9666-5bafadebb5&&patient=example&_sort=_id',
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
    expect(() => BundleValidator(item)).not.toThrow();
  });

  it('should be able to create a new bundle and validate with wrong data', async () => {
    const item = {
      resourceType: 'Bundle',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
    };

    expect(() => BundleValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Bundle",
    );
  });

  it('should be able to create a new bundle with builder methods [new BundleBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setType(BundleTypeEnum.TRANSACTION)
      .addEntry({
        fullUrl: 'http://localhost:8080/fhir/Patient/123',
        id: '123',
        request: {
          method: 'GET',
          url: 'Patient/123',
        },
      })
      .setTimestamp('2019-01-01T00:00:00.000Z')
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      entry: [
        {
          fullUrl: 'http://localhost:8080/fhir/Patient/123',
          id: '123',
          request: {
            method: 'GET',
            url: 'Patient/123',
          },
        },
      ],
      id: '123',
      resourceType: 'Bundle',
      timestamp: '2019-01-01T00:00:00.000Z',
      type: 'transaction',
    });
  });
});
