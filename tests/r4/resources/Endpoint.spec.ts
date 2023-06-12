import { EndpointBuilder } from '../../../src/r4/builders/resources';
import { IEndpoint } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';
import { Endpoint } from '../../../src/r4/models/resources';

describe('Endpoint Resource FHIR R4', () => {
  let builder: EndpointBuilder;
  let builderFromFunction: EndpointBuilder;
  const context = new FHIRContext();
  const { Validator, Builder, createResource } = context.forR4();

  // create global
  beforeEach(() => {
    builder = new EndpointBuilder();
    builderFromFunction = Builder.resources.EndpointBuilder();
  });

  // create global

  it('should be able to create a new endpoint and validate with correct data [Endpoint-example.json]', async () => {
    const resource = createResource('Endpoint', {
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
      connectionType: {
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
        code: 'hl7-fhir-rest',
      },
      name: 'Health Intersections CarePlan Hub',
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
      payloadType: [
        {
          coding: [
            {
              system: 'http://hl7.org/fhir/resource-types',
              code: 'CarePlan',
            },
          ],
        },
      ],
      payloadMimeType: ['application/fhir+xml'],
      address: 'http://fhir3.healthintersections.com.au/open/CarePlan',
      header: ['bearer-code BASGS534s4'],
    });

    const validate = await Validator.resources.Endpoint(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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
    const validate = await Validator.resources.Endpoint(resource);

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

    const validate = await Validator.resources.Endpoint(resource);

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

    const validate = await Validator.resources.Endpoint(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new endpoint and validate with wrong data', async () => {
    const dataType = {
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

    const validate = await Validator.resources.Endpoint(dataType);

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
  it('should be able to create a new endpoint using builder methods [Builder.resources.EndpointBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setId('example-wadors')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      address: 'https://pacs.hospital.org/wado-rs',
      connectionType: {
        code: 'dicom-wado-rs',
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
      },
      id: 'example-wadors',
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      resourceType: 'Endpoint',
      status: 'active',
      text: {
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
        status: 'generated',
      },
    });
  });

  it('should be able to create a new endpoint using builder methods [new EndpointBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('example-wadors')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      address: 'https://pacs.hospital.org/wado-rs',
      connectionType: {
        code: 'dicom-wado-rs',
        system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
      },
      id: 'example-wadors',
      name: 'PACS Hospital DICOM WADO-RS endpoint',
      resourceType: 'Endpoint',
      status: 'active',
      text: {
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
        status: 'generated',
      },
    });
  });
});
