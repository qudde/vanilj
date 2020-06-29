import { Container } from "../widgets/container";

export class Text extends Container {
  constructor(value, style, rest) {
    super({ value, style, ...rest });
    this.el.appendChild(document.createTextNode(value));
  }
}
