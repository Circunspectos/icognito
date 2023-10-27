<?php
if(isset($_POST['acao'])){
    $arquivo = $_FILES['file'];

    $arquivoNovo = explode('.',$arquivo['name']);

    if($arquivoNovo[sizeof($arquivoNovo)-1] != 'jpg'){
        die('nao pode uploadar essa merda krl');
    }else{
        echo 'uploadado com sucesso';
        move_uploaded_file($arquivo['tmp_name'],'uploads/'.$arquivo['name']);
        
    }
}
?>
