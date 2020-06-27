import { Container } from "../../widgets/container";

export const HeaderMenu = () =>
  new Container({
    style: (context) => ({
      width: "400px",
      height: "40px",
      borderRadius: "20px",
      backgroundColor: "rgba(255,255,255, .4)"
    }),
    builder: ({ children, name, context }) => children([])
  });
