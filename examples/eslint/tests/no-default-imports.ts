import {TSESLint} from "@typescript-eslint/experimental-utils";
import * as dedent from "dedent"; // remove indentation
import * as resolveFrom from "resolve-from";
import * as rule from "../rules/no-default-imports";

const ruleTester = new TSESLint.RuleTester({
  parser: resolveFrom(require.resolve("eslint"), "espree"),
  parserOptions: {
    ecmaVersion: 2015
  }
});

ruleTester.run("no default imports", rule, {
  valid: [
    "foo",
    dedent`
    const foo = 3;
    `
  ],
  invalid: [
    {
      code: dedent`
      import React from "react";
      `
    }
  ],
  errors: [
    {
      data: {condition: "conditional"},
      messageId: "conditionalInTest"
    }
  ]
});
