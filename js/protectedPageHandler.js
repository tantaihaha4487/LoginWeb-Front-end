document.addEventListener("DOMContentLoaded", () => {
  const cookie = getCookie("jwtToken");
  if (cookie) {
    if (window.location.pathname !== "/main.html") { // Check if not already on main.html
      return (window.location.href = "../main.html");
    }
  } else {
    if (window.location.pathname !== "/signin.html") { // Check if not already on signin.html
      return (window.location.href = "../signin.html");
    }
  }
});

function getCookie(name) {
  const cookies = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('='))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  return cookies[name];
}
