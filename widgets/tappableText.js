import { Widget } from "../lib/widget";

export class TappableText extends Widget {
  constructor(props) {
    super({ value: props.text, style: props.style });
    this.el.onclick = props.onPressed;
    this.el.style.cursor = "pointer";
    this.el.innerText = props.text;
  }
}
