import { ISignature } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const signatureKeysDefinitions = DataTypeAttributesHelperR5<ISignature>([
  {
    name: 'type',
    type: 'Coding',
    isArray: true,
    isRequired: true,
  },
  {
    name: 'when',
    type: 'instant',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'who',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceValues: ['Practitioner', 'Patient', 'RelatedPerson', 'Device', 'Organization', 'PractitionerRole'],
  },
  {
    name: 'onBehalfOf',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Practitioner', 'Patient', 'RelatedPerson', 'Device', 'Organization', 'PractitionerRole'],
  },
  {
    name: 'targetFormat',
    type: 'code',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'sigFormat',
    type: 'code',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'data',
    type: 'base64Binary',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_when',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_targetFormat',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_sigFormat',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_data',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const signatureFields = signatureKeysDefinitions.map((k) => k.name);

export function SignatureValidator(payload: ISignature | ISignature[], path: string = 'Signature'): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      SignatureValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, signatureKeysDefinitions, path);
}
