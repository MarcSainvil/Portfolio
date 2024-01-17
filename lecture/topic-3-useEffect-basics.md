# `useEffect` Basics

---

`useEffect` was given its name because it is designed to handle side effects.

Generally, side effects aren't directly concerned with rendering UI.

Accessing information from a network/server is a very common use for `useEffect`.

This will often result in rendering UI, but here `useEffect` is calling a `fetch`. The `fetch` would `then` 😉 set state or navigate and cause a UI update.

---

## `useEffect`

```jsx
import React from "react"; // then call React.useEffect()

// or

import {useEffect} from "react"; // then call useEffect()
```

- `useEffect` is a hook

- hooks are functions

- hooks must be called, unconditionally, in a React component

---

## Calling `useEffect`

- `useEffect` returns undefined

- `useEffect` accepts one **or** two arguments...

```jsx
const Component = () => {

	useEffect( mandatory , optional )

	...
}

```

---

The first argument is a callback **function**:

```js
useEffect( () => {} );
```

`useEffect` calls this function **AFTER** renders (mount / updates)

---

The second argument is optional.

If included, it must be an **array**.

We call this a **dependency array**

```js
useEffect(() => {

  console.log("some state changed!");

}, [state1, state2]);
```

It limits which renders let `useEffect` call its function

---

## Understanding the Dependency Array

```js
useEffect(() => {

  console.log("some state changed!");

}, [state1, state2]);
```

The component that calls this `useEffect` will log "some state changed!" after mounting.

It will also log "some state changed!" when `state1` or `state2` changes.

If the component has other state changes, or if it updates for other reasons, this log will not happen.

Finally, remember, the log happens **AFTER** renders, so that's after the component has made its return and after the actual DOM has been updated.

---

This leads to three possible cases:

**Case 1**: no dependency array

```js
useEffect(() => {

  console.log("I fire off every render!");

});
```

---

**Case 2**: one or more values in a dependency array

```js
useEffect(() => {

  console.log("The name has changed!");

	// this function is called on updates where name changed
	// this function is also called after mount!
	// one way of thinking about this is that
	// name changed from not existing to being something

}, [name]);
```

---

**Case 3**: an empty dependency array

```js
useEffect(() => {

  console.log("I only fire off after the FIRST render (mount)");

}, []);
```