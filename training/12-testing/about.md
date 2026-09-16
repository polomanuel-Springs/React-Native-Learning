# Testing

## Summary

How I check a function, a rendered component and a button interaction.

## Unit test

A unit test checks a small piece of logic. The first test verifies that addOne(4) returns 5.

## Component test

React Native Testing Library renders the component in a test environment. I look for the initial Count: 0 text. The interaction test finds Add one by its button role, presses it and checks that Count: 1 appears.

## Run the tests

From the project folder:

```bash
npm test
```

Jest uses the jest-expo preset. The test is next to its example in example.test.tsx. These tests do not open a simulator and do not prove that native permissions or the real layout work; I check those on a device.

## Try it

Change addOne to add two and run the tests to see them fail. Restore it, then add a test that presses the button twice.

[Testing reference](https://docs.expo.dev/develop/unit-testing/)
