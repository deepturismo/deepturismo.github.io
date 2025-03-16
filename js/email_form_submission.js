document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var email = document.getElementById("email").value;
    var url = "https://script.google.com/macros/s/AKfycbyc87WOWewPAuKp8_BD2hSwEYqUGllWfd94gtrngdf22mHXz6OAWZ405o6bE78hDTC_/exec";

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: email })
    }).then(() => {
        alert("E-mail cadastrado com sucesso!");
        document.getElementById("email").value = "";
    }).catch(err => console.error("Erro:", err));
});
