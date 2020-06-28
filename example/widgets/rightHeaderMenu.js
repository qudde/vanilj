import { FlexContainer } from "../../widgets/flexContainer";
import { Text } from "../../widgets/text";
import { Ionicon } from "../../widgets/ionicon";
import { Container } from "../../widgets/container";
import { Row } from "../../widgets/row";

let _isOpen = false;
let _label = "Resources";
let _isActive = false;
let _menuItems = ["Home", "Search", "My Profile", "Help"];
let _activeOn = false;
let _activeAnim = 0;

const MenuItem = (title, isLast) =>
  new FlexContainer({
    style: {
      height: "38px",
      borderBottom: isLast ? 0 : "1px solid #EEE",
      width: "100%"
    },
    alignItems: "center",
    justifyContent: "space-between",
    builder: ({ children }) =>
      children([
        new Text(title, {
          color: _isOpen ? "rgba(0,0,0,.5)" : "white",
          fontSize: "15px",
          fontWeight: 400,
          width: "95px",
          marginLeft: "10px",
          letterSpacing: "1px"
        }),
        new Ionicon({
          icon: "arrow-forward",
          color: _isOpen ? "rgba(0,0,0,.3)" : "#FFF",
          size: "22px",
          style: {
            height: "21px",
            width: "20px",
            overflow: "hidden",
            marginRight: "10px"
          }
        })
      ])
  });

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
  css: (context) => `
    *:active {
      color: #FF5471 !important;
    }

    .headerMenu {
      animation: menuin .3s ease;
    }

    @keyframes menuin {
      from { opacity: 0; transform: translateY(-30px); }
      to   { opacity: 1; transform: translateY(0px); }
    }

  `,
  alignItems: "center",
  justifyContent: "center",
  onPressed: toggleMenu,
  //onTouchStart: toggleActiveState,
  //onTouchEnd: toggleActiveState,
  builder: ({ children, context }) =>
    children([
      new Ionicon({
        icon: "more",
        color: "#FFF",
        size: "22px",
        style: {
          height: "21px",
          width: "20px",
          overflow: "hidden"
        }
      }),
      new Text(_label, {
        color: "white",
        fontSize: "15px",
        fontWeight: 500,
        width: "95px",
        textAlign: "center",
        letterSpacing: "1px"
      }),
      _isOpen
        ? new Container({
            style: (context) => ({
              position: "absolute",
              width: "180px",
              height: "150px",
              backgroundColor: "#fff",
              boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px",
              borderRadius: "6px",
              overflow: "hidden",
              padding: "10px",
              top: "80px"
            }),
            className: () => "headerMenu",
            builder: ({ children }) =>
              children([
                ..._menuItems.map((item, index) =>
                  MenuItem(item, index === _menuItems.length - 1)
                )
              ])
          })
        : null
    ])
});

function toggleMenu() {
  const { context, setState } = RightHeaderMenu;
  setState(() => {
    _label = !_isOpen ? "Close menu" : "Resources";
    _isOpen = !_isOpen;
    if (!_isOpen) {
      _activeOn = false;
      _activeAnim = 0;
    }
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
