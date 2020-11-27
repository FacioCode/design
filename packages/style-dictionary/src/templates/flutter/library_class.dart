<%
var props = _.sortBy(allProperties, item => item.attributes.category + item.name);
var getNamePrefix = (category) => category === "color" ? "Color " : "";
var getValuePrefix = (category) => category === "color" ? "const ": "";

%>part of <%= this.packageName %>;

class <%= this.className %> {
  <%= this.className %>._();

  <%= _.map(props, ({attributes, name, value}) => `static const ${getNamePrefix(attributes.category)}${name} = ${getValuePrefix(attributes.category)}${value};`).join('\n  ') %>
}
