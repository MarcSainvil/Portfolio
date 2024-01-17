# Why `useEffect`

---

Hooks are functions

Hooks often involve the component life cycle.

---

## `useState`

- `useState` provides a variable that persists through renders

- `useState` provides a setter that triggers updates

---

## `useParams`

- `useParams` provides an object of url-related parameters

- if called, this will trigger updates if any parameters change

---

## `useEffect`

- `useEffect` can execute a (callback) function **after** any change in a component's life cycle.

`useEffect` is an extremely versatile Hook.

Before showing you how to use it, let's talk about why we need it.

---

## The Need For `useEffect` 1

Imagine you need some information from a server, and you want it to update the DOM once it arrives.

So you make a function: `getData`, that performs a `fetch`...

What is the problem with the following Component?

```jsx
const Component = (props) => {
	const [data, setData] = useState(null);

	getData().then(serverData => setData(serverData))

	return data ? <DisplayData data={data} /> : <Loading />
}
```

What happens when the `getData` promise resolves?

We `setData`, this triggers an update, and we `fetch` `getData` again and again...

We could use an `if (!data)` to limit this, but what if `props` changes? What if `Component` updates for some other reason?

`useEffect` simplifies this problem.

---

## The Need For `useEffect` 2

What if you want to change the title of the document when the user navigates?

If you execute `document.title = "Cool Profile"` at the beginning of a component definition, it will do so on every update.

Wouldn't it be nice if you could only do this on **Mount**?

`useEffect` can accomplish this.

---

## The Need For `useEffect` 3

What if you want to track mouse movement in a `useState`?

```js
const App = () => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const handleMousemove = (ev) => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
	};

	window.addEventListener("mousemove", handleMousemove);

	return (
		<div>
			The mouse is at {mousePosition.x}, {mousePosition.y}.
		</div>
	);
};
```

On every `mousemove` event, we `setMousePosition`.

On every update we `addEventListener`.

All of these event listeners remain, and slow down performance.

Yes - `useEffect` can solve this too.

---

With all these seemingly magical abilities, how did we ever live without `useEffect`?
