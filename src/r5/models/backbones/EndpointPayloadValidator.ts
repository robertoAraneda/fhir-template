import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IEndpointPayload } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const EndpointPayloadKeysDefinitions = BackboneAttributesHelperR5<IEndpointPayload>([
  {
    name: 'mimeType',
    type: 'code',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_mimeType',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
]);
export const EndpointPayloadValidator = (
  payload: IEndpointPayload | IEndpointPayload[],
  path: string = 'EndpointPayload',
) => {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      EndpointPayloadValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, EndpointPayloadKeysDefinitions, path);
};
