# react-useEffect

---

## 🦉 Lecture

### Morning:

- [Topic 1 | Component Life Cycle](./lecture/topic-1-component-life-cycle.md)
- [Topic 2 | Why useEffect](./lecture/topic-2-why-useEffect.md)
- [Topic 3 | useEffect Basics](./lecture/topic-3-useEffect-basics.md)
- [Topic 4 | useEffect Examples](./lecture/topic-4-useEffect-examples.md)
- [Topic 5 | useEffect Cleanup](./lecture/topic-5-useEffect-cleanup.md)

### Check-in:

- [Topic 6 | Custom Hooks](./lecture/topic-6-custom-hooks.md)

Keep in mind that these slides are markdown files, so they are not interactive as they are during their presentation.

---

## Setup

In this workshop, you'll be adding functionality to a pre-written (but incomplete) application.

Make sure to `yarn install` the dependencies from the root folder. From there, you can `yarn start` to see the initial application.

If you want to load React on the specified PORT of 3005, you can use `yarn start-mac` or `yarn start-windows` depending on the OS you're on.

The playful application offers a few children's stories: "Tiny Time Tales". `App.js` establishes several `<Route>`s:

| URL             | Component         | Contents                                                  |
| --------------- | ----------------- | --------------------------------------------------------- |
| "/"             | `<Introduction/>` | Welcome to Tiny Time Tales, and Links to /books and /time |
| "/books"        | `<Books/>`        | Links to each book                                        |
| "/book/:bookId" | `<Book/>`         | A single book                                             |
| "/time"         | `<WhatTimeIsIt/>` | An incomplete analog clock                                |
| "/*"            | `<Navigate/>`     | No content - force navigates the url back to "/"          |

Each Route's component will be found in its own folder in `/src/pages`. Note that each of those folders may contain more components, and that the namesake component from each folder can be found in `index.js`.

---

## ⚡ Exercises

### [Exercise 1:](./workshop/exercise-1.md) -  Which Tale Am I Reading?

### [Exercise 2:](./workshop/exercise-2.md) -  Please Join our Newsletter

### [Exercise 3:](./workshop/exercise-3.md) -  How Long Have I Been Here?

### [Exercise 4:](./workshop/exercise-4.md) -  How Long Have I Been Reading?

### [Exercise 5:](./workshop/exercise-5.md) -  Make the Clock Tick

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

### [Exercise 6:](./workshop/exercise-6.md) -  Which Page Number?

### [Exercise 7:](./workshop/exercise-7.md) -  Blackboard

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

### [Exercise 8:](./workshop/exercise-8.md) -  Custom Hooks

<center>🔵 - Stretch (150%) - 🔵</center>