One-line: a checkbox for multi-select choices and consent toggles.

```jsx
<Checkbox checked={agree} onChange={e=>setAgree(e.target.checked)} label="개인정보 수집에 동의합니다" />
```

Pass `label` to render text beside the box, or omit for a bare control.
