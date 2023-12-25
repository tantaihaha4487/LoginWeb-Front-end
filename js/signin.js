const apiURI = window.config.API_URI;

document
  .getElementById("signinForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    userData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    fetch(`${apiURI}/auth/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(async (res) => {
        if (res.ok) {
          data = await res.json();
          document.cookie = `jwtToken=${data.token}; path=/;`;
          window.location.href = "../index.html";
        } else {
          res.json().then((data) => {
            alert(`Login fail. ${data.error}`);
            throw new Error(data.error);
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
