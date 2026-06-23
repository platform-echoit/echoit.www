One-line: a single list row with leading/trailing slots, headline and supporting text.

```jsx
<ListItem leadingIcon="cloud" headline="클라우드 마이그레이션" supporting="AWS · Azure · GCP" trailingIcon="chevron_right" />
<ListItem leading={<Avatar initials="EC" />} headline="EchoIT" supporting="고객지원" />
```

Use `leading`/`trailing` for custom elements (avatar, switch) or `leadingIcon`/`trailingIcon` for icons. `onClick` adds a state layer.
