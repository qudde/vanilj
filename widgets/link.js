import { Container } from "../widgets/container";

export class Link extends Container {
  constructor(value, style, rest) {
    super({ value, style, ...rest, element: "a" });
    this.el.href = "#";
    this.el.addEventListener(
      "mouseup",
      function (event) {
        if (props && props.onPressed) {
          props.onPressed();
        }

        if (props && props.onTouchEnd) {
          props.onTouchEnd();
        }
      }.bind(this)
    );
    this.el.appendChild(document.createTextNode(value));
  }
}
