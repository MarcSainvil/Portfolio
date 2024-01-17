# Exercise 8: Custom Hooks

**This exercise will make use of what you saw in Lecture Topic 6.**

---

## Preamble

Often, when you have state being modified by a `useEffect`, it makes sense to refactor your code to use a custom hook.

This is especially true if the setter is not used in the JSX return of the components.

The primary purpose of custom hooks is reusability. If you make a hook that tracks mouse movement, then it can be used anywhere, even in other applications. This encourages a DRY code base.

The secondary, and less important, purpose of custom hooks is to clean up your components. By moving some logic out of a component, it can make a single component less cluttered and easier to read. However, the coding structure of React was a paradigm shift away from separation of concerns and towards self contained components. So there is certainly a debate and preference to be had here.

There is only one good opportunity in this application to truly merit a custom hook refactor for the sake reusability (Exercise 8.5). However, it's good to get some practice in, plus they could be used in different applications.

---

## Exercise 8.1 `useDelayedRender`

**You should probably push your previous work before you begin!**

In our `Books` component, we have a `useState` that starts at `false`. After some time, it is set to `true`. It is used to conditionally render a component. Let's convert this into a custom hook.

Steps:
1. Make a new "hooks" folder located in the "src" folder.
2. Make a file named "useDelayedRender.js".
3. In that file, make a `useDelayedRender` function and `export default` it.
4. Move logic from the `Books` component into the the custom hook.
5. Think about versatility. What can make this hook more modular? The hook may expect an argument.
6. `return` created state.
7. `import` and use the custom hook in `Books`.
8. (optional) Consider renaming variables in the custom hook to make the names more universal.

---

## Exercise 8.2 `useTitle`

In our `Book` component, we have a `useEffect` that is modifying the document's title.

Build `useTitle`, a custom hook that sets the title on mount and reverts the title on unmount. The hook should expect the new title and default title as arguments. Make use of it in our `Book` component.

Calling it will look something like this:

```js
const SomeComponent = (props) => {
	useTitle("new title", "default title");
	// ...
}
```

Note that we don't need to capture `useTitle`'s `return`. In fact the `useTitle` function doesn't return anything.

---

## Exercise 8.3 `useTime`

In our `WhatTimeIsIt` component, we have a `time` state that only gets set in a `useEffect`.

Build `useTime`, a custom hook that returns and manages this state. It should expect `viewingBugTime` as an argument. Make use of it in our `WhatTimeIsIt` component.

Alternatively, instead of `viewingBugTime`, it can accept a time offset as an argument. This requires more refactoring, but makes the hook more versatile.

---

## Exercise 8.4 `useMousePosition`

In our `Blackboard` component, we have a `mousePosition` state that is only being set in a `useEffect`.

Build `useMousePosition`, a custom hook that returns and manages a `mousePosition` state. Make use of it in our `Blackboard` component. This hook may, or may not, require arguments; it will depend on how you solved Exercise 7.

---

## Exercise 8.5 `useLog`

In our `Book` and `App` components, we have a `useEffect` that performs a `console.log` on an interval.

Build `useLog`, a custom hook that performs those logs every second. Have it accept a string that it will log before the time. Make use of it in both the `Book` and `App` components.

---

Once you've completed the creation and implementation of these custom hooks, the application's functionality should be the same as before you began this Exercise. 

Finally, Exercise-8 is complete 🎉

🔵🔵🔵 Congratulations, you've completed all the exercises! 🔵🔵🔵

Fantastic work!