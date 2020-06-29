import { Widget } from "../lib/widget";

export class Container extends Widget {
  constructor(props) {
    super(props);

    if (props && props.onTouchStart) {
      this.el.addEventListener("mousedown", props.onTouchStart);
    }

    if (props && (props.onPressed || props.onTouchStart || props.onTouchEnd)) {
      this.el.style.cursor = "pointer";
    }

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

    if (props && props.alignItems) {
      this.el.style.alignItems = props.alignItems;
    }

    if (props && props.justifyContent) {
      this.el.style.justifyContent = props.justifyContent;
    }

    this.create(this.context);
  }
}
