import { ILocation } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';
import { LocationBuilder } from '../../../src/r4/models/resources/LocationBuilder';

import { LocationValidator } from '../../../src/r4/models/resources/LocationValidator';

describe('Location FHIR R4', () => {
  let builder: LocationBuilder;
  const context = new FHIRContext();
  const { Location, Validator } = context.forR4();

  // create global
  beforeEach(() => {
    builder = Location.builder();
  });

  it('should be able to create a new location and validate with correct data [ILocation]', async () => {
    const item: ILocation = {
      resourceType: 'Location',
      id: '1',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Burgers UMC, South Wing, second floor</div>',
      },
      identifier: [
        {
          value: 'B1-S.F2',
        },
      ],
      status: 'active',
      name: 'South Wing, second floor',
      alias: ['BU MC, SW, F2', 'Burgers University Medical Center, South Wing, second floor'],
      description: 'Second floor of the Old South Wing, formerly in use by Psychiatry',
      mode: 'instance',
      telecom: [
        {
          system: 'phone',
          value: '2328',
          use: 'work',
        },
        {
          system: 'fax',
          value: '2329',
          use: 'work',
        },
        {
          system: 'email',
          value: 'second wing admissions',
        },
        {
          system: 'url',
          value: 'http://sampleorg.com/southwing',
          use: 'work',
        },
      ],
      address: {
        use: 'work',
        line: ['Galapagosweg 91, Building A'],
        city: 'Den Burg',
        postalCode: '9105 PZ',
        country: 'NLD',
      },
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'wi',
            display: 'Wing',
          },
        ],
      },
      position: {
        longitude: -83.6945691,
        latitude: 42.25475478,
        altitude: 0,
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    };

    expect(() => LocationValidator(item)).not.toThrow();
  });

  it('should be able to create a new location and validate with correct data [new Location()]', async () => {
    const item = new Location({
      resourceType: 'Location',
      id: '2',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Burgers UMC, South Wing, second floor, Neuro Radiology Operation Room 1</div>',
      },
      identifier: [
        {
          value: 'B1-S.F2.1.00',
        },
      ],
      status: 'suspended',
      operationalStatus: {
        system: 'http://terminology.hl7.org/CodeSystem/v2-0116',
        code: 'H',
        display: 'Housekeeping',
      },
      name: 'South Wing Neuro OR 1',
      alias: ['South Wing OR 5', 'Main Wing OR 2'],
      description: 'Old South Wing, Neuro Radiology Operation Room 1 on second floor',
      mode: 'instance',
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'RNEU',
              display: 'Neuroradiology unit',
            },
          ],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '2329',
        },
      ],
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'ro',
            display: 'Room',
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
      partOf: {
        reference: 'Location/1',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new location and validate with correct data [Location-example-patients-home.json]', async () => {
    const item: ILocation = {
      resourceType: 'Location',
      id: 'ph',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Patient\'s Home</div>',
      },
      status: 'active',
      name: "Patient's Home",
      description: "Patient's Home",
      mode: 'kind',
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'PTRES',
              display: "Patient's Residence",
            },
          ],
        },
      ],
      physicalType: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
            code: 'ho',
            display: 'House',
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/f001',
      },
    };
    expect(() => LocationValidator(item)).not.toThrow();
  });

  it('should be able to create a new location and validate with wrong data', async () => {
    const item = {
      resourceType: 'Location',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
    };

    expect(() => LocationValidator(item as ILocation)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Location",
    );
  });

  it('should be able to create a new location with builder methods [new LocationBuilder()]', async () => {
    const item = builder
      .setAddress({
        use: 'work',
        type: 'both',
        text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
      })
      .setName('South Wing Neuro OR 1')
      .setMultipleAlias(['South Wing OR 5', 'Main Wing OR 2'])
      .setDescription('Old South Wing, Neuro Radiology Operation Room 1 on second floor')
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      address: {
        text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
        type: 'both',
        use: 'work',
      },
      alias: ['South Wing OR 5', 'Main Wing OR 2'],
      description: 'Old South Wing, Neuro Radiology Operation Room 1 on second floor',
      name: 'South Wing Neuro OR 1',
      resourceType: 'Location',
    });
  });
});
