import { Container, Text } from "./lib/widget";

const _ = new Container({
  children: null
});

_.name = "Max";

_.render = ({ build, name }) =>
  build([
    new Text(`Hello, my name is ${name}`, {
      backgroundColor: name > 0.5 ? "green" : "red"
    }),
    new Text("Yo"),
    new Container()
  ]);

_.defineStyles((context) => ({
  width: "100px",
  height: "100px",
  marginLeft: "10px",
  marginTop: "10px",
  backgroundColor: context.name > 0.5 ? "red" : "green",
  color: "white"
}));

// Mount component
_.create();

console.log(_);

// Updating state
setInterval(() => {
  _.setState((context) => (context.name = Math.random()));
}, 100);
