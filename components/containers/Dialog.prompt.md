One-line: a modal dialog for focused decisions and confirmations.

```jsx
<Dialog
  open={open}
  icon="info"
  headline="문의를 전송할까요?"
  actions={[{label:"취소",onClick:close},{label:"전송",variant:"filled",onClick:send}]}
  onClose={close}
>
  입력하신 내용으로 상담 요청이 접수됩니다.
</Dialog>
```

Renders its own scrim. Closes on backdrop click via `onClose`. `actions` render as buttons, right-aligned.
