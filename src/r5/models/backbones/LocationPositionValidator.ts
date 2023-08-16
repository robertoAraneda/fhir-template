import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ILocationPosition } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const locationPositionKeysDefinitions = BackboneAttributesHelperR5<ILocationPosition>([
  {
    name: 'longitude',
    type: 'decimal',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'latitude',
    type: 'decimal',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'altitude',
    type: 'decimal',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_longitude',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_latitude',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_altitude',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const locationPositionFields = locationPositionKeysDefinitions.map((item) => item.name);

export function LocationPositionValidator(
  payload: ILocationPosition | ILocationPosition[],
  path: string = 'LocationPosition',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((bundleEntry, index) => {
      LocationPositionValidator(bundleEntry, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(payload, locationPositionKeysDefinitions, path);
}
