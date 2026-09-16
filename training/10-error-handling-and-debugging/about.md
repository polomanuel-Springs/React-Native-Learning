# Error Handling & Debugging

## Summary

How I show useful errors and investigate problems without losing the whole page.

## Request errors

I catch failed asynchronous work with try/catch and show a message. The example rejects a promise to reproduce a request failure without needing the internet.

## Render errors

An error boundary displays fallback content when a child fails during rendering. error-boundary.tsx is a class because React defines these lifecycle methods on class components. The root layout uses it, and the example has a local boundary so I can practice recovery.

A boundary does not catch normal event handler or asynchronous request errors. Those still need try/catch. Pressing Try again remounts the example and resets its state.

## Debugging

I use console.log to inspect values and console.error to report errors. In a native development session, I press j in the Expo terminal to open React Native DevTools and inspect its console, components and breakpoints. For web, I use browser developer tools. I read the error message and stack trace to find the source line.

The intentional render error can also display the development error overlay. I dismiss it to inspect the boundary fallback.

## Try it

Trigger each error, recover with Try again, then inspect the log from Write a log.

[Error boundary reference](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
