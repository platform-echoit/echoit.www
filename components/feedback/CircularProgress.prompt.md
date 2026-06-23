One-line: a circular spinner for loading states.

```jsx
<CircularProgress />          {/* indeterminate */}
<CircularProgress value={75} /> {/* determinate */}
```

Pass `value` (0–100) for a determinate ring; omit for a spinning indeterminate one. Inherits the primary color.
