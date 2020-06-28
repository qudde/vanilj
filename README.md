
# vanilj
Lightweight reactive and extensible UI framework for the web.


## Features

 - [X] Reactive State management/Context
 - [X] CSS-in-JS / Scoped CSS
 - [X] Builtin simple but extensible Widget library
 - [x] Easy to use Flex layout


## Installation & Development

- `npm i && npm run dev`
- Go to `localhost:3000`
- To try it out, check out `/example`
- Happy coding!


## Widgets

Widgets are the core class from which all of our components are derived from.


### Example
Here we are using scoped css in conjuction with context state to render our widget styles. We use `onPressed` to trigger a state change event on `isActive`.

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

This is how it looks when nesting children in the tree. Conditional rendering also works at all levels. You can call anything inside there as long as it returns a valid Widget.

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


### Composing a component 

    export const App = () => new Container(
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
