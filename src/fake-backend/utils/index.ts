export function catHash(pass: string, hashCode: number = 55): string {
  let result: string = "";
  for (let index = 0; index < pass.length; index++) {
    result += String.fromCharCode(pass.charCodeAt(index) ^ hashCode);
  }

  return result;
}

export function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function cookieToJson(field: string) {
  let output = null as { [key: string]: any } | null;

  for (const pair of document.cookie.split(/\s*;\s*/)) {
    const pairs = pair.split(/\s*=\s*/);
    const name = decodeURIComponent(pairs[0]);
    if (field && field != name) continue;
    const value = decodeURIComponent(pairs.splice(1).join("="));
    output = JSON.parse(value);
  }

  return output;
}

export function get_cookie(name: string) {
  return document.cookie.split(";").some((c) => {
    return c.trim().startsWith(name + "=");
  });
}

export function delete_cookie(
  name: string,
  path: string | null = null,
  domain: string | null = null
) {
  if (get_cookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

export function set_cookie(
  name: string,
  value: string,
  days: number | null = null
) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
