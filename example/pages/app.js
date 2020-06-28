import { HeaderContainer } from "../widgets/headerContainer";
import { Container } from "../../widgets/container";

const MainContainer = () =>
  new Container({
    css: (context) => `
      .main {
        margin: 0 auto;
        padding-top: 90px;
        width: 100%;
        max-width: 1440px;
        height: calc(100vh - 90px);
        background: #FFF;
        box-shadow: rgba(87, 127, 133, 0.4) 0px 4px 10px;
      }
  `,
    className: () => "main",
    builder: ({ children }) => children([new Text("hello")])
  });

const App = new Container({
  style: (context) => ({
    width: "100%",
    height: "100%"
  }),
  builder: ({ children, name }) =>
    children([HeaderContainer(name), MainContainer()])
});
