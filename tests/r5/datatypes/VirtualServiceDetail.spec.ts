import { IVirtualServiceDetail } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import VirtualServiceDetailBuilder from '../../../src/r5/models/datatypes/VirtualServiceDetailBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('VirtualServiceDetail', () => {
  let builder: VirtualServiceDetailBuilder;
  const { VirtualServiceDetail } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = VirtualServiceDetail.builder();
  });

  it('should be able to validate a new virtual_service_detail [new VirtualServiceDetail()]', async () => {
    const dataType = new VirtualServiceDetail({
      addressString: '123 Main St',
      additionalInfo: ['info'],
      addressUrl: 'http://example.com',
      maxParticipants: 1,
      sessionKey: '123',
    });

    const validateAddress = await _validateDataType(dataType, 'VirtualServiceDetail');
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new virtual_service_detail [IVirtualServiceDetail]', async () => {
    const dataType: IVirtualServiceDetail = {
      addressString: '123 Main St',
      additionalInfo: ['info'],
      addressUrl: 'http://example.com',
      maxParticipants: 1,
      sessionKey: '123',
    };

    const validateAddress = await _validateDataType(dataType, 'VirtualServiceDetail');
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to create a new virtual_service_detail using builder methods [new VirtualServiceDetailBuilder()]', async () => {
    const dataType: IVirtualServiceDetail = builder
      .addAdditionalInfo('info')
      .addAdditionalInfo('info2')
      .setAddressString('123 Main St')
      .setAddressUrl('http://example.com')
      .build();

    expect(dataType).toEqual({
      additionalInfo: ['info', 'info2'],
      addressString: '123 Main St',
      addressUrl: 'http://example.com',
    });

    const validateAddress = await _validateDataType(dataType, 'VirtualServiceDetail');
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be get errors validators if new virtual_service_detail has wrong data', async () => {
    const dataType = {
      addressString: '123 Main St',
      additionalInfo: ['info'],
      addressUrl: 'http://example.com',
      maxParticipants: 1,
      sessionKey: '123',
      wrongProperty: 'wrong', // wrong property
    };

    const validateAddress = await _validateDataType(dataType, 'VirtualServiceDetail');

    expect(validateAddress.isValid).toBeFalsy();
    expect(validateAddress.errors).toBeDefined();
    expect(validateAddress.errors?.length).toBe(1);
    expect(validateAddress.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        message: 'must NOT have additional properties',
      },
    ]);
  });
});
