    const textarea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const copiar = document.querySelector(".copiar");

    function btnEncriptar(){
        const textoEncriptado = encriptar(textarea.value);
        mensaje.value = textoEncriptado;
        textarea.value="";
        mensaje.style.backgroundImage="none"
    }

    function encriptar(stringEncriptado){
        let matrizCodigo=[["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"], ["a","ai"] ];
        stringEncriptado = stringEncriptado.toLowerCase();

        for(let i=0; i<matrizCodigo.length; i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            }

        }
        return stringEncriptado;
    }

    function btnDesencriptar(){
        const textoDesencriptado = desencriptar(textarea.value);
        mensaje.value = textoDesencriptado;
        textarea.value="";
    }   


    function desencriptar(stringDesencriptado){
        let matrizCodigo=[["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"], ["a","ai"] ];
        stringDesencriptado = stringDesencriptado.toLowerCase();

        for(let i=0; i<matrizCodigo.length; i++){
            if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }

        }
        return stringDesencriptado;
    }

    function Btncopy(){
        const textoCopiado = mensaje.value;
        mensaje.value = textoCopiado;
        navigator.clipboard.writeText(textoCopiado)
        mensaje.value="";  
    }
  