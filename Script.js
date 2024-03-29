let controlador = {
    atual: 1,
    anteriror: null
}

document.getElementById("radio1").checked = true;

for (const radio of ["radio1", "radio2", "radio3", "radio4", "radio5", "radio6", "radio7", "radio8"]) {
    const element = document.getElementById(radio)
    element.onclick = () => {
        controlador.anteriror = controlador.atual
        controlador.atual = Number(radio.replace("radio", ""))
        document.getElementById(`manual-radio${controlador.anteriror}`).style.backgroundColor = "transparent"
        document.getElementById("manual-radio" + controlador.atual).style.backgroundColor = "#000000"
    }
}


setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    controlador.anteriror = controlador.atual;
    controlador.atual++;
    if (controlador.atual > 8) {
        document.getElementById(`manual-radio${controlador.anteriror}`).style.backgroundColor = "transparent"
        controlador.atual = 1;
    }

    if (controlador.atual > 1) {
        document.getElementById(`manual-radio${controlador.anteriror}`).style.backgroundColor = "transparent"
    }
    document.getElementById("radio" + controlador.atual).checked = true;
    document.getElementById("manual-radio" + controlador.atual).style.backgroundColor = "#000000"

}