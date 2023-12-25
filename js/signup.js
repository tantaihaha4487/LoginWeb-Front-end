const apiURI = window.config.API_URI;

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  userData = {
    name: document.getElementById("name").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  fetch(`${apiURI}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then(async (res) => {
    data = await res.json();

    if (res.ok) {
      alert("Signup successfully!!");
      window.location.href = "../signin.html";
    } else {
      alert(`Signup fail. ${data.error}`);
    }
  });
});
