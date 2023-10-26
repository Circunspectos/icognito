<?php
if (isset($_POST['submit'])) {
    $uploadDirectory = 'uploads/';

    if (!file_exists($uploadDirectory)) {
        mkdir($uploadDirectory, 0777, true);
    }

    $targetFile = $uploadDirectory . basename($_FILES['file']['name']);

    if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
        echo 'Arquivo foi enviado com sucesso.';
    } else {
        echo 'Ocorreu um erro durante o envio do arquivo.';
    }
}
?>
