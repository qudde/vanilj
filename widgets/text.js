import { Widget } from "../lib/widget";

export class Text extends Widget {
  constructor(value, style) {
    super({ value, style });

    this.el.innerText = value;
  }
}
