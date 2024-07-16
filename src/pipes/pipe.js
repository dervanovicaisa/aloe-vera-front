export function removeUppercase(text) {
  let result = "";
  for (let char of text) {
    if (char === char.toUpperCase()) {
      result += " " + char;
    } else {
      result += char;
    }
  }
  return result;
}
