//: Serializes Cookie

/* Serializes a cookie name-value pair into a set-cookie header string.

=> Use template literals and encodeURIComponent() to create the appropriate string.*/

const serializesCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializesCookie("foo", "bar"); // "foo-bar"
