# Local Storage & Auth Persistence

## Summary

How I keep preferences and restore a demo session after reopening the app.

## Preferences

AsyncStorage stores non-sensitive strings. I use it for a name, like localStorage in a web app, but its operations are asynchronous. Objects need JSON.stringify when saving and JSON.parse when reading.

## Tokens

SecureStore stores sensitive values using native secure storage. The example uses it on Android and iOS. It does not fall back to browser storage for tokens.

## Auth flow

Demo login saves a fake token. On reopening the app, I read it back. The private screen reads the token before displaying content and redirects home if it is missing. It attaches the token to an Authorization header and passes that header to a local demo request. Logout deletes the saved token.

There is no real server or credential validation here. A real login obtains a token from a server, sends the header with fetch, handles expired tokens, and the server checks permissions. Hiding a screen alone does not secure an API.

## Try it

Save your name and reload. On a phone, use Demo login, open the private screen, return home, reload, and log out.

[SecureStore reference](https://docs.expo.dev/versions/v57.0.0/sdk/securestore/)
