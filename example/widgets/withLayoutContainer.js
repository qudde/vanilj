import { Container } from "../../widgets/container";

export const withLayoutContainer = (_children, displayShadow) =>
  new Container({
    css: () => `
      .main-layout {
        margin: 0 auto;
        padding-top: 90px;
        width: 100%;
        max-width: 1440px;
        height: calc(100vh - 90px);
        background: #FFF;
        ${
          displayShadow &&
          `
          box-shadow: rgba(87, 127, 133, 0.4) 0px 4px 10px;
        `
        }
      }
    `,
    className: () => "main-layout",
    builder: ({ children }) => children(_children)
  });
