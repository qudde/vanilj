import { Container } from "../../widgets/container";
import { Image } from "../../widgets/image";

const img = require("../../assets/vaniljglass.png");

export const LogoBox = () =>
  new Container({
    style: (context) => ({
      width: "80px",
      height: "65px",
      minWidth: "120px"
    }),
    builder: ({ children, name, context }) =>
      children([
        new Image({
          source: img,
          onPressed: () => alert("on press"),
          style: {
            width: "100%"
          }
        })
      ])
  });
