import { Widget } from "../lib/widget";

export class Row extends Widget {
  constructor(props) {
    super(props);

    this.el.style.display = "flex";

    if (props.alignItems) {
      this.el.style.alignItems = props.alignItems;
    }

    if (props.justifyContent) {
      this.el.style.justifyContent = props.justifyContent;
    }

    this.create();
  }
}
