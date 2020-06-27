import { LogoBox } from "./logoBox";
import { FlexContainer } from "../../widgets/flexContainer";
import { Row } from "../../widgets/row";
import { HeaderMenu } from "./headerMenu";
import { RightHeaderMenu } from "./rightHeaderMenu";

export const HeaderContainer = (name) =>
  new FlexContainer({
    style: (context) => ({
      width: "100%",
      height: "90px",
      backgroundColor: "rgb(39, 186, 190)",
      boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px",
      overflow: "hidden"
    }),
    justifyContent: "center",
    alignItems: "center",
    builder: ({ children }) =>
      children([
        new Row({
          style: {
            width: "80%"
          },
          alignItems: "center",
          justifyContent: "space-around",
          builder: ({ children }) =>
            children([LogoBox(), false ? HeaderMenu() : null, RightHeaderMenu])
        })
      ])
  });
