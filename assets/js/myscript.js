
document.getElementById('table__header').innerHTML = '<h1>Estadisticas centro medico ñuñoa</h1>';

let pacientes = [
    {
        hora: "11.00",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rut: "9878782-1",
        prevision: "fonasa",
    },
    {
        hora: "11.30",
        especialista: "Federico Subercaseaux",
        paciente: "Pamela Estrada",
        rut: "15345241-3",
        prevision: "isapre",
    },
    {
        hora: "15.00",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rut: "16445345-9",
        prevision: "isapre",
    },
    {
        hora: "15.30",
        especialista: "Ana María Gody",
        paciente: "Manuel Godoy",
        rut: "17666419-0",
        prevision: "fonasa",
    },
    {
        hora: "16.00",
        especialista: "Patricia Suazo",
        paciente: "Ramon Ulloa",
        rut: "14989389-K",
        prevision: "fonasa",
    },
];

let tabla = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>";

for(let i = 0; i < pacientes.length; i++){
    tabla += `<tr>
            <td>${pacientes[i].hora}</td>
            <td>${pacientes[i].especialista}</td>
            <td>${pacientes[i].paciente}</td>
            <td>${pacientes[i].rut}</td>
            <td>${pacientes[i].prevision}</td>
            </tr>`;
}

document.getElementById("cuerpo-tabla").innerHTML = `${tabla}`;

function first_last(){
    let first = pacientes[0].paciente;
    let last = pacientes[4].paciente;
    document.write(`<br><b>Primer paciente:</b> ${first} | <b>Último paciente:</b> ${last}`);
}

document.querySelector('.table__header').innerHTML = `${first_last()}`;
