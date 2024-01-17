# useEffect Examples

---

## Example 1: Logging

- Our `App` renders two buttons.
- Our `useEffect` only fires off when `count2` changes.

```js

const App = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

	React.useEffect(()=>{
		console.log("Count2 is currently: ", count2)
	}, [count2])

  return (
    <>
    	<button onClick={()=>{setCount1(count1+1)}}>{count1}</button>
    	<br/>
    	<button onClick={()=>{setCount2(count2+1)}}>{count2}</button>
    </>
  );
};
```

---

## Example 2: More Logging

- Our `App` renders two `Input` components.
- Any time either state is changed, both `Input` components are updated.
- Due to the dependency array, each update triggers one log.

```js
const Input = ({ val, setter }) => {
  React.useEffect(() => {
    console.log(val);
  }, [val]); // <-- look here

  return (
    <input
      value={val}
      onChange={(ev) => setter(ev.target.value)}
    />
  );
};

const App = () => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <>
      <Input val={name} setter={setName} />
      <Input val={address} setter={setAddress} />
    </>
  );
};
```

What happens if we remove the dependency array?

Both `name` and `address` are logged when either changes.

---

## Example 3: `fetch`ing

Note that we're using a function that returns a Promise instead of actually using `fetch`.

We'll simulate the time it takes for a server to respond with a 2s timeout.

```js

const getData = () => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("A title from the server")
		},2000)
	})
}

const App = () => {
	const [data, setData] = React.useState(null);

	React.useEffect(()=>{
		getData()
		.then(response => setData(response))
		// we'll ignore possible errors for now
		
	}, [])

	return data ? <h1>{data}</h1> : <p>loading</p>
};
```

---

## Example 4: Mouse Movement

Now that we only add the event listener on mount, we don't build up event listeners.

```js
const App = () => {
	const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });

	const handleMousemove = (ev) => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
	};

	React.useEffect(()=>{
		window.addEventListener("mousemove", handleMousemove);
	}, [])

	return (
		<div>
			The mouse is at {mousePosition.x}, {mousePosition.y}.
		</div>
	);
};
```