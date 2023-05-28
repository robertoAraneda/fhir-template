import { Element } from './Element';

/**
 * Attachment FHIR R5 Datatype
 * @see https://hl7.org/fhir/datatypes.html#Attachment
 * @description This type is for containing or referencing attachments - additional data content defined in other formats. The most common use of this type is to include images or reports in some report format such as PDF. However, it can be used for any data that has a MIME type.
 */
export class Attachment extends Element {
  /**
   * Mime type of the content, with charset etc.
   * Binding: http://hl7.org/fhir/ValueSet/mimetypes
   */
  contentType?: string;
  language?: string;
  data?: string;
  url?: string;
  size?: number;
  hash?: string;
  title?: string;
  creation?: string;
  height?: number;
  width?: number;
  frames?: number;
  duration?: number;
  /**
   * Number of printed pages
   */
  pages?: number;

  constructor(args?: Partial<Attachment>) {
    super();
    Object.assign(this, args);
  }
}
