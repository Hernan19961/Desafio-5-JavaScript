let listaDeServicio = [
    { id: 1, tarea: 'Ir al medico', estado: false },
    { id: 2, tarea: 'Irnos de vacaciones', estado: false },
    { id: 3, tarea: 'Salir de viajes con la familia', estado: false },
    { id: 4, tarea: 'entregar desafios javascript', estado: true},
];

// funcion para renderizar
const renderizarTarea = (listaDeServicio) => {
    let html = '';

    listaDeServicio.forEach((list) => {
        html += `<tr>
                    <td>${list.id}</td>
                    <td>${list.tarea}</td><td><button onclick="chein(${list.id})">${list.estado
                ? '<i class="fa-solid fa-square-check"></i>'
                : '<i class="fa-regular fa-square-check"></i>'
            }</button></td>
                    <td><button onclick="del(${list.id
            })"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`;
    });

    document.querySelector("#listaDeServicio").innerHTML = html;
    document.querySelector("#total").innerHTML = listaDeServicio.length;
    document.querySelector("#realizadas").innerHTML = listaDeServicio.filter((list) => list.estado == true).length;
};

const chein = (id) => {
    listaDeServicio.forEach((list) =>
    list.id === id
        ? (list.estado = !list.estado)
        : console.log("Error ")
    );
    renderizarTarea(listaDeServicio);
};

// funcion para eliminar 
const del = (id) => {
    const index = listaDeServicio.findIndex((list) => list.id == id);

    if (index != -1) {
        listaDeServicio.splice(index, 1);
    } else {
        console.log("Error al eliminar");
    }

    renderizarTarea(listaDeServicio);
};

document.getElementById('button').addEventListener('click', () => {
    const lista = document.getElementById('nuevaTarea');

    if (lista.value) {
        const list = {
            id: generarId(listaDeServicio),
            tarea: lista.value,
            estado: false,
        };

        listaDeServicio.push(list);
        renderizarTarea(listaDeServicio);
        lista.value = '';

    } else {
        lista.classList.add('is-invalid');
        lista.placeholder = 'Error al ingresar el texto';
    }
});

const generarId = (listaDeServicio) => {
    return listaDeServicio.length ? listaDeServicio[listaDeServicio.length - 1].id + 1 : 1; };



renderizarTarea(listaDeServicio);