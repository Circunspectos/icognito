document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    
    if (usuario === "t" && senha === "t") {
        alert("Login bem-sucedido!");

        const loginForm = document.getElementById("login-form");
        loginForm.style.display = "none";
        const Container = document.getElementById("container");
        Container.style.display = "none";

        const container2 = document.getElementById("container2");
        container2.style.display = "block";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});
