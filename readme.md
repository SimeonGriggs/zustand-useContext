# Zustand + useContext Demo

Couldn't find a code example of using [Zustand](https://github.com/react-spring/zustand) and [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) to create global state shared and updated between Components.

So here's one.

## This is my experiment, it's NOT indicative of a perfect method

In fact, each Component uses a different method to interact with the Context's Store.

- `Counter.jsx` retrieves state from the Context's Store via a custom Hook `useGlobalStore`
- `Selector.jsx` pulls individual items from the Store directly from the Context
- `Order.jsx` pulls several items from the Store using an "Object Pick"

Which method is best? I don't know. I'm still figuring this out.
