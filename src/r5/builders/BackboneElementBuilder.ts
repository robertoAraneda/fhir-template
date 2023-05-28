import { BackboneElement } from '../datatypes/BackboneElement';
import { Reference } from '../datatypes/Reference';

export class BackboneElementBuilder<T> {
  private _id?: string;
  private _content?: any;

  setId(id: string): BackboneElementBuilder<T> {
    this._id = id;
    return this;
  }

  getId() {
    return this._id;
  }

  setContent(content?: T): BackboneElementBuilder<T> {
    for (const key in content) {
      console.log(key);
      if (content[key] instanceof Reference) {
        console.log('reference');
      }
    }
    this._content = content;
    return this;
  }

  build(): T {
    return {
      id: this._id,
      ...this._content,
    } as T;
  }

  /*
  constructor(ctor: new () => T) {

    const instance = new ctor();
    console.log(instance);
    //add attribute from content into this

    const methods = Object.keys(instance as Object);
    console.log(methods);
    methods.forEach((method) => {
      if (method) {
        const camelSetName = method.charAt(0).toUpperCase() + method.slice(1);
        this[`set${camelSetName}`] = (value: any): BackboneElementBuilder<T> => {
          this[`${method}`] = value;
          return this;
        };

        const getterName = method.charAt(0).toLowerCase() + method.slice(1);
        this[`get${getterName}`] = () => {
          return this[`${method}`];
        };
      }
    });

    console.log(this);
  }

   */
}
