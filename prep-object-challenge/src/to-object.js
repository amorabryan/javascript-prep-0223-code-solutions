/* exported toObject */
function toObject(keyValuePair) {
  let object = {};
  let object2 = '';
  const i = 0;
  object[i] = keyValuePair[i];
  object2 = keyValuePair[i + 1];
  object = { [keyValuePair[i]]: object2 };
  return object;
}
