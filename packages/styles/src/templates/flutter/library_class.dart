<%
var props = _.sortBy(allProperties, item => item.attributes.category + item.name);
%>part of <%= this.packageName %>;

class <%= this.className %> {
    <%= this.className %>._();

    <%= _.map(props, function(prop) { return 'static const ' + prop.name + ' = ' + prop.value + ";" }).join('\n    ') %>
}
