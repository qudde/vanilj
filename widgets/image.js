import { Widget } from "../lib/widget";

export class Image extends Widget {
  constructor(props) {
    super({ style: props.style, element: "img" });

    this.el.src = props.source;

    if (props.onPressed) {
      //this.el.style.cursor = "pointer";
      this.el.onclick = props.onPressed;
    }
  }
}
