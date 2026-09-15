# Project Structure & Environment

## Summary

How project folders, environment values and development tools keep code organized.

## Project folders

Separate screens, reusable UI, shared logic, and assets so I can find things by responsibility.

| Folder                   | What I keep there                   |
| ------------------------ | ----------------------------------- |
| `src/app/` in my project | Expo Router routes and layouts.     |
| `src/components/`        | Reusable interface components.      |
| `src/hooks/`             | Reusable React hooks.               |
| `src/lib/` when needed   | Shared helpers and service clients. |
| `assets/`                | Images and other bundled assets.    |


## Development, staging, and production

Development is my local workspace, staging is for checking a release, and production serves real users.

Expo exposes client variables with the `EXPO_PUBLIC_` prefix through `process.env`. These values are included in the app bundle, so they are not secrets. I choose the correct environment values for each run or build instead of hardcoding production settings into components.

## ESLint and Prettier

ESLint checks code for configured problems. Prettier formats code consistently. TypeScript checks types. 