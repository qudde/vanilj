import { Container } from "../../widgets/container";
import { Text } from "../../widgets/text";
import { pageState } from "../state/pageState";
import { observe } from "mobx";
import { Future } from "../../lib/widget";

export const _renderPage = async (index) => {
  switch (index) {
    case 0:
      return await import(/* webpackChunkName: "home" */ "../pages/home");
    case 1:
      return new Text("Resources");
    case 2:
      return new Text("Widgets");
    case 3:
      return new Text("Help");
    default:
      return new Text("Home");
  }
};

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
    children([new Future(() => _renderPage(pageState.pageIndex))])
});

observe(pageState, (change) => {
  MainContainer.update();
});
