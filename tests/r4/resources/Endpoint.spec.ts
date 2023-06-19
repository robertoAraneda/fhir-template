import { IEndpoint } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';

import { IEndpointBuilder } from '../../../src/r4/models/resources/EndpointBuilder';

describe('Endpoint Resource FHIR R4', () => {
  let builder: IEndpointBuilder;
  const context = new FHIRContext();
  const { Endpoint, Validator } = context.forR4();

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
    const validate = await Validator.Endpoint(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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
    const validate = await Validator.Endpoint(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await Validator.Endpoint(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await Validator.Endpoint(resource);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(4);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'payloadType'",
        params: {
          missingProperty: 'payloadType',
        },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'test',
        },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/status',
        keyword: 'enum',
        message: 'must be equal to one of the allowed values',
        params: {
          allowedValues: ['active', 'suspended', 'error', 'off', 'entered-in-error', 'test'],
        },
        schemaPath: '#/properties/status/enum',
      },
      {
        instancePath: '/connectionType',
        keyword: 'type',
        message: 'must be object',
        params: {
          type: 'object',
        },
        schemaPath: '#/type',
      },
    ]);
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

    const validate = await Validator.Endpoint(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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
