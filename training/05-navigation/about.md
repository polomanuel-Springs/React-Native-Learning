# Navigation

## Summary

How screens connect, receive parameters and let the user return to the previous screen.

## File-based routes and stacks

File-based routing describes where routes are defined. Stack navigation describes how screens are arranged and visited. 

In a React router, I may register URL paths in code. With Expo Router, files in `src/app` define routes and `_layout.tsx` organizes their navigation. React Navigation can also configure navigators directly in code.

## Stack, tabs, and modals

| Navigation type | How I picture it                                                               |
| --------------- | ------------------------------------------------------------------------------ |
| Stack           | Open product details, then go back to the product list.                        |
| Tabs            | Switch between main areas such as Home and Profile.                            |
| Modal           | Present a temporary flow, such as editing a profile, over the current context. |

## Typed route parameters

When opening a detail screen, usually pass an identifier rather than a whole mutable object. Route types help detect incorrect paths or parameter shapes during development.

URL parameters can arrive as strings or arrays and may be missing, is good to check and convert them before use. TypeScript does not validate an incoming deep link at runtime.

## Protected routes

Use authentication state to decide which screens are available. An unauthenticated user should reach the sign-in flow instead of private screens. Also account for the session-loading state so navigation does not decide too early.

A protected screen is a client navigation rule. The server must still authorize access to private data.
