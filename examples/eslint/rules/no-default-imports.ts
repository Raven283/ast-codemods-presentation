import {parse as parsePath} from "path";
import {
  AST_NODE_TYPES,
  ESLintUtils,
  TSESLint,
  TSESTree
} from "@typescript-eslint/experimental-utils";
import {version} from "../../../package.json";

const REPO_URL = "https://github.com/raven283/ast-codemods-presentation/";

const createRule = ESLintUtils.RuleCreator(name => {
  const ruleName = parsePath(name).name;

  return `${REPO_URL}/blob/v${version}/docs/examples/eslint-rule/docs/rules/${ruleName}.md`;
});

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default createRule({
  name: __filename,
  meta: {
    docs: {
      description: "Disallow default imports",
      category: "Best Practices",
      recommended: "error"
    },
    messages: {
      preferNamedImport: "Prefer named- over default-imports"
    },
    schema: [],
    type: "suggestion"
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration: (node: TSESTree.ImportDeclaration) => {
        if (node.specifiers[0].type !== AST_NODE_TYPES.ImportDefaultSpecifier) {
          return;
        }

        context.report({
          data: {import: node.source.value},
          messageId: "preferNamedImport",
          node,
          loc: node.loc,
          fix: fixer => [
            fixer.replaceText(
              node.specifiers[0].type,
              "ImportNamespaceSpecifier"
            )
          ]
        });
      }
    };
  }
});
