# Custom ESLint rule - disallow unnecessary semicolons

A ESLint rule that enforces the removal of any unnecessary semicolons

### The general layout of ESLint rules

```text
.
├── docs/
│  └─ rules/
│     └─ <rule>.md // Markdown documentation file
├── lib/
│  └─ rules/
│     └─ <rule>.js // source file
└─ tests/
   └─ lib/
      └─ rules/
         └─ <rule>.test.js // test file
```

Espree parser
