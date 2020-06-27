import { FlexContainer } from "../../widgets/flexContainer";
import { Text } from "../../widgets/text";
import { Ionicon } from "../../widgets/ionicon";
import { Container } from "../../widgets/container";

let _isOpen = false;
let _label = "Open menu";
let _isActive = false;

export const RightHeaderMenu = new FlexContainer({
  style: (context) => ({
    maxWidth: "140px",
    height: "40px",
    backgroundColor: _isOpen ? "rgba(255,255,255,.2)" : "rgba(0, 0, 0, .2)",
    boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px",
    borderRadius: "20px",
    userSelect: "none",
    ...getActiveStyles(context)
  }),
  alignItems: "center",
  justifyContent: "center",
  onPressed: toggleMenu,
  //onTouchStart: toggleActiveState,
  //onTouchEnd: toggleActiveState,
  builder: ({ children, context }) =>
    children([
      new Ionicon({
        icon: "more",
        color: _isOpen ? "rgba(0,0,0,.6)" : "#FFF",
        size: "22px",
        style: {
          height: "21px",
          width: "20px",
          overflow: "hidden"
        }
      }),
      new Text(_label, {
        color: _isOpen ? "rgba(0,0,0,.5)" : "white",
        fontSize: "15px",
        fontWeight: 500,
        width: "99px",
        textAlign: "center"
      }),
      _isOpen
        ? new Container({
            style: {
              position: "absolute",
              width: "180px",
              height: "100px",
              backgroundColor: "#fff",
              boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px",
              top: "80px",
              borderRadius: "20px"
            }
          })
        : null
    ])
});

function toggleMenu() {
  const { context, setState } = RightHeaderMenu;
  setState(() => {
    _label = !_isOpen ? "Close menu" : "Open menu";
    _isOpen = !_isOpen;
  });
}

function toggleActiveState() {
  const { context, setState } = RightHeaderMenu;
  setState(() => {
    _isActive = !_isActive;
  });
}

function getActiveStyles(context) {
  if (_isActive) {
    return {
      backgroundColor: "rgba(0, 0, 0, .1)"
    };
  }
}

RightHeaderMenu.setState((context) => (context.label = "Open"));
