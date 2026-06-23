One-line: horizontal tabs for switching between peer views or sections.

```jsx
<Tabs
  tabs={[{value:"about",label:"회사소개"},{value:"biz",label:"사업영역",icon:"hub"}]}
  value={tab}
  onChange={setTab}
/>
```

Controlled with `value` + `onChange`. The active tab gets a primary-colored indicator.
