import { Container, Text, TappableText } from "./lib/widget";

const _ = new Container({
  style: (context) => ({
    width: "600px",
    height: "400px",
    marginLeft: "10px",
    marginTop: "10px",
    backgroundColor: context.name > 0.5 ? "red" : "green",
    color: "white"
  }),
  builder: ({ children, name }) =>
    children([
      new Text(`Hello, my name is ${name}`, {
        backgroundColor: name > 0.5 ? "green" : "red"
      }),
      new Container({
        builder: ({ children }) =>
          children([
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
