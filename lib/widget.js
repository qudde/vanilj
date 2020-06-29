export class Widget {
  constructor(props) {
    this.el = document.createElement(
      props && props.element ? props.element : "div"
    );
    this.styleFn = {};
    this.defineStyles = this.defineStyles.bind(this);
    this.setState = this.setState.bind(this);
    this.create = this.create.bind(this);
    this.flush = this.flush.bind(this);
    this.build = this.build.bind(this);
    this.children = this.build.bind(this);
    this.applyCSS = this.applyCSS.bind(this);
    this.context = this;
    this.parent = {};
    this._children;
    this.__ = this.build;

    if (props && props.css) {
      this.css = props.css;
    }

    if (props && props.mounted) {
      this.mounted = props.mounted;
    }

    if (props && props.style) {
      this.defineStyles(props.style);
    }

    if (props && props.builder) {
      this.render = props.builder;
    }

    if (props && props.className && this.el) {
      this.className = props.className;
      this.el.className = props.className(this);
    }
  }

  applyCSS() {
    if (this.css) {
      const css = this.css(this);
      const styleEl = document.createElement("style");
      const scoped = document.createAttribute("scoped");
      styleEl.setAttributeNode(scoped);
      styleEl.appendChild(document.createTextNode(css));
      this.el.appendChild(styleEl);
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
    this.applyCSS();
  }

  attachTo(parent) {
    this.parent = parent;
  }

  setState(f) {
    f(this);
    this.render(this);
  }

  create() {
    if (this.render) {
      this.render(this);
    }
  }

  dispose() {
    this.flush();
  }

  flush() {
    while (this.el.firstChild) {
      this.el.removeChild(this.el.lastChild);
    }

    if (this.unmounted) {
      this.unmounted(this);
    }
  }

  getParent() {
    if (this.el.parentElement) {
      return this.el.parentElement;
    } else {
      return document.getElementById("myapp");
    }
  }

  init() {
    this.getParent().appendChild(this.el);
    this.defineStyles(this.styleFn);
  }

  build(children) {
    this.flush();
    this.init();

    let _this = this;

    this._children = children;

    children.forEach((child) => {
      console.log("child", child);
      if (child && child.el) {
        _this.el.appendChild(child.el);
        console.log("el", child.el);
      }
    });

    if (this.mounted) {
      this.mounted(this);
    }

    this.applyCSS();

    if (this.className) {
      this.el.className = this.className(this);
    }
  }
}
