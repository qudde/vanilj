import { Container } from "../../widgets/container";
import { Text } from "../../widgets/text";
import { pageState } from "../state/pageState";
import { observe } from "mobx";

export const MainContainer = new Container({
  css: (context) => `
      .main {
        margin: 0 auto;
        padding-top: 200px;
        width: 100%;
        max-width: 1440px;
        height: calc(100vh - 90px);
        background: #FFF;
        box-shadow: rgba(87, 127, 133, 0.4) 0px 4px 10px;
      }
  `,

  className: () => "main",
  builder: ({ children }) =>
    children([new Text(`Rendering page: ${pageState.pageIndex}`)])
});

observe(pageState, (change) => {
  if (change.name === "pageIndex") {
    MainContainer.setState(() => {
      pageState.setPageIndex(change.newValue);
    });
  }
});
