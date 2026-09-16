# Networking & Data Fetching

## Summary

How I request data and handle loading, errors and cached results.

## Fetching data

I use `fetch()`, await the response and read its JSON. I check `response.ok` because HTTP errors do not automatically reject the promise. This is the same pattern I use in React web. Native apps do not enforce browser CORS rules; the web version still does.

## Cache and refetch

The example keeps one post in state. Pressing Load post again reuses it; Refetch makes a new request. This small cache lasts while the component is mounted. TanStack Query can manage shared caches, stale data and retries in larger apps.

## Loading and errors

I show a spinner during the request and a useful error if it fails. Refetch keeps the previous post visible.

## Try it

Load the post twice, then refetch. Turn off the internet and refetch to see the error.

[Networking reference](https://reactnative.dev/docs/network)
