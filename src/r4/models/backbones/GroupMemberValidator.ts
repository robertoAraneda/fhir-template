import { IGroupMember } from '../../interfaces/backbones';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const groupMemberKeysDefinitions = BackboneAttributesHelperR4<IGroupMember>([
  {
    name: 'entity',
    type: 'Reference',
    isArray: false,
    isRequired: true,
    referenceValues: ['Patient', 'Practitioner', 'PractitionerRole', 'Device', 'Medication', 'Substance', 'Group'],
  },
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'inactive',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
]);

export const groupMemberFields = groupMemberKeysDefinitions.map((k) => k.name);
export function GroupMemberValidator(payload: IGroupMember | IGroupMember[], path: string = 'GroupMember'): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      GroupMemberValidator(p, path);
    });
    return;
  }

  ValidatorHelperR4(payload, groupMemberKeysDefinitions, path);
}

const elementStructureDefinition = {
  resourceType: 'StructureDefinition',
  id: 'Element',
  text: {
    status: 'generated',
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><table border="0" cellpadding="0" cellspacing="0" style="border: 0px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;"><tr style="border: 1px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;"><th style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="formats.html#table" title="The logical name of the element">Name</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="formats.html#table" title="Information about the use of the element">Flags</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="formats.html#table" title="Minimum and Maximum # of times the the element can appear in the instance">Card.</a></th><th style="width: 100px" class="hierarchy"><a href="formats.html#table" title="Reference to the type of the element">Type</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="formats.html#table" title="Additional information about the element">Description &amp; Constraints</a><span style="float: right"><a href="formats.html#table" title="Legend for this format"><img src="help16.png" alt="doco" style="background-color: inherit"/></a></span></th></tr><tr style="border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white;"><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAL0lEQVR42u3XsQ0AQAgCQHdl/xn8jxvYWB3JlTR0VJLa+OltBwAAYP6EEQAAgCsPVYVAgIJrA/sAAAAASUVORK5CYII=)" class="hierarchy"><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==" alt="." style="background-color: inherit" class="hierarchy"/><img src="data: image/png;base64,R0lGODlhEAAQAPQfAOvGUf7ztuvPMf/78/fkl/Pbg+u8Rvjqteu2Pf3zxPz36Pz0z+vTmPzurPvuw/npofbjquvNefHVduuyN+uuMu3Oafbgjfnqvf/3zv/3xevPi+vRjP/20/bmsP///wD/ACH5BAEKAB8ALAAAAAAQABAAAAVl4CeOZGme5qCqqDg8jyVJaz1876DsmAQAgqDgltspMEhMJoMZ4iy6I1AooFCIv+wKybziALVAoAEjYLwDgGIpJhMslgxaLR4/3rMAWoBp32V5exg8Shl1ckRUQVaMVkQ2kCstKCEAOw==" alt="." style="background-color: white; background-color: inherit" title="Element" class="hierarchy"/> <a href="element-definitions.html#Element" title="Element : Base definition for all elements in a resource.">Element</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a style="padding-left: 3px; padding-right: 3px; color: black; null" href="conformance-rules.html#constraints" title="This element has or is affected by some invariants">I</a><a style="padding-left: 3px; padding-right: 3px; border: 1px grey solid; font-weight: bold; color: black; background-color: #e6ffe6" href="versions.html#std-process" title="Standards Status = Normative">N</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">n/a</td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Base for all elements<br/><span style="font-style: italic" title="ele-1">+ Rule: All FHIR elements must have a @value or children</span></td></tr>\r\n<tr style="border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white;"><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAL0lEQVR42u3XsQ0AQAgCQHdl/xn8jxvYWB3JlTR0VJLa+OltBwAAYP6EEQAAgCsPVYVAgIJrA/sAAAAASUVORK5CYII=)" class="hierarchy"><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==" alt="." style="background-color: inherit" class="hierarchy"/><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC" alt="." style="background-color: inherit" class="hierarchy"/><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==" alt="." style="background-color: white; background-color: inherit" title="Primitive Data Type" class="hierarchy"/> <a href="element-definitions.html#Element.id" title="Element.id : Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.">id</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="datatypes.html#string">string</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Unique id for inter-element referencing</td></tr>\r\n<tr style="border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white;"><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAI0lEQVR42u3QIQEAAAACIL/6/4MvTAQOkLYBAAB4kAAAANwMad9AqkRjgNAAAAAASUVORK5CYII=)" class="hierarchy"><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==" alt="." style="background-color: inherit" class="hierarchy"/><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzME+lXFigAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+3OsRUAIAjEUOL+O8cJABttJM11/x1qZAGqRBEVcNIqdWj1efDqQbb3HwwwwEfABmQUHSPM9dtDAAAAAElFTkSuQmCC" alt="." style="background-color: inherit" class="hierarchy"/><img src="data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADdSURBVDjLY/j//z8DJZhhmBvw41KQ07dzbk5kG/Dtgu/Jb2fsT5JkwI+bqZw/rsfYA21v+XE97f+PS5H/vx5Ra/98QN7+824ZTiIMSJr580bW/x+3iv//etD9/+fdpv/fzwX+/3LY6P/n7TIzCRtwPYYZaPvGH7dKgAb0AA1o/v/tQsh/oO0bP26TZiYqDIB+1/1+wef/z3vN/3/erPr/5aAOyHZdogMRGPIe38/7gvz+Gej3z18OG/8H2u5BvAFn7GO/Htdv/3pAQejzXjkhoO3tH7dIxY7EpEwMBgAr6O5Q8udliwAAAABJRU5ErkJggg==" alt="." style="background-color: white; background-color: inherit" title="Extension" class="hierarchy"/> <a href="element-definitions.html#Element.extension" title="Element.extension : May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.">extension</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..*</td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="extensibility.html#Extension">Extension</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Additional content defined by implementations<br/></td></tr>\r\n<tr><td colspan="5" class="hierarchy"><br/><a href="formats.html#table" title="Legend for this format"><img src="help16.png" alt="doco" style="background-color: inherit"/> Documentation for this format</a></td></tr></table></div>',
  },
  extension: [
    {
      url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status',
      valueCode: 'normative',
    },
    {
      url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version',
      valueCode: '4.0.0',
    },
  ],
  url: 'http://hl7.org/fhir/StructureDefinition/Element',
  version: '4.0.1',
  name: 'Element',
  status: 'active',
  date: '2019-11-01T09:29:23+11:00',
  publisher: 'HL7 FHIR Standard',
  contact: [
    {
      telecom: [
        {
          system: 'url',
          value: 'http://hl7.org/fhir',
        },
      ],
    },
  ],
  description: 'Base StructureDefinition for Element Type: Base definition for all elements in a resource.',
  fhirVersion: '4.0.1',
  mapping: [
    {
      identity: 'rim',
      uri: 'http://hl7.org/v3',
      name: 'RIM Mapping',
    },
  ],
  kind: 'complex-type',
  abstract: true,
  type: 'Element',
  snapshot: {
    element: [
      {
        id: 'Element',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status',
            valueCode: 'normative',
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version',
            valueCode: '4.0.0',
          },
        ],
        path: 'Element',
        short: 'Base for all elements',
        definition: 'Base definition for all elements in a resource.',
        min: 0,
        max: '*',
        base: {
          path: 'Element',
          min: 0,
          max: '*',
        },
        condition: ['ele-1'],
        constraint: [
          {
            key: 'ele-1',
            severity: 'error',
            human: 'All FHIR elements must have a @value or children',
            expression: 'hasValue() or (children().count() > id.count())',
            xpath: '@value|f:*|h:div',
          },
        ],
        isModifier: false,
        mapping: [
          {
            identity: 'rim',
            map: 'n/a',
          },
        ],
      },
      {
        id: 'Element.id',
        path: 'Element.id',
        representation: ['xmlAttr'],
        short: 'Unique id for inter-element referencing',
        definition:
          'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
        min: 0,
        max: '1',
        base: {
          path: 'Element.id',
          min: 0,
          max: '1',
        },
        type: [
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
                valueUrl: 'string',
              },
            ],
            code: 'http://hl7.org/fhirpath/System.String',
          },
        ],
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: 'rim',
            map: 'n/a',
          },
        ],
      },
      {
        id: 'Element.extension',
        path: 'Element.extension',
        slicing: {
          discriminator: [
            {
              type: 'value',
              path: 'url',
            },
          ],
          description: 'Extensions are always sliced by (at least) url',
          rules: 'open',
        },
        short: 'Additional content defined by implementations',
        definition:
          'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
        comment:
          'There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.',
        alias: ['extensions', 'user content'],
        min: 0,
        max: '*',
        base: {
          path: 'Element.extension',
          min: 0,
          max: '*',
        },
        type: [
          {
            code: 'Extension',
          },
        ],
        constraint: [
          {
            key: 'ele-1',
            severity: 'error',
            human: 'All FHIR elements must have a @value or children',
            expression: 'hasValue() or (children().count() > id.count())',
            xpath: '@value|f:*|h:div',
            source: 'http://hl7.org/fhir/StructureDefinition/Element',
          },
          {
            key: 'ext-1',
            severity: 'error',
            human: 'Must have either extensions or value[x], not both',
            expression: 'extension.exists() != value.exists()',
            xpath: 'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
            source: 'http://hl7.org/fhir/StructureDefinition/Extension',
          },
        ],
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: 'rim',
            map: 'n/a',
          },
        ],
      },
    ],
  },
  differential: {
    element: [
      {
        id: 'Element',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status',
            valueCode: 'normative',
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version',
            valueCode: '4.0.0',
          },
        ],
        path: 'Element',
        short: 'Base for all elements',
        definition: 'Base definition for all elements in a resource.',
        min: 0,
        max: '*',
        condition: ['ele-1'],
        constraint: [
          {
            key: 'ele-1',
            severity: 'error',
            human: 'All FHIR elements must have a @value or children',
            expression: 'hasValue() or (children().count() > id.count())',
            xpath: '@value|f:*|h:div',
          },
        ],
        mapping: [
          {
            identity: 'rim',
            map: 'n/a',
          },
        ],
      },
      {
        id: 'Element.id',
        path: 'Element.id',
        representation: ['xmlAttr'],
        short: 'Unique id for inter-element referencing',
        definition:
          'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
        min: 0,
        max: '1',
        type: [
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
                valueUrl: 'string',
              },
            ],
            code: 'http://hl7.org/fhirpath/System.String',
          },
        ],
        mapping: [
          {
            identity: 'rim',
            map: 'n/a',
          },
        ],
      },
      {
        id: 'Element.extension',
        path: 'Element.extension',
        slicing: {
          discriminator: [
            {
              type: 'value',
              path: 'url',
            },
          ],
          description: 'Extensions are always sliced by (at least) url',
          rules: 'open',
        },
        short: 'Additional content defined by implementations',
        definition:
          'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
        comment:
          'There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.',
        alias: ['extensions', 'user content'],
        min: 0,
        max: '*',
        type: [
          {
            code: 'Extension',
          },
        ],
        mapping: [
          {
            identity: 'rim',
            map: 'n/a',
          },
        ],
      },
    ],
  },
};

function transformStructureDefinitionIntoJsonSchema(structureDefinition: any) {
  const jsonSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: structureDefinition.url,
    title: structureDefinition.name,
    description: structureDefinition.description,
    type: 'object',
    properties: {} as Record<string, any>,
  };

  structureDefinition.snapshot.element.forEach((element: any) => {
    const property = {
      description: element.definition,
      type: 'string',
    };

    if (element.max === '1') {
      jsonSchema.properties[element.id] = property;
    } else {
      jsonSchema.properties[element.id] = {
        type: 'array',
        items: property,
      };
    }
  });

  return jsonSchema;
}
