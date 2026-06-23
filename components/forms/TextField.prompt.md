One-line: the standard text input for forms — filled or outlined.

```jsx
<TextField label="이메일" leadingIcon="mail" placeholder="name@echoit.kr" />
<TextField variant="outlined" label="문의 내용" multiline rows={4} />
<TextField label="전화번호" error supportingText="올바른 번호를 입력하세요" />
```

`variant` filled (default) or outlined. Supports `leadingIcon`/`trailingIcon`, `supportingText`, `error`, and `multiline`.
