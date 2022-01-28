function onlyOne(...params) {
  if (params.length === 0) return false;
  let value = false;
  for (const iterator of params)
    value = (value || iterator) && !(value && iterator);
  return value;
}
