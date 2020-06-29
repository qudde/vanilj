import { FlexContainer } from "../../widgets/flexContainer";
import { Container } from "../../widgets/container";
import { Text } from "../../widgets/text";
import { withLayoutContainer } from "../widgets/withLayoutContainer";

const titleText = () =>
  new Text("The lightweight JavaScript framework.", null, {
    className: () => "heading-text",
    css: (context) => `
        .heading-text {
            color: white !important;
            text-align: center;
            font-size: 43px;
            max-width: 90%;
            animation: heading-text-anim .6s ease;
        }

        @keyframes heading-text-anim {
            from { opacity: 0; transform: translateY(-20px); }
            to   { opacity: 1; transform: translateY(0px); }
          }      
    `
  });

const HomePage = new Container({
  style: () => ({
    height: "590px",
    backgroundColor: "#000"
  }),
  builder: ({ children }) =>
    children([
      withLayoutContainer([
        new FlexContainer({
          style: (context) => ({
            width: "100%",
            height: "500px",
            backgroundColor: "#000"
          }),
          alignItems: "center",
          justifyContent: "center",
          builder: ({ children }) => children([titleText()])
        })
      ])
    ])
});

export default HomePage;
