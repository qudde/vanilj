import { Container } from "./container";

export class Ionicon extends Container {
  constructor(props) {
    super(props);

    let el = document.createElement("ion-icon");
    el.name = props.icon;
    el.style.color = props.color;
    el.style.fontSize = props.size;

    this.el.appendChild(el);

    this.create();
  }
}
