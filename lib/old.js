class Widget {
  constructor(value, style) {
    this.el = document.createElement("div");
    this.styleFn = {};

    this.styleBuilder = this.styleBuilder.bind(this);
    this.setState = this.setState.bind(this);
    this.init = this.init.bind(this);
    this.flush = this.flush.bind(this);
    this.build = this.build.bind(this);
    this.c = this.c.bind(this);

    this.context = this;
    if (style) {
      this.styleBuilder(style);
    }
  }

  styleBuilder(f) {
    this.styleFn = f;

    let styles = typeof f === "function" ? f(this) : f;

    Object.keys(styles).forEach((key) => (this.el.style[key] = styles[key]));
  }

  setState(f) {
    f(this);
    this.render(this);
  }

  init() {
    this.render(this);
  }

  flush() {
    while (this.el.firstChild) {
      this.el.removeChild(this.el.lastChild);
    }

    document.getElementById("myapp").appendChild(this.el);
  }

  build(children) {
    this.flush();

    children.forEach((child) => this.el.appendChild(child.el));

    this.styleBuilder(this.styleFn);
  }

  c(f) {
    f(this);
    this.init();
  }
}

class Text extends Widget {
  constructor(value, style) {
    super(value, style);

    this.el.innerText = value;
  }
}

class Container extends Widget {
  constructor(value, style) {
    super(value, style);
  }
}

// Construct new instance
const myApp = new Container();

myApp.c(({ context, styleBuilder, render, init, setState, build, _render }) => {
  // Initialize state properties if any
  context.name = "Max";

  styleBuilder(() => ({
    width: "100px",
    height: "100px",
    marginLeft: "10px",
    marginTop: "10px",
    backgroundColor: context.name > 0.5 ? "red" : "green",
    color: "white"
  }));

  // Render function with context provider
  context.render = () =>
    build([
      new Text(`Hello, my name is ${context.name}`, {
        backgroundColor: context.name > 0.5 ? "green" : "red"
      })
    ]);

  setInterval(() => {
    setState(() => (context.name = Math.random()));
  }, 1000);
});

// Style builder
/*
myApp.styleBuilder(context => ({
  width: "100px",
  height: "100px",
  marginLeft: "10px",
  marginTop: "10px",
  backgroundColor: context.name > 0.5 ? "red" : "green",
  color: "white"
}));
*/

// Render function with context provider
/*
myApp.render = (context) => 
	context.build([
  	new Text(`Hello, my name is ${context.name}`, {
    	backgroundColor: context.name > 0.5 ? "green" : "red"
  	})
	]);
  
myApp.init();

setInterval(() => {

	myApp.setState((context) => 
		context.name = Math.random()
  );
  
}, 1000);

*/
