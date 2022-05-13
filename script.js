const digiteaqui = document.querySelector(".digiteaqui");
const respostaaqui = document.querySelector(".respostaaqui");

function btnCriptografar (){
    const textoCriptografado = criptografar(digiteaqui.value)
    respostaaqui.value = textoCriptografado
    respostaaqui.style.backgroundImage = "none"
}

function criptografar(stringCriptografado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringCriptografado = stringCriptografado.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if (stringCriptografado.includes(matrizCodigo[i][0])){
            stringCriptografado = stringCriptografado.replaceAll(matrizCodigo [i][0], matrizCodigo [i][1])
        }
    }
    return stringCriptografado;
}

function btnDescriptografar (){
    const textoDescriptografado = descriptografar(digiteaqui.value)
    respostaaqui.value = textoDescriptografado
    digiteaqui.style.padding = "30px"
}

function descriptografar(stringDescriptografado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDescriptografado = stringDescriptografado.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if (stringDescriptografado.includes(matrizCodigo[i][1])){
            stringDescriptografado = stringDescriptografado.replaceAll(matrizCodigo [i][1], matrizCodigo [i][0])
        }
    }
    return stringDescriptografado;
}

function btnCopiar(){
    const copiarMensagem = document.querySelector(".respostaaqui");
    copiarMensagem.select();
    navigator.clipboard.writeText(copiarMensagem.value);
}