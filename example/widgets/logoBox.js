import { Container } from "../../widgets/container";
import { Image } from "../../widgets/image";
import router from "../state/routes";

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
          onPressed: () => router.navigate("/home"),
          style: {
            width: "100%"
          },
          className: "no-select"
        })
      ])
  });
