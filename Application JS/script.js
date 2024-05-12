document.getElementById("userForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const courriel = document.getElementById("courriel").value;
  const password = document.getElementById("password").value;
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;

  let body = {
    nom: prenom,
    prenom: nom,
    courriel: courriel,
    password: password,
  };
  try {
    let response = await fetch(`http://localhost:3000/utilisateurs/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log(response.status);
      console.error("HTTP error", response.status, await response.text());
      alert("Failed to create user: " + response.status);
      return;
    }

    let data = await response.json();
    console.log(data);
    alert("User created successfully!: cle_api : " + data.apiKey);
  } catch (error) {
    console.error("Error during fetch operation:", error.message);
    alert("An error occurred: " + error.message);
  }
});

document.getElementById("apiKeyForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const passwordApiKey = document.getElementById("passwordApiKey").value;

  let body = {
    email: email,
    password: passwordApiKey,
  };
  try {
    let response = await fetch(`http://localhost:3000/utilisateurs/generateApiKey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      console.log(await response.status);
      console.error("HTTP error", response.status, await response.text());
      alert("Failed to generate API key: " + response.status);
      return;
    }

    let data = await response.json();
    console.log(data);
    alert("Nouvelle clé API : " + data.apiKey);
  } catch (error) {
    console.error("Error during fetch operation:", error.message);
    alert("An error occurred: " + error.message);
  }
});
