
# vanilj
Extremely lightweight reactive UI framework for the web.

## Features

 - [X] Reactive State management/Context
 - [X] CSS-in-JS / Scoped CSS
 - [X] Prebuilt Widget library
 - [x] Easy to use Flex layout

## Installation & Development

- `npm i && npm run dev`
- Go to `localhost:3000`
- To try it out, check out `/example`
- Happy coding!

## Widgets

Widgets are the core class from which all of our components are derived from.

### Example

    const App = new Container(
	    css: (context) => `
		    width: 100px;
		    height: 100px;
		    backgroundColor: ${context.isActive ? 'green' : 'red};
		`,
		onPressed: context.setState(() => context.isActive != context.isActive
	)

To render the root component of our tree, we simply import "App" from another file as such:

    import App from "./example/pages/app";

### Nesting children

    const App = new Container(
		builder: ({children, context}) =>
			children([
				new MyOtherThing(..),
				new Container(..),
				new Text(..),
				// conditional rendering
				context.isActive ? new Text("Hello") : null
			])
	)

### Example for composing a component 

    const App = new Container(
	    css: (context) => `
		    width: 100px;
		    height: 100px;
		    ${getActiveStyles()};
		`,
		onPressed: () => setActiveState();
	)

    function getActiveStyles() {
		const {context, setState} = App;
		return context.isActive ? 'background-color: black': null;
	}

	function setActiveState() {
		const {context, setState} = App;
		setState(() => {
			context.isActive = !context.isActive;
		});
	}

