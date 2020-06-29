import { Widget } from "../lib/widget";

export class LinkBase extends Widget {
  constructor(props) {
    super({ ...props, element: "a" });
    this.element = "a";
    this.el.href = "#";
    this.el.addEventListener(
      "mouseup",
      function (event) {
        if (props && props.onPressed) {
          this.el.style.webkitUserSelect = "none";
          this.el.style.userSelect = "none";
          this.el.setAttribute("unselectable", "on");
          props.onPressed();
        }

        if (props && props.onTouchEnd) {
          props.onTouchEnd();
        }
      }.bind(this)
    );

    this.create(this.context);
  }
}
