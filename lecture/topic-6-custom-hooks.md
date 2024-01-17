# Custom Hooks

---

## What are Custom Hooks?

They are functions we code / compose.

After completing a React component, we may decide to refactor some code into a custom hook.

This custom hook can then be easily used elsewhere.

---

## What can Custom Hooks do?

Custom hooks use **one or more** official React hooks.

They often perform side effects!

They often return state(s) / setter(s).

They're a great way to **reuse logic**.

---

Recall the 1st rule of hooks:

1. call hooks inside a react component.

Well it's actually:

1. call hooks inside a react component or a custom hook.

---

By convention, custom hooks' names start with "use".

Examples:

- _useApiEndpoint_
- _useTextToSpeech_
- _useScrollPosition_
- _useCounter_

This makes it easy to distinguish custom hooks from helper functions.

---

## What can be Refactored?

`App` is tracking the mouse position

```js
const App = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const handleMousemove = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return (
    <div>
      The mouse is at {mousePosition.x}, {mousePosition.y}.
    </div>
  );
};
```

Does the `App` component need to instantiate `mousePosition`?

Does the `App` component need to manage `mousePosition` at all?

`App` just needs the value of `mousePosition` to know what content to render...

Wouldn't it be nice if we do something like the following:

```js

const App = () => {

	const mousePosition = manageMousePosition();

	return (
    <div>
      The mouse is at {mousePosition.x}, {mousePosition.y}.
    </div>
  );
}

```

---

## Exercise 1

Extract a custom hook solution:

```jsx
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const handleMousemove = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);
  
  return mousePosition
}

const App = () => {
  const mousePosition = useMousePosition();

  return (
    <div>
      The mouse is at {mousePosition.x}, {mousePosition.y}.
    </div>
  );
};
```

---

## Exercise 2

Extract a custom hook problem

```js
const Time = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <span>
      It is currently
      <br />
      {time.toTimeString()}
    </span>
  );
};
```

Extract a custom hook solution


```jsx
const useTime = (throttleDuration) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, throttleDuration);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [throttleDuration]);
  
  return time.toTimeString()
}

const Time = () => {
  const time = useTime(1000)

  return (
    <span>
      It is currently
      <br />
      {time}
    </span>
  );
};

```

---

Custom Hooks don't add new functionality.

Instead, they clean up components, and keep your codebase efficient.

---

## End of today's topics
