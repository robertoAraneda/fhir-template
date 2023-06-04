import { AddressBuilder } from './builders/datatypes/AddressBuilder';
import { AttachmentBuilder } from './builders/datatypes/AttachmentBuilder';
import { CodeableConceptBuilder } from './builders/datatypes/CodeableConceptBuilder';
import { CodingBuilder } from './builders/datatypes/CodingBuilder';
import { ContactPointBuilder } from './builders/datatypes/ContactPointBuilder';
import { HumanNameBuilder } from './builders/datatypes/HumanNameBuilder';
import { IdentifierBuilder } from './builders/datatypes/IdentifierBuilder';
import { MetaBuilder } from './builders/datatypes/MetaBuilder';
import { PeriodBuilder } from './builders/datatypes/PeriodBuilder';
import { ReferenceBuilder } from './builders/datatypes/ReferenceBuilder';

const ElementBuilder = {
  Address: () => new AddressBuilder(),
  Attachment: () => new AttachmentBuilder(),
  CodeableConcept: () => new CodeableConceptBuilder(),
  Coding: () => new CodingBuilder(),
  ContactPoint: () => new ContactPointBuilder(),
  HumanName: () => new HumanNameBuilder(),
  Identifier: () => new IdentifierBuilder(),
  Meta: () => new MetaBuilder(),
  Period: () => new PeriodBuilder(),
  Reference: () => new ReferenceBuilder(),
};

export default ElementBuilder;
