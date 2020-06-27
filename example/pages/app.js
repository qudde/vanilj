import { HeaderContainer } from "../widgets/headerContainer";
import { Container } from "../../widgets/container";

const App = new Container({
  style: (context) => ({
    width: "100vw",
    height: "100vh"
  }),
  builder: ({ children, name }) => children([HeaderContainer(name)])
});
