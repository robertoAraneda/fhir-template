import { Identifier } from '../datatypes/Identifier';
import { IdentifierUse } from '../enumerators/IdentifierUse';
import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';

export const validateIdentifier = (identifier: Identifier): boolean => {
  const validUses = Object.values(IdentifierUse).map((key) => key) as string[];

  // validate use
  if (identifier.use && !validUses.includes(identifier.use)) {
    throw new Error(`Invalid use '${identifier.use}' passed to Identifier.`);
  }

  // validate period
  if (identifier.period) {
    const period = new Period(identifier.period);
    identifier.period = period;

    if (period.start && period.end && period.start > period.end) {
      throw new Error(`Invalid period passed to Identifier.`);
    }
  }

  // validate assigner
  if (identifier.assigner) {
    // check if string starts with Organization/

    let assignerReference = '';

    if (identifier.assigner.reference && typeof identifier.assigner.reference === 'string') {
      assignerReference = identifier.assigner.reference;
    }

    if (identifier.assigner.reference && typeof identifier.assigner.reference !== 'string') {
      const ref = new Reference<Organization>({
        reference: identifier.assigner.reference,
      });

      assignerReference = ref.reference as string;
    }

    if (!assignerReference.startsWith('Organization/')) {
      throw new Error(`Invalid assigner passed to Identifier. Must be of type Organization.`);
    }
  }

  return true;
};
