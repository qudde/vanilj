import { Container } from "../../widgets/container";
import { Image } from "../../widgets/image";

export const LogoBox = () =>
  new Container({
    style: (context) => ({
      width: "260px",
      height: "75px",
      minWidth: "260px"
    }),
    builder: ({ children, name, context }) =>
      children([
        new Image({
          source: "https://dinvardgivare.se/images/logotype.png",
          onPressed: () => alert("on press"),
          style: {
            width: "100%"
          }
        })
      ])
  });
