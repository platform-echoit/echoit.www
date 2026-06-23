One-line: a compact element for filters, choices, input tokens and suggested actions.

```jsx
<Chip label="클라우드" icon="cloud" />
<Chip label="AI/ML" type="filter" selected />
<Chip label="user@echoit.kr" type="input" onRemove={remove} />
```

`type`: assist, filter, input, suggestion. `selected` gives the tonal state; filter chips show a check when selected.
