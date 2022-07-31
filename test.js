// define as cores do gráfico e exibe alertas de acordo com resultado
function chart() {
    let questao1 = document.querySelector('input[name="questao1"]:checked').value;
    let path1 = document.querySelector("#path1")
    let alerta1 = document.querySelector("#alerta1")

    if (questao1 == 1) {
        path1.style.fill = "rgb(138, 82, 82)";
        alerta1.classList.remove("hiddenAlert")
    } if (questao1 == 2) {
        path1.style.fill = "rgb(82, 95, 138)";
    } if (questao1 == 3) {
        path1.style.fill = "rgb(138, 82, 135)";
    } if (questao1 == 4) {
        path1.style.fill = "rgb(82, 138, 112)";
    } if (questao1 == 5) {
        path1.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao2 = document.querySelector('input[name="questao2"]:checked').value;
    let path2 = document.querySelector("#path2")
    let alerta2 = document.querySelector("#alerta2")
    
    if (questao2 == 1) {
        path2.style.fill = "rgb(138, 82, 82)";
        alerta2.classList.remove("hiddenAlert")
    } if (questao2 == 2) {
        path2.style.fill = "rgb(82, 95, 138)";
    } if (questao2 == 3) {
        path2.style.fill = "rgb(138, 82, 135)";
    } if (questao2 == 4) {
        path2.style.fill = "rgb(82, 138, 112)";
    } if (questao2 == 5) {
        path2.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao3 = document.querySelector('input[name="questao3"]:checked').value;
    let path3 = document.querySelector("#path3")
    let alerta3 = document.querySelector("#alerta3")
    
    if (questao3 == 1) {
        path3.style.fill = "rgb(138, 82, 82)";
        alerta3.classList.remove("hiddenAlert")
    } if (questao3 == 2) {
        path3.style.fill = "rgb(82, 95, 138)";
    } if (questao3 == 3) {
        path3.style.fill = "rgb(138, 82, 135)";
    } if (questao3 == 4) {
        path3.style.fill = "rgb(82, 138, 112)";
    } if (questao3 == 5) {
        path3.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao4 = document.querySelector('input[name="questao4"]:checked').value;
    let path4 = document.querySelector("#path4")
    let alerta4 = document.querySelector("#alerta4")
    
    if (questao4 == 1) {
        path4.style.fill = "rgb(138, 82, 82)";
        alerta4.classList.remove("hiddenAlert")
    } if (questao4 == 2) {
        path4.style.fill = "rgb(82, 95, 138)";
    } if (questao4 == 3) {
        path4.style.fill = "rgb(138, 82, 135)";
    } if (questao4 == 4) {
        path4.style.fill = "rgb(82, 138, 112)";
    } if (questao4 == 5) {
        path4.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao5 = document.querySelector('input[name="questao5"]:checked').value;
    let path5 = document.querySelector("#path5")
    let alerta5 = document.querySelector("#alerta5")
    
    if (questao5 == 1) {
        path5.style.fill = "rgb(138, 82, 82)";
        alerta5.classList.remove("hiddenAlert")
    } if (questao5 == 2) {
        path5.style.fill = "rgb(82, 95, 138)";
    } if (questao5 == 3) {
        path5.style.fill = "rgb(138, 82, 135)";
    } if (questao5 == 4) {
        path5.style.fill = "rgb(82, 138, 112)";
    } if (questao5 == 5) {
        path5.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao6 = document.querySelector('input[name="questao6"]:checked').value;
    let path6 = document.querySelector("#path6")
    let alerta6 = document.querySelector("#alerta6")
    
    if (questao6 == 1) {
        path6.style.fill = "rgb(138, 82, 82)";
        alerta6.classList.remove("hiddenAlert")
    } if (questao6 == 2) {
        path6.style.fill = "rgb(82, 95, 138)";
    } if (questao6 == 3) {
        path6.style.fill = "rgb(138, 82, 135)";
    } if (questao6 == 4) {
        path6.style.fill = "rgb(82, 138, 112)";
    } if (questao6 == 5) {
        path6.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao7 = document.querySelector('input[name="questao7"]:checked').value;
    let path7 = document.querySelector("#path7")
    let alerta7 = document.querySelector("#alerta7")
    
    if (questao7 == 1) {
        path7.style.fill = "rgb(138, 82, 82)";
        alerta7.classList.remove("hiddenAlert")
    } if (questao7 == 2) {
        path7.style.fill = "rgb(82, 95, 138)";
    } if (questao7 == 3) {
        path7.style.fill = "rgb(138, 82, 135)";
    } if (questao7 == 4) {
        path7.style.fill = "rgb(82, 138, 112)";
    } if (questao7 == 5) {
        path7.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao8 = document.querySelector('input[name="questao8"]:checked').value;
    let path8 = document.querySelector("#path8")
    let alerta8 = document.querySelector("#alerta8")
    
    if (questao8 == 1) {
        path8.style.fill = "rgb(138, 82, 82)";
        alerta8.classList.remove("hiddenAlert")
    } if (questao8 == 2) {
        path8.style.fill = "rgb(82, 95, 138)";
    } if (questao8 == 3) {
        path8.style.fill = "rgb(138, 82, 135)";
    } if (questao8 == 4) {
        path8.style.fill = "rgb(82, 138, 112)";
    } if (questao8 == 5) {
        path8.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao9 = document.querySelector('input[name="questao9"]:checked').value;
    let path9 = document.querySelector("#path9")
    let alerta9 = document.querySelector("#alerta9")
    
    if (questao9 == 1) {
        path9.style.fill = "rgb(138, 82, 82)";
        alerta9.classList.remove("hiddenAlert")
    } if (questao9 == 2) {
        path9.style.fill = "rgb(82, 95, 138)";
    } if (questao9 == 3) {
        path9.style.fill = "rgb(138, 82, 135)";
    } if (questao9 == 4) {
        path9.style.fill = "rgb(82, 138, 112)";
    } if (questao9 == 5) {
        path9.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao10 = document.querySelector('input[name="questao10"]:checked').value;
    let path10 = document.querySelector("#path10")
    let alerta10 = document.querySelector("#alerta10")
    
    if (questao10 == 1) {
        path10.style.fill = "rgb(138, 82, 82)";
        alerta10.classList.remove("hiddenAlert")
    } if (questao10 == 2) {
        path10.style.fill = "rgb(82, 95, 138)";
    } if (questao10 == 3) {
        path10.style.fill = "rgb(138, 82, 135)";
    } if (questao10 == 4) {
        path10.style.fill = "rgb(82, 138, 112)";
    } if (questao10 == 5) {
        path10.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao11 = document.querySelector('input[name="questao11"]:checked').value;
    let path11 = document.querySelector("#path11")
    let alerta11 = document.querySelector("#alerta11")
    
    if (questao11 == 1) {
        path11.style.fill = "rgb(138, 82, 82)";
        alerta11.classList.remove("hiddenAlert")
    } if (questao11 == 2) {
        path11.style.fill = "rgb(82, 95, 138)";
    } if (questao11 == 3) {
        path11.style.fill = "rgb(138, 82, 135)";
    } if (questao11 == 4) {
        path11.style.fill = "rgb(82, 138, 112)";
    } if (questao11 == 5) {
        path11.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao12 = document.querySelector('input[name="questao12"]:checked').value;
    let path12 = document.querySelector("#path12")
    let alerta12 = document.querySelector("#alerta12")
    
    if (questao12 == 1) {
        path12.style.fill = "rgb(138, 82, 82)";
        alerta12.classList.remove("hiddenAlert")
    } if (questao12 == 2) {
        path12.style.fill = "rgb(82, 95, 138)";
    } if (questao12 == 3) {
        path12.style.fill = "rgb(138, 82, 135)";
    } if (questao12 == 4) {
        path12.style.fill = "rgb(82, 138, 112)";
    } if (questao12 == 5) {
        path12.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao13 = document.querySelector('input[name="questao13"]:checked').value;
    let path13 = document.querySelector("#path13")
    let alerta13 = document.querySelector("#alerta13")
    
    if (questao13 == 1) {
        path13.style.fill = "rgb(138, 82, 82)";
        alerta13.classList.remove("hiddenAlert")
    } if (questao13 == 2) {
        path13.style.fill = "rgb(82, 95, 138)";
    } if (questao13 == 3) {
        path13.style.fill = "rgb(138, 82, 135)";
    } if (questao13 == 4) {
        path13.style.fill = "rgb(82, 138, 112)";
    } if (questao13 == 5) {
        path13.style.fill = "rgb(123, 138, 82)";
    }
    
    let questao14 = document.querySelector('input[name="questao14"]:checked').value;
    let path14 = document.querySelector("#path14")
    let alerta14 = document.querySelector("#alerta14")
    
    if (questao14 == 1) {
        path14.style.fill = "rgb(138, 82, 82)";
        alerta14.classList.remove("hiddenAlert")
    } if (questao14 == 2) {
        path14.style.fill = "rgb(82, 95, 138)";
    } if (questao14 == 3) {
        path14.style.fill = "rgb(138, 82, 135)";
    } if (questao14 == 4) {
        path14.style.fill = "rgb(82, 138, 112)";
    } if (questao14 == 5) {
        path14.style.fill = "rgb(123, 138, 82)";
    }

}

// revela resultado
function result() {
    document.getElementById('forms').classList.toggle("hidden");
    document.getElementById('result').classList.toggle("hidden");
}

// exibe nome da empresa no modal
//function nome() {
//    let nomeEmpresa = document.querySelector('input[name="nomeEmpresa"]').value
//    document.getElementById("empresa").innerHTML = nomeEmpresa
//}

// adiciona disabled/readonly depois de enviar forms
function addReadOnlyAndDisable() {
    let labels = Array.from(document.getElementsByTagName("label"))
    labels.forEach(label => {
        label.setAttribute("readonly", true)
    });
    let inputs = Array.from(document.getElementsByTagName("input"))
    inputs.forEach(input => {
        input.setAttribute("disabled", true)
    });
}


// chama as funções onSubmit()
function submitFunctions() {
//    nome()
    chart()
    addReadOnlyAndDisable()
    result()
}
