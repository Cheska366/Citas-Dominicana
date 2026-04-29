let botonClick = document.getElementById('boton-cambiar-cita');
let cita = document.getElementById('cita');
let autor = document.getElementById('autor');
let imgAutor = document.getElementById('img-autor');

function generarOrdenAletorio (minimo, maximo) {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo) + minimo)    
}

function cambiarCita() {
    cita.classList.add('fade-out');
    autor.classList.add('fade-out');
    imgAutor.classList.add('fade-out');    

    setTimeout(() => {
        let indiceAleatorio = generarOrdenAletorio(0, citas.length)
        let citasOriginal = citas[indiceAleatorio]

        cita.textContent = `${citasOriginal.texto}`
        autor.textContent = `${citasOriginal.autor}`
        imgAutor.src = `${citasOriginal.imagen}`

        setTimeout(() => {
            cita.classList.add('fade-in');
            autor.classList.add('fade-in');
            imgAutor.classList.add('fade-in'); 
        }, 1000);

    }, 1000);
}

window.addEventListener('DOMContentLoaded', () => {
    cambiarCita();
});

botonClick.addEventListener('click', cambiarCita)


