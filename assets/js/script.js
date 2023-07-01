// arreglo
let listaDeServicio = [
    { id: 1, tarea: 'Ir al medico', estado: true },
    { id: 2, tarea: 'Irnos de vacaciones', estado: false },
    { id: 3, tarea: 'Salir de viajes con la familia', estado: true },
    { id: 4, tarea: 'entregar desafios javascript', estado: false},
];


// funcion para renderizar el html
const renderizarLista = (listaDeServicio) => {
    let html = '';

    listaDeServicio.forEach((list) => {
        html += `<tr>
                    <td>${list.id}</td>
                    <td>${list.tarea}</td><td><button onclick="chein(${list.id})">${list.estado
                ? '<i class="bi bi-clipboard-check-fill"></i>'
                : '<i class="bi bi-clipboard-fill"></i>'
            }</button></td>
                    <td><button onclick="del(${list.id
            })"><i class="bi bi-trash-fill"></i></button></td>
                </tr>`;
    });

    document.getElementById('listaDeServicio').innerHTML = html;
    document.getElementById('total').innerHTML = listaDeServicio.length;
    document.getElementById('realizadas').innerHTML = listaDeServicio.filter((list) => list.estado == true).length;
};

const chein = (id) => {
    listaDeServicio.forEach((list) =>
        list.id === id
            ? (list.estado = !list.estado)
            : console.log('Error al cambiar el estado 😥')
    );

    renderizarLista(listaDeServicio);
};

// funcion para eliminar 
const del = (id) => {
    const index = listaDeServicio.findIndex((list) => list.id === id);

    if (index != -1) {
        listaDeServicio.splice(index, 1);
    } else {
        console.log('Error al borrar 😥');
    }

    renderizarLista(listaDeServicio);
};

document.getElementById('agregar').addEventListener('click', () => {
    const lista = document.getElementById('nuevaTarea');

    if (lista.value) {
        const list = {
            id: generarId(listaDeServicio),
            tarea: lista.value,
            estado: false,
        };

        listaDeServicio.push(list);
        renderizarLista(listaDeServicio);
        lista.value = '';

    } else {
        lista.classList.add('is-invalid');
        lista.placeholder = 'No puede estar vacio!';
    }
});

const generarId = (listaDeServicio) => {
    return listaDeServicio.length ? listaDeServicio[listaDeServicio.length - 1].id + 1 : 1;
};


document.getElementById('nuevaTarea').addEventListener('click', (element) => {
    element.target.classList.remove('is-invalid');
    element.target.placeholder = '';
});

renderizarLista(listaDeServicio);
