import { Container, Text, TappableText } from "./lib/widget";

function MyOtherComponent(context) {
  return new Text(`From other component with context ${context.name}`);
}

const _ = new Container({
  style: (context) => ({
    width: "600px",
    height: "400px",
    marginLeft: "10px",
    marginTop: "10px",
    backgroundColor: context.name > 0.5 ? "red" : "green",
    color: "white"
  }),
  builder: ({ children, name, context }) =>
    children([
      // Conditional rendering
      name > 0.5 ? new Text("Hello") : new Text("World"),
      // Text component with conditional dynamic styles
      new Text(`Hello, my name is ${name}`, {
        backgroundColor: name > 0.5 ? "green" : "red"
      }),
      // Nested components
      new Container({
        builder: ({ children }) =>
          children([
            // Custom nested component derived from function
            MyOtherComponent(context),
            // Components with custom behavior
            new TappableText({
              text: `Click me and look I can still use scoped context! ${name}`,
              onPressed: () => alert("Hello world!"),
              style: {
                backgroundColor: "green",
                width: "100px",
                height: "100px",
                margin: "100px",
                borderRadius: "50px",
                padding: "100px"
              }
            })
          ])
      })
    ])
});

// Updating state
setInterval(() => {
  _.setState((context) => (context.name = Math.random()));
}, 100);
