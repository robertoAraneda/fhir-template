import { IEndpoint } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';
import { EndpointBuilder } from '../../../src/r4/models/resources/EndpointBuilder';

import { EndpointValidator } from '../../../src/r4/models/resources/EndpointValidator';

describe('Endpoint Resource FHIR R4', () => {
  let builder: EndpointBuilder;
  const context = new FHIRContext();
  const { Endpoint } = context.forR4();

  // create global
  beforeEach(() => {
    builder = Endpoint.builder();
  });

  it('should be able to create a new endpoint and validate with correct data [Endpoint-example-iid.json]', async () => {
    const resource = new Endpoint({
      resourceType: 'Endpoint',
      id: 'example-iid',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging IID type endpoint\n\t\t</div>',
      },
      status: 'active',
      connectionType: {
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
        code: 'ihe-iid',
      },
      name: 'PACS Hospital Invoke Image Display endpoint',
      payloadType: [
        {
          text: 'DICOM IID',
        },
      ],
      address: 'https://pacs.hospital.org/IHEInvokeImageDisplay',
    });

    expect(resource).toBeDefined();
  });

  it('should be able to create a new endpoint and validate with correct data [Endpoint-example-wadors.json]', async () => {
    const resource: IEndpoint = {
      resourceType: 'Endpoint',
      id: 'example-wadors',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      },
      status: 'active',
      connectionType: {
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
        code: 'dicom-wado-rs',
      },
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      payloadType: [
        {
          text: 'DICOM WADO-RS',
        },
      ],
      payloadMimeType: ['application/dicom'],
      address: 'https://pacs.hospital.org/wado-rs',
    };

    expect(() => EndpointValidator(resource)).not.toThrow();
  });

  it('should be able to create a new endpoint and validate with correct data [Endpoint-example-direct.json]', async () => {
    const resource: IEndpoint = {
      resourceType: 'Endpoint',
      id: 'direct-endpoint',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: direct-endpoint</p><p><b>status</b>: active</p><p><b>connectionType</b>: direct-project (Details: [not stated] code direct-project = 'direct-project', stated as 'null')</p><p><b>name</b>: MARTIN SMIETANKA</p><p><b>managingOrganization</b>: <a>Organization/299</a></p><p><b>payloadType</b>: urn:hl7-org:sdwg:ccda-structuredBody:1.1 <span>(Details : {urn:oid:1.3.6.1.4.1.19376.1.2.3 code 'urn:hl7-org:sdwg:ccda-structuredBody:1.1' = 'urn:hl7-org:sdwg:ccda-structuredBody:1.1)</span></p><p><b>address</b>: <a>MARTIN.SMIETANKA@directnppes.com</a></p></div>",
      },
      status: 'active',
      connectionType: {
        code: 'direct-project',
      },
      name: 'MARTIN SMIETANKA',
      managingOrganization: {
        reference: 'Organization/299',
      },
      payloadType: [
        {
          coding: [
            {
              system: 'urn:oid:1.3.6.1.4.1.19376.1.2.3',
              code: 'urn:hl7-org:sdwg:ccda-structuredBody:1.1',
            },
          ],
        },
      ],
      address: 'mailto:MARTIN.SMIETANKA@directnppes.com',
    };

    expect(() => EndpointValidator(resource)).not.toThrow();
  });

  it('should be able to validate a new endpoint and validate with wrong data', async () => {
    const resource = {
      resourceType: 'Endpoint',
      id: 'example-wadors',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      },
      status: 'wrong-status', // wrong property
      payloadType: [
        {
          text: 'DICOM WADO-RS',
        },
      ],
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
      test: 'test', // wrong property
    };

    expect(() => EndpointValidator(resource as IEndpoint)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for Endpoint",
    );
  });

  it('should be able to create a new endpoint using builder methods [new EndpointBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const resource = builder
      .setId('example-wadors')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
      })
      .addPayloadType({
        coding: [
          {
            code: 'application/dicom',
            system: 'urn:dicom:uid',
          },
        ],
      })
      .setAddress('https://pacs.hospital.org/wado-rs')
      .setStatus('active')
      .setName('PACS Hospital DICOM WADO-RS endpoint')
      .setConnectionType({
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
        code: 'dicom-wado-rs',
      })
      .setAddress('https://pacs.hospital.org/wado-rs')
      .build();

    expect(resource).toBeDefined();
    expect(resource).toEqual({
      address: 'https://pacs.hospital.org/wado-rs',
      connectionType: {
        code: 'dicom-wado-rs',
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
      },
      id: 'example-wadors',
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      payloadType: [
        {
          coding: [
            {
              code: 'application/dicom',
              system: 'urn:dicom:uid',
            },
          ],
        },
      ],
      resourceType: 'Endpoint',
      status: 'active',
      text: {
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
        status: 'generated',
      },
    });
  });
});
