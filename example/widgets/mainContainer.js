import { Container } from "../../widgets/container";
import { pageState } from "../state/pageState";
import { observe } from "mobx";
import { Future } from "../../lib/widget";

export const _renderPage = async (index) => {
  switch (index) {
    case 0:
      return await import(/* webpackChunkName: "home" */ "../pages/home");
    case 1:
      return await import(
        /* webpackChunkName: "resources" */ "../pages/resources"
      );
    case 2:
      return await import(/* webpackChunkName: "widgets" */ "../pages/widgets");
    case 3:
      return await import(/* webpackChunkName: "help" */ "../pages/help");
    default:
      return await import(/* webpackChunkName: "home" */ "../pages/home");
  }
};

export const MainContainer = new Container({
  builder: ({ children }) =>
    children([new Future(() => _renderPage(pageState.pageIndex))])
});

observe(pageState, (change) => {
  MainContainer.update();
});
