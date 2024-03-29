import { IPractitionerRole } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import PractitionerRoleBuilder from '../../../src/r5/models/resources/PractitionerRoleBuilder';
import { PractitionerRoleValidator } from '../../../src/r5/models/resources/PractitionerRoleValidator';

describe('PractitionerRole FHIR R5', () => {
  let builder: PractitionerRoleBuilder;
  const context = new FHIRContext();
  const { Validator, PractitionerRole } = context.forR5();

  // create global
  beforeEach(() => {
    builder = PractitionerRole.builder();
  });

  it('should be able to create a new practitioner role and validate with correct data [Example PractitionerRole/example]', async () => {
    const item: IPractitionerRole = {
      resourceType: 'PractitionerRole',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\tDr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n\t\t\t\t2012\n\t\t\t</p>\n\t\t</div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org/practitioners',
          value: '23',
          type: {
            coding: [
              {
                code: 'MD',
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              },
            ],
          },
        },
      ],
      active: true,
      period: {
        start: '2012-01-01',
        end: '2012-03-31',
      },
      practitioner: {
        reference: 'Practitioner/example',
        display: 'Dr Adam Careful',
      },
      organization: {
        reference: 'Organization/f001',
      },
      code: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0286',
              code: 'RP',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '408443003',
              display: 'General medical practice',
            },
          ],
        },
      ],
      location: [
        {
          reference: 'Location/1',
          display: 'South Wing, second floor',
        },
      ],
      healthcareService: [
        {
          reference: 'HealthcareService/example',
        },
      ],
      contact: [
        {
          telecom: [
            {
              system: 'phone',
              value: '(03) 5555 6473',
              use: 'work',
            },
            {
              system: 'email',
              value: 'adam.southern@example.org',
              use: 'work',
            },
          ],
        },
      ],
      characteristic: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/service-mode',
              code: 'in-person',
              display: 'In Person',
            },
            {
              system: 'http://hl7.org/fhir/service-mode',
              code: 'videoconference',
              display: 'Video Conference',
            },
          ],
        },
      ],
      communication: [
        {
          coding: [
            {
              system: 'urn:ietf:bcp:47',
              code: 'en',
            },
          ],
        },
      ],
      availability: [
        {
          availableTime: [
            {
              daysOfWeek: ['mon', 'tue', 'wed'],
              availableStartTime: '09:00:00',
              availableEndTime: '16:30:00',
            },
            {
              daysOfWeek: ['thu', 'fri'],
              availableStartTime: '09:00:00',
              availableEndTime: '12:00:00',
            },
          ],
          notAvailableTime: [
            {
              description: 'Adam will be on extended leave during May 2017',
              during: {
                start: '2017-05-01',
                end: '2017-05-20',
              },
            },
            {
              description: 'Adam is generally unavailable on public holidays and during the Christmas/New Year break',
            },
          ],
        },
      ],
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    };

    expect(() => PractitionerRoleValidator(item)).not.toThrow();
  });

  it('should be able to validate a new practitioner role  [Example PractitionerRole/3ad0687e-f477-468c-afd5-fcc2bf897808]', async () => {
    const item = new PractitionerRole({
      resourceType: 'PractitionerRole',
      id: 'f007-0',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      practitioner: {
        reference: 'Practitioner/f007',
        display: 'Simone Heps',
      },
      organization: {
        reference: 'Organization/f001',
        display: 'BMC',
      },
      code: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '59058001',
              display: 'General physician',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
    });

    expect(() => PractitionerRoleValidator(item)).not.toThrowError();
  });

  it('should be able to validate a new practitioner role  with wrong data', async () => {
    const item = {
      resourceType: 'PractitionerRole',
      wrongProperty: 'wrong',
      id: 'f007-0',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      practitioner: {
        reference: 'Practitioner/f007',
        display: 'Simone Heps',
      },
      organization: {
        reference: 'Organization/f001',
        display: 'BMC',
      },
      code: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '59058001',
              display: 'General physician',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
    };

    expect(() => PractitionerRoleValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PractitionerRole",
    );
  });

  it('should be able to create a new practitioner role using builder methods [new PractitionerRoleBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .addCode({
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '59058001',
          },
        ],
      })
      .addParamExtension('active', {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      })
      .setActive(true)
      .addHealthcareService({
        reference: 'HealthcareService/example',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _active: {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      },
      active: true,
      code: [
        {
          coding: [
            {
              code: '59058001',
              system: 'http://snomed.info/sct',
            },
          ],
        },
      ],
      healthcareService: [
        {
          reference: 'HealthcareService/example',
        },
      ],
      resourceType: 'PractitionerRole',
    });
  });
});
