<%
var props = _.chain(allProperties).groupBy("attributes.item").map((value, key) => ( { key, value } )).value();
var textStyleMapper = style => style.attributes.subitem && `\n      ${style.attributes.subitem}: ${style.value || null}`;
var textThemeMapper = prop => `\n  ${prop.key}: ${this.className}.${prop.key}`;
%>part of <%= this.packageName %>;

/// # Text styles and theme for <%= this.packageName %>
///
/// You can use [<%= this.className %>] like this:
///
/// ```
/// <%= this.className %>.textTheme
/// ```
///
/// See also [TextTheme API](https://api.flutter.dev/flutter/material/TextTheme-class.html).
///
class <%= this.className %> {

  <%= this.className %>._();
<%= _.map(props, (prop) => {

  const mappedStyles = _.map(prop.value, textStyleMapper);

  return `
  static const TextStyle ${prop.key} = TextStyle(${mappedStyles}
  );
`;

}).join('') %>
  static const TextTheme textTheme = TextTheme(${_.map(props, textThemeMapper)}
  );

}
