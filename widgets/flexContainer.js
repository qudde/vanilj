import { Widget } from "../lib/widget";
import { Container } from "./container";

export class FlexContainer extends Container {
  constructor(props) {
    super(props);

    this.el.style.flex = 1;
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
