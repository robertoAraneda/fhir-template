export class Resource {
  id?: number;
  resourceType: string;

  constructor(resourceType: string) {
    this.resourceType = resourceType;
  }
}
