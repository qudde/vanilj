import { LogoBox } from "./logoBox";
import { FlexContainer } from "../../widgets/flexContainer";
import { Row } from "../../widgets/row";
import { HeaderMenu } from "./headerMenu";
import { RightHeaderMenu } from "./rightHeaderMenu";

export const HeaderContainer = (name) =>
  new FlexContainer({
    style: (context) => ({
      position: "absolute",
      width: "100%",
      height: "90px",
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px"
    }),
    justifyContent: "center",
    alignItems: "center",

    builder: ({ children }) =>
      children([
        new Row({
          style: {
            width: "80%",
            maxWidth: "1200px"
          },
          className: (context) => "headerMenuRow",
          css: (context) => `
          
            @media only screen and (max-width: 900px) {
              .headerMenuRow {
                width: calc(100% - 70px) !important;
              }
            }
  
          `,
          alignItems: "center",
          justifyContent: "space-between",
          builder: ({ children }) =>
            children([LogoBox(), false ? HeaderMenu() : null, RightHeaderMenu])
        })
      ])
  });
