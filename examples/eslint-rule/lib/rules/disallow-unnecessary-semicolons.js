"use strict";
import("eslint");

const transform = () => {
  return {
    meta: {
      type: "suggestion",

      docs: {
        description: "disallow unnecessary semicolons",
        category: "Possible Errors",
        recommended: true,
        url: "https://eslint.org/docs/rules/no-extra-semi",
      },

      fixable: true,
      schema: [],

      /** @type {import(eslint).Context} */
      create: function (context) {
        const source = context.getSourceCode();

        return {
          // callback function(s)
        };
      },
    },
  };
};
