document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o redirecionamento da página

    var email = document.getElementById("email").value;
    var url = "https://script.google.com/macros/s/AKfycbxC0ND3dGc7lMSbMU51_WkBGb47cS85T9tGBiMboV4/dev"; // Atualize aqui com a nova URL

    fetch(url, {
        method: "POST",
        mode: "cors", // Alterado para "cors" para evitar bloqueios
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: email })
    }).then(response => response.text())
      .then(data => {
          alert("E-mail cadastrado com sucesso!");
          document.getElementById("email").value = "";
      })
      .catch(err => console.error("Erro ao enviar o e-mail:", err));
});
