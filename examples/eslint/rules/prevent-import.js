export default function (context) {
  return {
    ImportDeclaration(node) {
      console.log(node);
    }
  };
}
