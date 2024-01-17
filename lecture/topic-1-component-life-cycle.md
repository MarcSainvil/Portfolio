# Component Life Cycle

In order to understand `useEffect` we have to understand more about the component life cycle.

---

Components are `functions`!

The `functions` are defined (and exported) in `JavaScript` files.

1. When are these files executed?

2. When are these `functions` executed?

---

## 1. File Execution

A file is executed as soon as an import is encountered!

This is how `JavaScript` figures out what is being exported.

```jsx
import Container from "./components/shared/Container";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Container>
			<Header/>
			<Articles/>
			<Footer/>
		</Container>
	)
}

```

During the execution of this `App.js` file, the 4 files it imports are executed.

---

## 1. File Execution

Exports from the file's execution are stored into memory.

So if a file is imported multiple times in an application, the file is only executed the first time.

```jsx
// App.js
...
return (
	<>
		<Header/>
		<Footer/>
	</>
);
...

// Header.js
import BorderedContainer from "./components/shared/BorderedContainer";
...

// Footer.js
import BorderedContainer from "./components/shared/BorderedContainer";
...
```

Regardless of renders, the BorderedContainer.js file is executed one time.

---

## 1. File Execution Consequences

This means code, outside of function definitions, is executed once, before any renders.

```jsx

// Component.js
import Title from "./Title";

const titles = ["A Good Title", "A Bad Title", "An Ugly Title"];

let someVariable = 0;

const Component = ()=>{
	return titles.map(title => <Title key={title} title={title}/>)
}
export default Component
```

The `titles` array is formed one time, regardless of how many times this `Component` is rendered.

`someVariable` will continue to exist regardless of whether or not `Component` is rendered.

---

## 2. Component (function) Execution

Components are executed (or rendered) when `React` needs the return of the component to calculate the virtual DOM.

---

## 2. When are Components Rendered?

Components tend to render other components.

In general, a component is rendered when it is called by another component.

```jsx
import Container from "./components/shared/Container";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Container>
			<Header/>
			<Articles/>
			<Footer/>
		</Container>
	)
}

```

---

## 2. When are Components Rendered?

These renders can be conditional in different ways:

```jsx
if (viewingDetails) {
	return <Details />
}
```

```jsx
	return (
		<>
			{loggedIn && <Dashboard />}
			<Main />
		</>
	)
```

```jsx
	<Route path="/home" element={<Home />}
```

---

## 2. When are Components Rendered?

Components can require **re-rendering** when `state` changes, or the `url` changes:

Example with `useState`:


```jsx
const Counter = () => {
	const [count, setCount] = React.useState(0);
	console.log("Counter had been executed: ", count);

	return (
	  <>
			<p>Count: {count}</p>
			<button onClick={() => {
				setCount(count + 1)
			}}>
				Increment
			</button>
		</>
	);
};
```

---

## Render-related Definitions in React:

**Rendering** = the execution of a component.

The Component Life Cycle is as follows:

1. **Mount** = the first render of a component.
2. **Update** = re-render of a component (exs: state change, parent re-render, or prop change).
3. **Unmount** = removal from DOM, end of life cycle.

- Updates (2) may occur many times. This is `React` calculating a new virtual DOM to compare differences to the actual DOM to know what new pixels to paint.

- Unmounts (3) do not result in components being executed

---

## Thinking About Mount and Unmounts

What happens each time the `button` is clicked?

```jsx

const Evens = () => <p>Count is even!</p>;
const Odds = () => <p>Count is odd!</p>;

const Counter = () => {
	const [count, setCount] = React.useState(0);

	return (
	  <>
			<p>Count: {count}</p>
			<button onClick={() => {
				setCount(count + 1)
			}}>
				Increment
			</button>
			{count % 2 === 0 ? <Evens/> : <Odds/>}
		</>
	);
};
```

Each time the `count` is Incremented:
- `Counter` is Updated
- `Evens` is either `Mounted` or `Unmounted`
- `Odds` is either `Unmounted` or `Mounted`
