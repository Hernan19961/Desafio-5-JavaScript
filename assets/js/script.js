// arreglo
let listaDeServicio = [
    { id: 1, tarea: 'Ir al medico', estado: true },
    { id: 2, tarea: 'Irnos de vacaciones', estado: false },
    { id: 3, tarea: 'Salir de viajes con la familia', estado: true },
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


