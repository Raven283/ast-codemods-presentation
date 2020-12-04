import api from "jscodeshift";

function transformer(file, api) {
  const j = api.jscodeshift;

  const nodes = j(file.source);
  console.log(nodes);

  let identifier = nodes.find(j.identifier);

  const replacer = (id => j.identifier(id.name.name.split("").reverse().join("")))
  identifier = identifier.replaceWith(replacer);

  const source = identifier.toSource();

  console.log(source);

  return source
}
