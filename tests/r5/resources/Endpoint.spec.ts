import { IEndpoint } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import EndpointBuilder from '../../../src/r5/models/resources/EndpointBuilder';
import { EndpointValidator } from '../../../src/r5/models/resources/EndpointValidator';

describe('Endpoint FHIR R5', () => {
  let builder: EndpointBuilder;
  const context = new FHIRContext();
  const { Validator, Endpoint } = context.forR5();

  // create global
  beforeEach(() => {
    builder = Endpoint.builder();
  });
  // create global

  it('should be able to create a new endpoint and validate with correct data [Example Endpoint/example]', async () => {
    const resource = new Endpoint({
      resourceType: 'Endpoint',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tHealth Intersections CarePlan Hub<br/>\n\t\t\tCarePlans can be uploaded to/from this loccation\n\t\t</div>',
      },
      identifier: [
        {
          system: 'http://example.org/enpoint-identifier',
          value: 'epcp12',
        },
      ],
      status: 'active',
      connectionType: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
              code: 'hl7-fhir-rest',
            },
          ],
        },
      ],
      name: 'Health Intersections CarePlan Hub',
      description: 'The CarePlan hub provides a test/dev environment for testing submissions',
      environmentType: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/endpoint-environment',
              code: 'test',
            },
          ],
        },
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/endpoint-environment',
              code: 'dev',
            },
          ],
        },
      ],
      managingOrganization: {
        reference: 'Organization/hl7',
      },
      contact: [
        {
          system: 'email',
          value: 'endpointmanager@example.org',
          use: 'work',
        },
      ],
      period: {
        start: '2014-09-01',
      },
      payload: [
        {
          type: [
            {
              coding: [
                {
                  system: 'http://hl7.org/fhir/fhir-types',
                  code: 'CarePlan',
                },
              ],
            },
          ],
          mimeType: ['application/fhir+xml'],
        },
      ],
      address: 'http://fhir3.healthintersections.com.au/open/CarePlan',
      header: ['bearer-code BASGS534s4'],
    });
    expect(resource).toBeDefined();
  });

  it('should be able to create a new endpoint and validate with correct data [Example Endpoint/example]', async () => {
    const resource: IEndpoint = {
      resourceType: 'Endpoint',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tHealth Intersections CarePlan Hub<br/>\n\t\t\tCarePlans can be uploaded to/from this loccation\n\t\t</div>',
      },
      identifier: [
        {
          system: 'http://example.org/enpoint-identifier',
          value: 'epcp12',
        },
      ],
      status: 'active',
      connectionType: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
              code: 'hl7-fhir-rest',
            },
          ],
        },
      ],
      name: 'Health Intersections CarePlan Hub',
      description: 'The CarePlan hub provides a test/dev environment for testing submissions',
      environmentType: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/endpoint-environment',
              code: 'test',
            },
          ],
        },
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/endpoint-environment',
              code: 'dev',
            },
          ],
        },
      ],
      managingOrganization: {
        reference: 'Organization/hl7',
      },
      contact: [
        {
          system: 'email',
          value: 'endpointmanager@example.org',
          use: 'work',
        },
      ],
      period: {
        start: '2014-09-01',
      },
      payload: [
        {
          type: [
            {
              coding: [
                {
                  system: 'http://hl7.org/fhir/fhir-types',
                  code: 'CarePlan',
                },
              ],
            },
          ],
          mimeType: ['application/fhir+xml'],
        },
      ],
      address: 'http://fhir3.healthintersections.com.au/open/CarePlan',
      header: ['bearer-code BASGS534s4'],
    };

    expect(() => EndpointValidator(resource)).not.toThrowError();
  });

  it('should be able to create a new endpoint and validate with correct data [Example Endpoint/example-wadors]', async () => {
    const resource: IEndpoint = {
      resourceType: 'Endpoint',
      id: 'example-wadors',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      },
      status: 'active',
      connectionType: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
              code: 'dicom-wado-rs',
            },
          ],
        },
      ],
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      payload: [
        {
          type: [
            {
              text: 'DICOM WADO-RS',
            },
          ],
          mimeType: ['application/dicom'],
        },
      ],
      address: 'https://pacs.hospital.org/wado-rs',
    };

    expect(() => EndpointValidator(resource)).not.toThrowError();
  });

  it('should be able to create a new endpoint and validate with correct data [Example Endpoint/direct-endpoint]', async () => {
    const resource: IEndpoint = {
      resourceType: 'Endpoint',
      id: 'direct-endpoint',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative: Endpoint</b><a name="direct-endpoint"> </a></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource Endpoint &quot;direct-endpoint&quot; </p></div><p><b>status</b>: active</p><p><b>connectionType</b>: direct-project <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> ([not stated]#direct-project)</span></p><p><b>name</b>: MARTIN SMIETANKA</p><p><b>managingOrganization</b>: <a href="organization-example-f201-aumc.html">Organization/f201</a> &quot;Artis University Medical Center (AUMC)&quot;</p><h3>Payloads</h3><table class="grid"><tr><td>-</td><td><b>Type</b></td><td><b>MimeType</b></td></tr><tr><td>*</td><td>urn:hl7-org:sdwg:ccda-structuredBody:1.1 <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (unknown#urn:hl7-org:sdwg:ccda-structuredBody:1.1)</span></td><td>text/x-hl7-text+xml, application/fhir+xml, application/fhir+json</td></tr></table><p><b>address</b>: <a href="mailto:MARTIN.SMIETANKA@directnppes.com">MARTIN.SMIETANKA@directnppes.com</a></p></div>',
      },
      status: 'active',
      connectionType: [
        {
          coding: [
            {
              code: 'direct-project',
            },
          ],
        },
      ],
      name: 'MARTIN SMIETANKA',
      managingOrganization: {
        reference: 'Organization/f201',
      },
      payload: [
        {
          type: [
            {
              coding: [
                {
                  system: 'urn:oid:1.3.6.1.4.1.19376.1.2.3',
                  code: 'urn:hl7-org:sdwg:ccda-structuredBody:1.1',
                },
              ],
            },
          ],
          mimeType: ['text/x-hl7-text+xml', 'application/fhir+xml', 'application/fhir+json'],
        },
      ],
      address: 'mailto:MARTIN.SMIETANKA@directnppes.com',
    };

    expect(() => EndpointValidator(resource)).not.toThrowError();
  });

  it('should be able to validate a new endpoint and validate with wrong data', async () => {
    const item = {
      resourceType: 'Endpoint',
      id: 'example-wadors',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      },
      status: 'wrong-status', // wrong property
      connectionType: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
              code: 'dicom-wado-rs',
            },
          ],
        },
      ],
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      payload: [
        {
          type: [
            {
              text: 'DICOM WADO-RS',
            },
          ],
          mimeType: ['application/dicom'],
        },
      ],
      address: 'https://pacs.hospital.org/wado-rs',
      test: 'test', // wrong property
    };

    expect(() => EndpointValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for Endpoint",
    );
  });

  it('should be able to create a new endpoint using builder methods [Example Endpoint/example-wadors]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('example-wadors')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      })

      .setAddress('https://pacs.hospital.org/wado-rs')
      .addConnectionType({
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
            code: 'dicom-wado-rs',
          },
        ],
      })
      .setStatus('active')
      .setName('PACS Hospital DICOM WADO-RS endpoint')
      .addPayload({
        type: [
          {
            text: 'DICOM WADO-RS',
          },
        ],
        mimeType: ['application/dicom'],
      })
      .setAddress('https://pacs.hospital.org/wado-rs')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      resourceType: 'Endpoint',
      id: 'example-wadors',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      },
      status: 'active',
      connectionType: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
              code: 'dicom-wado-rs',
            },
          ],
        },
      ],
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      payload: [
        {
          type: [
            {
              text: 'DICOM WADO-RS',
            },
          ],
          mimeType: ['application/dicom'],
        },
      ],
      address: 'https://pacs.hospital.org/wado-rs',
    });
  });
});
