import FHIRContext from '../../../src';
import CompositionAttesterBuilder from '../../../src/r5/models/backbones/CompositionAttesterBuilder';
import { CompositionAttesterValidator } from '../../../src/r5/models/backbones/CompositionAttesterValidator';
import ICompositionAttester from '../../../src/r5/interfaces/backbones/ICompositionAttester';
import { CodeableConcept } from '../../../src/r5/models/datatypes';

describe('CompositionAttester FHIR R5', () => {
  let builder: CompositionAttesterBuilder;
  const { CompositionAttester } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = CompositionAttester.builder();
  });

  it('should be able to validate a new composition_attester [new CompositionAttester()]', async () => {
    const item = new CompositionAttester({
      id: '123',
      mode: {
        text: 'legal',
      },
      party: {
        reference: 'RelatedPerson/id',
      },
      time: '2020-01-01T00:00:00.000Z',
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new composition_attester [ICompositionAttester]', async () => {
    const item: ICompositionAttester = {
      id: '123',
      mode: {
        text: 'legal',
      },
      party: {
        reference: 'Patient/id',
      },
      time: '2020-01-01T00:00:00.000Z',
    };

    expect(() => CompositionAttesterValidator(item)).not.toThrow();
  });

  it('should be able to create a new composition_attester using builder methods [CompositionAttester.builder()]', async () => {
    const item = builder
      .setId('123')
      .setTime('2020-01-01T00:00:00.000Z')
      .setMode(new CodeableConcept({ text: 'official' }))
      .setParty({
        reference: 'Patient/123',
      })
      .build();

    expect(item).toEqual({
      id: '123',
      mode: {
        text: 'official',
      },
      party: {
        reference: 'Patient/123',
      },
      time: '2020-01-01T00:00:00.000Z',
    });
  });

  it('should be get errors validators if new composition_attester has wrong data', async () => {
    const item = {
      time: 'wrong date format', // Wrong date format
      mode: 'wrong mode', // Wrong mode
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => CompositionAttesterValidator(item as ICompositionAttester)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for CompositionAttester",
    );
  });

  it('should be get errors validators if new composition_attester has wrong references format', async () => {
    const item: ICompositionAttester = {
      id: '123',
      mode: {
        text: 'legal',
      },
      party: {
        reference: 'RelatedPerson', // Wrong format
      },
    };

    expect(() => CompositionAttesterValidator(item)).toThrowError(
      'ReferenceException: [value=RelatedPerson]. Reference must be in the format {ResourceType}/{id}. Path: CompositionAttester.party.reference',
    );
  });

  it('should be get errors validators if new composition_attester has wrong references resource', async () => {
    const item: ICompositionAttester = {
      id: '123',
      mode: {
        text: 'legal',
      },
      party: {
        reference: 'WrongResource/id', // WrongResource
      },
    };

    expect(() => CompositionAttesterValidator(item)).toThrowError(
      'ReferenceException: [value=WrongResource]. ResourceType must be one of the following: [Patient, RelatedPerson, Practitioner, PractitionerRole, Organization]. Path: CompositionAttester.party.reference',
    );
  });
});
