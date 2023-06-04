import { Element } from '../base/Element';

/**
 * Attachment FHIR R5 Datatype
 * @see https://hl7.org/fhir/datatypes.html#Attachment
 * @description This type is for containing or referencing attachments - additional data content defined in other formats. The most common use of this type is to include images or reports in some report format such as PDF. However, it can be used for any data that has a MIME type.
 */
export interface Attachment extends Element {
  contentType?: string;
  language?: string;
  data?: string;
  url?: string;
  size?: number;
  hash?: string;
  title?: string;
  /**
   * @description Date attachment was first created
   * @description The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
   * @example e.g. 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
   * @see https://hl7.org/fhir/datatypes.html#Attachment
   */
  creation?: string;
  height?: number;
  width?: number;
  frames?: number;
  duration?: number;
  pages?: number;
  _contentType?: Element;
  _language?: Element;
  _data?: Element;
  _url?: Element;
  _size?: Element;
  _hash?: Element;
  _title?: Element;
  _creation?: Element;
  _height?: Element;
  _width?: Element;
  _frames?: Element;
  _duration?: Element;
  _pages?: Element;
}
