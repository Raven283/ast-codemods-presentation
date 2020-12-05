# ESLint rule no-default-imports

A ESLint rule that disallows the use of default imports

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

## Fail

```ts
import React from "react";

import React, {ReactHTMLElement} from "react";
```

## Pass

```ts
import * as React from "react";

import {ReactHTMLElement} from "react";

import type {ReactHTMLElement} from "react";
```
