# Lists & Scrolling Data

## Summary

How to display data with FlatList and handle pagination, refreshing, empty results and errors.

## FlatList versus ScrollView

`ScrollView` renders all its children. We use it for a short page with a manageable amount of content. `FlatList` renders a window of items and is a better starting point for long or growing datasets.

On React, mapping an array inside a scrolling container also creates all those elements. `FlatList` gives me a virtualized list abstraction.

## renderItem and keyExtractor

I give `FlatList` a `data` array. `renderItem` describes a row using its item. `keyExtractor` returns a stable, unique string key, usually based on an item ID. An index is unreliable when rows can move, be inserted, or be removed.

With TypeScript, I define the item shape so each row reads the expected fields.

## Refreshing and pagination

Pull-to-refresh reloads the current data. `onRefresh` starts the refresh, while `refreshing` controls its indicator.

Pagination loads another batch. `onEndReached` can request the next page, but I guard against duplicate requests and stop when no more pages exist.

## Loading, empty, and error states

- Loading: I am still waiting for the first result.
- Empty: loading succeeded, but there are no items.
- Error: loading failed; I explain the failure and offer retry.
- Refreshing or loading more: existing rows can remain visible while new data arrives.

