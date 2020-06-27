import { Container, Text } from "./lib/widget";

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
            new Text(`I am ${name}`, {
              backgroundColor: name > 0.5 ? "green" : "red"
            })
          ])
      })
    ])
});

// Updating state
setInterval(() => {
  _.setState((context) => (context.name = Math.random()));
}, 100);
