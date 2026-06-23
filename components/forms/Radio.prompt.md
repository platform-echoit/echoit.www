One-line: a radio button for choosing exactly one option from a group.

```jsx
<Radio name="plan" value="pro" checked={plan==="pro"} onChange={()=>setPlan("pro")} label="Pro" />
```

Group radios by sharing a `name`. Pass `label` for inline text.
