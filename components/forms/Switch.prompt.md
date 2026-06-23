One-line: a binary on/off toggle for settings and preferences.

```jsx
<Switch checked={dark} onChange={e => setDark(e.target.checked)} />
```

Controlled via `checked` + `onChange`. The thumb grows when on.
