/* eslint-disable max-lines,sort-keys */

<%
_.forEach(props, (prop) => {
%>export const <%=prop.key%>Styles = {
<%
const classKeys = getAllPropertiesByItem(prop.value);
_.forEach(classKeys, (classKey) => { %>
  <%= classKey.key %>: {<%
_.forEach(classKey.value, (property) => {
  const { attributes, comment, value } = property;
  const { item, subitem, type } = attributes;
  const name = getCssVarName({ classKey: item, component: type, property: subitem });
  const fallbackComment = `${_.startCase(subitem)} for ${_.startCase(type)} ${_.startCase(item)}`;
%>

    /**
     * <%= comment ? comment : fallbackComment %>
     */
    <%= subitem %>: "var(<%= name %>, <%= value %>)",
<% }); %>
  },
<% }); %>
};

<% }); %>
