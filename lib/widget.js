export class Widget {
  constructor(props) {
    this.el = document.createElement("div");
    this.styleFn = {};
    this.defineStyles = this.defineStyles.bind(this);
    this.setState = this.setState.bind(this);
    this.create = this.create.bind(this);
    this.flush = this.flush.bind(this);
    this.build = this.build.bind(this);
    this.children = this.build.bind(this);
    this.context = this;
    this.parent = {};
    this.__ = this.build;

    if (props && props.style) {
      this.defineStyles(props.style);
    }

    if (props && props.builder) {
      this.render = props.builder;
    }
  }

  defineStyles(f) {
    this.styleFn = f;

    let styles = typeof f === "function" ? f(this) : f;

    Object.keys(styles).forEach((key) => (this.el.style[key] = styles[key]));
  }

  applyStyles() {
    const styles = typeof this.style === "function" ? f(this) : this.style;
    Object.keys(styles).forEach((key) => (this.el.style[key] = styles[key]));
  }

  attachTo(parent) {
    this.parent = parent;
  }

  setState(f) {
    f(this);
    this.render(this);
  }

  create() {
    this.render(this);
  }

  dispose() {
    this.flush();
  }

  flush() {
    while (this.el.firstChild) {
      this.el.removeChild(this.el.lastChild);
    }
  }

  init() {
    document.getElementById("myapp").appendChild(this.el);
    this.defineStyles(this.styleFn);
  }

  build(children) {
    this.flush();
    this.init();
    children.forEach(
      (child) => this.el.appendChild(child.el) && (child.parent = this.context)
    );
  }
}

export class Text extends Widget {
  constructor(value, style) {
    super({ value, style });

    this.el.innerText = value;
  }
}

export class Container extends Widget {
  constructor(props) {
    super(props);
    this.create();
  }
}

export class TappableText extends Widget {
  constructor(props) {
    super({ value: props.text, style: props.style });
    this.el.onclick = props.onPressed;
    this.el.innerText = props.text;
    this.el.style.cursor = "pointer";
  }
}
