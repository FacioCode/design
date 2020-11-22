part of <%= packageName %>;
<% _.forEach(props, (prop) => { %>
class <%- _.upperFirst(prop.key) %>Styles {
<% _.forEach(prop.value, (componentStyle) => {%>
  <% console.log(componentStyle); if(componentStyle.comment) { %>/// <%= componentStyle.comment %><% } else { %>/// <%= componentStyle.attributes.subitem %> for <%= componentStyle.attributes.item %><% } %>
  static const <%= componentStyle.name %> = <%= componentStyle.value %>;
<% }); %>
}
<% }); %>
