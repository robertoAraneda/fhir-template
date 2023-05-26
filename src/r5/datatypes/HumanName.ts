import { Period } from './Period';

export class HumanName {
  use?: string;
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: Period;
}

export class HumanNameBuilder {
  private use: string;
  private text: string;
  private family: string;
  private given: string[];
  private prefix: string[];
  private suffix: string[];
  private period: Period;

  getUse(): string {
    return this.use;
  }

  setUse(value: string): HumanNameBuilder {
    this.use = value;

    return this;
  }

  getText(): string {
    return this.text;
  }

  setText(value: string): HumanNameBuilder {
    this.text = value;

    return this;
  }

  getFamily(): string {
    return this.family;
  }

  setFamily(value: string): HumanNameBuilder {
    this.family = value;

    return this;
  }

  getGiven(): string[] {
    return this.given;
  }

  setGiven(value: string[]): HumanNameBuilder {
    this.given = value;

    return this;
  }

  getPrefix(): string[] {
    return this.prefix;
  }

  setPrefix(value: string[]): HumanNameBuilder {
    this.prefix = value;

    return this;
  }

  getSuffix(): string[] {
    return this.suffix;
  }

  setSuffix(value: string[]): HumanNameBuilder {
    this.suffix = value;

    return this;
  }

  getPeriod(): Period {
    return this.period;
  }

  setPeriod(value: Period): HumanNameBuilder {
    this.period = value;

    return this;
  }

  build(): HumanName {
    const humanName = new HumanName();

    humanName.use = this.use;
    humanName.text = this.text;
    humanName.family = this.family;
    humanName.given = this.given;
    humanName.prefix = this.prefix;
    humanName.suffix = this.suffix;
    humanName.period = this.period;

    return humanName;
  }
}
