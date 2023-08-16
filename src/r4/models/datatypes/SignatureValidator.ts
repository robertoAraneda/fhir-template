import { ISignature } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const signaturekeysDefinitions = DataTypeAttributesHelperR4<ISignature>([
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

export const signatureFields = signaturekeysDefinitions.map((k) => k.name);

export function SignatureValidator(payload: ISignature | ISignature[], path: string = 'Signature'): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      SignatureValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, signaturekeysDefinitions, path);
  ValidateConstraint(payload, path);
}

function ValidateConstraint(payload: ISignature, path: string) {
  if (!payload.type && !payload.who && !payload.onBehalfOf) {
    throw new Error(`Signature must have at least one of type, who, or onBehalfOf`);
  }
}
