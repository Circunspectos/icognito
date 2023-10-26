document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    if (usuario === "teste" && senha === "teste") {
        alert("Login bem-sucedido!");

        const loginForm = document.getElementById("login-form");
        loginForm.innerHTML = `<h1>Bem-vindo à Página de Downloads</h1>
            <p>Aqui você pode baixar os arquivos desejados:</p>
            <ul>
            <center>
                <li>
                    <a href="imagem.png" download>
                        <span class="text-center">Imagem 1</span>
                    </a>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="previewImage('imagem.png')">Ver Imagem</button>
                    </div>
                </li>
                <li>
                    <a href="documento.pdf" download>
                        <span class="text-center">Documento PDF</span>
                    </a>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="downloadFile('documento.pdf')">Download</button>
                    </div>
                </li>
                </center>
                <!-- Adicione links para outros arquivos -->
            </ul>`;
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});

function previewImage(imageUrl) {
}



function downloadFile(fileUrl) {
    // Código para iniciar o download do arquivo
    // Substitua pelo seu código de download de arquivo
}
