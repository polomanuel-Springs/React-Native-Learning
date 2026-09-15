# Forms & Input

## Summary

How to read user input, manage its value and show useful validation messages.

## Controlled TextInput

A controlled input gets its displayed text from React state. When the user types, I update that state.

In React, an input commonly uses `value` and `onChange`, reading `event.target.value`. In React Native, `TextInput` commonly uses `value` and `onChangeText`; `onChangeText` gives me the new string directly.

## Keyboard options

- `keyboardType`: requests a suitable keyboard, such as an email keyboard.
- `autoCapitalize`: controls automatic capitalization; email fields usually should not capitalize words.
- `returnKeyType`: chooses the return-key label or appearance where supported.

## Keeping inputs visible

The software keyboard takes up screen space. `KeyboardAvoidingView` can adjust layout when it appears. 

## Validation

I can define rules for the field, check its value, show a useful error near it, and prevent an invalid submission. TypeScript types do not prove that a user's email address is valid.

I can validate a small form with state and functions. React Hook Form can organize larger forms; its `Controller` connects a native controlled input to form state.

