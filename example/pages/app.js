import { HeaderContainer } from "../widgets/headerContainer";
import { Container } from "../../widgets/container";

const App = new Container({
  style: (context) => ({
    width: "100%",
    height: "100%"
  }),
  builder: ({ children, name }) => children([HeaderContainer(name)])
});
