import { Container } from "../../widgets/container";

export const withLayoutContainer = (_children) =>
  new Container({
    css: () => `
      .main-layout {
        margin: 0 auto;
        padding-top: 90px;
        width: 100%;
        max-width: 1440px;
        height: calc(100vh - 90px);
      }
    `,
    className: () => "main-layout",
    builder: ({ children }) => children(_children)
  });
