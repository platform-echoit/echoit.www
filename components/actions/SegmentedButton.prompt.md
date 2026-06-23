One-line: a connected toggle group for switching between a few related options or views.

```jsx
<SegmentedButton
  segments={[{value:"month",label:"월간"},{value:"year",label:"연간"}]}
  value={plan}
  onChange={setPlan}
/>
```

Single-select by default; pass `multiple` for multi-select (value becomes an array). Selected segments show a check.
