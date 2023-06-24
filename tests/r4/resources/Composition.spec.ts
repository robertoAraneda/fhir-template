import FHIRContext from '../../../src';
import { IComposition } from '../../../src/r4/interfaces/resources';
import CompositionBuilder from '../../../src/r4/models/resources/CompositionBuilder';

describe('Composition FHIR R4', () => {
  let builder: CompositionBuilder;
  const { Composition: Entity, CompositionAttester, CompositionEvent, CompositionSection } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Entity.builder();
  });

  it('should be able to validate a new composition [new Composition()]', async () => {
    expect(
      () =>
        new Entity({
          resourceType: 'Composition',
          id: 'example',
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>Consultation note for Henry Levin the 7th</p>\n\t\t\t<p>Managed by Good Health Clinic</p>\n\t\t</div>',
          },
          identifier: {
            system: 'http://healthintersections.com.au/test',
            value: '1',
          },
          status: 'final',
          type: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '11488-4',
                display: 'Consult note',
              },
            ],
          },
          category: [
            {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: 'LP173421-1',
                  display: 'Report',
                },
              ],
            },
          ],
          subject: {
            reference: 'Patient/xcda',
            display: 'Henry Levin the 7th',
          },
          encounter: {
            reference: 'Encounter/xcda',
          },
          date: '2012-01-04T09:10:14Z',
          author: [
            {
              reference: 'Practitioner/xcda-author',
              display: 'Harold Hippocrates, MD',
            },
          ],
          title: 'Consultation Note',
          confidentiality: 'N',
          attester: [
            {
              mode: 'legal',
              time: '2012-01-04T09:10:14Z',
              party: {
                reference: 'Practitioner/xcda-author',
                display: 'Harold Hippocrates, MD',
              },
            },
          ],
          custodian: {
            reference: 'Organization/2.16.840.1.113883.19.5',
            display: 'Good Health Clinic',
          },
          relatesTo: [
            {
              code: 'replaces',
              targetReference: {
                reference: 'Composition/old-example',
              },
            },
            {
              code: 'appends',
              targetIdentifier: {
                system: 'http://example.org/fhir/NamingSystem/document-ids',
                value: 'ABC123',
              },
            },
          ],
          event: [
            {
              code: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
                      code: 'HEALTHREC',
                      display: 'health record',
                    },
                  ],
                },
              ],
              period: {
                start: '2010-07-18',
                end: '2012-11-12',
              },
              detail: [
                {
                  reference: 'Observation/example',
                },
              ],
            },
          ],
          section: [
            {
              title: 'History of present illness',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '11348-0',
                    display: 'History of past illness Narrative',
                  },
                ],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Code</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Date</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Type</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>BodySite</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Severity</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Stroke</td>\n\t\t\t\t\t\t<td>2010-07-18</td>\n\t\t\t\t\t\t<td>Diagnosis</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Burnt Ear</td>\n\t\t\t\t\t\t<td>2012-05-24</td>\n\t\t\t\t\t\t<td>Diagnosis</td>\n\t\t\t\t\t\t<td>Left Ear</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Asthma</td>\n\t\t\t\t\t\t<td>2012-11-12</td>\n\t\t\t\t\t\t<td>Finding</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t<td>Mild</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>',
              },
              mode: 'snapshot',
              orderedBy: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/list-order',
                    code: 'event-date',
                    display: 'Sorted by Event Date',
                  },
                ],
              },
              entry: [
                {
                  reference: 'Condition/stroke',
                },
                {
                  reference: 'Condition/example',
                },
                {
                  reference: 'Condition/example2',
                },
              ],
            },
            {
              title: 'History of family member diseases',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '10157-6',
                    display: 'History of family member diseases Narrative',
                  },
                ],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t<p>History of family member diseases - not available</p>\n\t\t\t</div>',
              },
              mode: 'snapshot',
              emptyReason: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/list-empty-reason',
                    code: 'withheld',
                    display: 'Information Withheld',
                  },
                ],
              },
            },
          ],
        }),
    ).not.toThrow();
  });

  it('should be able to validate a new composition [IComposition]', async () => {
    const item: IComposition = {
      resourceType: 'Composition',
      id: '180f219f-97a8-486d-99d9-ed631fe4fc57',
      meta: {
        lastUpdated: '2013-05-28T22:12:21Z',
      },
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 180f219f-97a8-486d-99d9-ed631fe4fc57</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>type</b>: Discharge Summary from Responsible Clinician <span>(Details : {LOINC code '28655-9' = 'Physician attending Discharge summary)</span></p><p><b>encounter</b>: <a>http://fhir.healthintersections.com.au/open/Encounter/doc-example</a></p><p><b>date</b>: 01/02/2013 12:30:02 PM</p><p><b>author</b>: <a>Doctor Dave</a></p><p><b>title</b>: Discharge Summary</p><p><b>confidentiality</b>: N</p></div>",
      },
      status: 'final',
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '28655-9',
          },
        ],
        text: 'Discharge Summary from Responsible Clinician',
      },
      subject: {
        reference: 'http://fhir.healthintersections.com.au/open/Patient/d1',
        display: 'Eve Everywoman',
      },
      encounter: {
        reference: 'http://fhir.healthintersections.com.au/open/Encounter/doc-example',
      },
      date: '2013-02-01T12:30:02Z',
      author: [
        {
          reference: 'Practitioner/example',
          display: 'Doctor Dave',
        },
      ],
      title: 'Discharge Summary',
      confidentiality: 'N',
      section: [
        {
          title: 'Reason for admission',
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '29299-5',
                display: 'Reason for visit Narrative',
              },
            ],
          },
          text: {
            status: 'additional',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Details</td>\n\n                    <td/>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Acute Asthmatic attack. Was wheezing for days prior to admission.</td>\n\n                    <td/>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>',
          },
          entry: [
            {
              reference: 'urn:uuid:541a72a8-df75-4484-ac89-ac4923f03b81',
            },
          ],
        },
        {
          title: 'Medications on Discharge',
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '10183-2',
                display: 'Hospital discharge medications Narrative',
              },
            ],
          },
          text: {
            status: 'additional',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Medication</td>\n\n                    <td>Last Change</td>\n\n                    <td>Last ChangeReason</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Theophylline 200mg BD after meals</td>\n\n                    <td>continued</td>\n\n                  </tr>\n\n                  <tr>\n\n                    <td>Ventolin Inhaler</td>\n\n                    <td>stopped</td>\n\n                    <td>Getting side effect of tremor</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>',
          },
          mode: 'working',
          entry: [
            {
              reference: 'urn:uuid:124a6916-5d84-4b8c-b250-10cefb8e6e86',
            },
            {
              reference: 'urn:uuid:673f8db5-0ffd-4395-9657-6da00420bbc1',
            },
          ],
        },
        {
          title: 'Known allergies',
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '48765-2',
                display: 'Allergies and adverse reactions Document',
              },
            ],
          },
          text: {
            status: 'additional',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Allergen</td>\n\n                    <td>Reaction</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Doxycycline</td>\n\n                    <td>Hives</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>',
          },
          entry: [
            {
              reference: 'urn:uuid:47600e0f-b6b5-4308-84b5-5dec157f7637',
            },
          ],
        },
      ],
    };

    expect(() => Entity.validate(item)).not.toThrow();
  });

  it('should be able to validate a new composition [Composition-example-mixed.json]', async () => {
    const item: IComposition = {
      resourceType: 'Composition',
      id: 'example-mixed',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-mixed</p><p><b>status</b>: final</p><p><b>type</b>: Neonatal perinatal medicine Discharge summary <span>(Details : {LOINC code '78418-1' = 'Neonatal perinatal medicine Discharge summary', given as 'Neonatal perinatal medicine Discharge summary'})</span></p><p><b>category</b>: Report <span>(Details : {LOINC code 'LP173421-1' = 'Report', given as 'Report'})</span></p><p><b>date</b>: 30/10/2018 4:56:04 PM</p><p><b>author</b>: <a>Harold Hippocrates, MD</a></p><p><b>title</b>: Discharge Summary (Neonatal Service)</p><p><b>confidentiality</b>: N</p><h3>Attesters</h3><table><tr><td>-</td><td><b>Mode</b></td><td><b>Time</b></td><td><b>Party</b></td></tr><tr><td>*</td><td>legal</td><td>04/01/2012 9:10:14 AM</td><td><a>Harold Hippocrates, MD</a></td></tr></table><p><b>custodian</b>: <a>Good Health Clinic</a></p></div>",
      },
      status: 'final',
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '78418-1',
            display: 'Neonatal perinatal medicine Discharge summary',
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'LP173421-1',
              display: 'Report',
            },
          ],
        },
      ],
      subject: {
        reference: 'Patient/newborn',
        display: 'Tahlia Smith',
      },
      date: '2018-10-30T16:56:04+11:00',
      author: [
        {
          reference: 'Practitioner/xcda-author',
          display: 'Harold Hippocrates, MD',
        },
      ],
      title: 'Discharge Summary (Neonatal Service)',
      confidentiality: 'N',
      attester: [
        {
          mode: 'legal',
          time: '2012-01-04T09:10:14Z',
          party: {
            reference: 'Practitioner/xcda-author',
            display: 'Harold Hippocrates, MD',
          },
        },
      ],
      custodian: {
        reference: 'Organization/2.16.840.1.113883.19.5',
        display: 'Good Health Clinic',
      },
      section: [
        {
          title: "Child's Details",
          code: {
            coding: [
              {
                system: 'http://acme.org/codes/SectionType',
                code: 'newborn',
                display: 'New Born Details',
              },
            ],
          },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">\n        (snip)\n\t\t\t</div>',
          },
        },
        {
          title: "Mpther's Details",
          code: {
            coding: [
              {
                system: 'http://acme.org/codes/SectionType',
                code: 'mother',
                display: "Mother's Details",
              },
            ],
          },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t(snip)\n\t\t\t</div>',
          },
        },
      ],
    };
    expect(() => Entity.validate(item)).not.toThrow();
  });

  it('should be able to create a new composition using builder methods [Composition.builder()]', async () => {
    const item = builder
      .setId('123')
      .addAuthor({
        reference: 'Patient/123',
      })
      .addParamExtension('status', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetAddressLine',
            valueString: '123 Main Street',
          },
        ],
      })
      .addAttester(
        CompositionAttester.builder()
          .setMode('legal')
          .setTime('2020-01-01T00:00:00.000Z')
          .setParty({ reference: 'Patient/123' })
          .build(),
      )
      .addCategory({
        coding: [
          {
            system: 'http://loinc.org',
            code: 'LP173421-1',
            display: 'Report',
          },
        ],
      })
      .addEvent(
        CompositionEvent.builder()
          .addCode({ coding: [{ system: 'http://loinc.org', code: 'LP173421-1', display: 'Report' }] })
          .build(),
      )
      .addSection(
        CompositionSection.builder()
          .setTitle('title')
          .setMode('changes')
          .addEntry({ reference: 'Patient/123' })
          .build(),
      )

      .setConfidentiality('M')
      .setCustodian({ reference: 'Organization/123' })
      .setDate('2020-01-01T00:00:00.000Z')
      .setEncounter({ reference: 'Encounter/123' })
      .setIdentifier({ value: '123' })
      .setSubject({ reference: 'Patient/123' })
      .setTitle('title')
      .setType({ coding: [{ system: 'http://loinc.org', code: 'LP173421-1', display: 'Report' }] })
      .build();

    expect(item).toEqual({
      _status: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetAddressLine',
            valueString: '123 Main Street',
          },
        ],
      },
      attester: [
        {
          mode: 'legal',
          party: {
            reference: 'Patient/123',
          },
          time: '2020-01-01T00:00:00.000Z',
        },
      ],
      author: [
        {
          reference: 'Patient/123',
        },
      ],
      category: [
        {
          coding: [
            {
              code: 'LP173421-1',
              display: 'Report',
              system: 'http://loinc.org',
            },
          ],
        },
      ],
      confidentiality: 'M',
      custodian: {
        reference: 'Organization/123',
      },
      date: '2020-01-01T00:00:00.000Z',
      encounter: {
        reference: 'Encounter/123',
      },
      event: [
        {
          code: [
            {
              coding: [
                {
                  code: 'LP173421-1',
                  display: 'Report',
                  system: 'http://loinc.org',
                },
              ],
            },
          ],
        },
      ],
      id: '123',
      identifier: {
        value: '123',
      },
      resourceType: 'Composition',
      section: [
        {
          entry: [
            {
              reference: 'Patient/123',
            },
          ],
          title: 'title',
          mode: 'changes',
        },
      ],
      subject: {
        reference: 'Patient/123',
      },
      title: 'title',
      type: {
        coding: [
          {
            code: 'LP173421-1',
            display: 'Report',
            system: 'http://loinc.org',
          },
        ],
      },
    });
  });

  it('should be get errors validators if new composition has wrong data', async () => {
    const item = {
      resourceType: 'Composition',
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: 'LP173421-1',
            display: 'Report',
          },
        ],
      },
      author: [
        {
          reference: 'badReference', // Wrong reference
        },
      ],
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => Entity.validate(item as any, 'format')).toThrowError(
      'Invalid Resource: Composition: "must NOT have additional properties: [wrongProperty]',
    );
  });

  it('should be get errors validators if new composition has wrong references format', async () => {
    const item = {
      id: '123',
      resourceType: 'Composition',
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: 'LP173421-1',
            display: 'Report',
          },
        ],
      },
      author: [
        {
          reference: 'badReference', // Wrong reference
        },
      ],
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });

  it('should be get errors validators if new composition has wrong references resource', async () => {
    const item = {
      id: '123',
      resourceType: 'Composition',
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: 'LP173421-1',
            display: 'Report',
          },
        ],
      },
      author: [
        {
          reference: 'WrongReference/123', // Wrong reference
        },
      ],
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });

  it('should be get errors validators if new composition has not a valid constraint [comp-1] ', async () => {
    const item: IComposition = {
      resourceType: 'Composition',
      id: 'example-mixed',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-mixed</p><p><b>status</b>: final</p><p><b>type</b>: Neonatal perinatal medicine Discharge summary <span>(Details : {LOINC code '78418-1' = 'Neonatal perinatal medicine Discharge summary', given as 'Neonatal perinatal medicine Discharge summary'})</span></p><p><b>category</b>: Report <span>(Details : {LOINC code 'LP173421-1' = 'Report', given as 'Report'})</span></p><p><b>date</b>: 30/10/2018 4:56:04 PM</p><p><b>author</b>: <a>Harold Hippocrates, MD</a></p><p><b>title</b>: Discharge Summary (Neonatal Service)</p><p><b>confidentiality</b>: N</p><h3>Attesters</h3><table><tr><td>-</td><td><b>Mode</b></td><td><b>Time</b></td><td><b>Party</b></td></tr><tr><td>*</td><td>legal</td><td>04/01/2012 9:10:14 AM</td><td><a>Harold Hippocrates, MD</a></td></tr></table><p><b>custodian</b>: <a>Good Health Clinic</a></p></div>",
      },
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '78418-1',
            display: 'Neonatal perinatal medicine Discharge summary',
          },
        ],
      },
      author: [
        {
          reference: 'Practitioner/xcda-author',
          display: 'Harold Hippocrates, MD',
        },
      ],
      section: [
        {
          title: "Child's Details",
          code: {
            coding: [
              {
                system: 'http://acme.org/codes/SectionType',
                code: 'newborn',
                display: 'New Born Details',
              },
            ],
          },
        },
      ],
    };
    expect(() => Entity.validate(item, 'constraint')).toThrow('(comp-1)');
  });

  it('should be get errors validators if new composition has not a valid constraint [comp-2] ', async () => {
    const item: IComposition = {
      resourceType: 'Composition',
      id: 'example-mixed',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-mixed</p><p><b>status</b>: final</p><p><b>type</b>: Neonatal perinatal medicine Discharge summary <span>(Details : {LOINC code '78418-1' = 'Neonatal perinatal medicine Discharge summary', given as 'Neonatal perinatal medicine Discharge summary'})</span></p><p><b>category</b>: Report <span>(Details : {LOINC code 'LP173421-1' = 'Report', given as 'Report'})</span></p><p><b>date</b>: 30/10/2018 4:56:04 PM</p><p><b>author</b>: <a>Harold Hippocrates, MD</a></p><p><b>title</b>: Discharge Summary (Neonatal Service)</p><p><b>confidentiality</b>: N</p><h3>Attesters</h3><table><tr><td>-</td><td><b>Mode</b></td><td><b>Time</b></td><td><b>Party</b></td></tr><tr><td>*</td><td>legal</td><td>04/01/2012 9:10:14 AM</td><td><a>Harold Hippocrates, MD</a></td></tr></table><p><b>custodian</b>: <a>Good Health Clinic</a></p></div>",
      },
      type: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '78418-1',
            display: 'Neonatal perinatal medicine Discharge summary',
          },
        ],
      },
      author: [
        {
          reference: 'Practitioner/xcda-author',
          display: 'Harold Hippocrates, MD',
        },
      ],
      section: [
        {
          title: "Child's Details",
          code: {
            coding: [
              {
                system: 'http://acme.org/codes/SectionType',
                code: 'newborn',
                display: 'New Born Details',
              },
            ],
          },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>title</b>: Child\'s Details</p><p><b>code</b>: New Born Details</p></div>',
          },
          emptyReason: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/list-empty-reason',
                code: 'nilknown',
                display: 'Nil Known',
              },
            ],
          },
          entry: [
            {
              reference: 'Observation/example',
            },
          ],
        },
      ],
    };
    expect(() => Entity.validate(item, 'constraint')).toThrow('(comp-2)');
  });
});
