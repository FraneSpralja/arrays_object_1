//Presentar array con objetos de los pacientes
let radiologia = [
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

console.log(`ver array ${radiologia}`);
console.log(`Este array mide ${radiologia.length}`);

let traumatologia = [
    {
        hora: "08.00",
        especialista: "María Paz Altuzarra",
        paciente: "Paula Sanchez",
        rut: "15554774-5",
        prevision: "fonasa",
    },
    {
        hora: "10.00",
        especialista: "Raul Araya",
        paciente: "Angélica Rivas",
        rut: "15444147-9",
        prevision: "isapre",
    },
    {
        hora: "10.30",
        especialista: "María Arriagada",
        paciente: "Ana Klapp",
        rut: "17879423-9",
        prevision: "isapre",
    },
    {
        hora: "11.00",
        especialista: "Alejandra Badilla",
        paciente: "Felipe Mardones",
        rut: "1547423-6",
        prevision: "isapre",
    },
    {
        hora: "11.30",
        especialista: "Cecilia Budnik",
        paciente: "Diego Marre",
        rut: "16554741-k",
        prevision: "fonasa",
    },
    {
        hora: "12.00",
        especialista: "Arturo Cavagnaro",
        paciente: "Cecilia Mendez",
        rut: "9747535-8",
        prevision: "isapre",
    },
    {
        hora: "12.30",
        especialista: "Andrés Kanacri",
        paciente: "Marcial Suazo",
        rut: "11254785-5",
        prevision: "isapre",
    },
]

console.log(`ver array ${traumatologia}`);
console.log(`Este array mide ${traumatologia.length}`);


let dental = [
    {
        hora: "08.30",
        especialista: "Andrea Zuñiga",
        paciente: "Marcel Retamal",
        rut: "11123425-6",
        prevision: "isapre",
    },
    {
        hora: "11.00",
        especialista: "Maria Pia Zuñiga",
        paciente: "Ángel Muñoz",
        rut: "9878789-2",
        prevision: "isapre",
    },
    {
        hora: "11.30",
        especialista: "Scarlett Witting",
        paciente: "Mario Kast",
        rut: "7998789-5",
        prevision: "fonasa",
    },
    {
        hora: "13.00",
        especialista: "Francisca von Teuber",
        paciente: "Karin Fernandez",
        rut: "18887662-k",
        prevision: "fonasa",
    },
    {
        hora: "13.30",
        especialista: "Eduardo Viñuela",
        paciente: "Hugo Sanchez",
        rut: "17665461-4",
        prevision: "fonasa",
    },
    {
        hora: "14.00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepulveda",
        rut: "14441281-0",
        prevision: "isapre",
    },
]

console.log(`ver array ${dental}`);
console.log(`Este array mide ${dental.length}`);

const pacientesRadio = document.querySelector('.first_last-1');
pacientesRadio.innerHTML = `Primera atención: ${radiologia[0].paciente} // ${radiologia[0].prevision} | Última atención: ${radiologia[4].paciente} // ${radiologia[4].prevision}`;

const tableRadio = document.querySelector('.tabla-1');
radiologia.forEach((reserva) => {
    tableRadio.innerHTML += `
    <tr>
    <td>${reserva.hora}</td>
    <td>${reserva.especialista}</td>
    <td>${reserva.paciente}</td>
    <td>${reserva.rut}</td>
    <td>${reserva.prevision}</td>
    </tr>`
});

const pacientesTrauma = document.querySelector('.first_last-2');
pacientesTrauma.innerHTML = `Primera atención: ${traumatologia[0].paciente} // ${traumatologia[0].prevision} | Última atención ${traumatologia[6].paciente} // ${traumatologia[6].prevision}`;

const tableTrauma = document.querySelector('.tabla-2');
traumatologia.forEach((reserva) => {
    tableTrauma.innerHTML += 
    `
    <tr>
    <td>${reserva.hora}</td>
    <td>${reserva.especialista}</td>
    <td>${reserva.paciente}</td>
    <td>${reserva.rut}</td>
    <td>${reserva.prevision}</td>
    </tr>
    `
});

const pacientesDental = document.querySelector('.first_last-3');
pacientesDental.innerHTML = `Primera atención: ${dental[0].paciente} // ${dental[0].prevision} | Última atención ${dental[5].paciente} // ${dental[5].prevision}`;

const tableDental = document.querySelector('.tabla-3');
dental.forEach((reserva) => {
    tableDental.innerHTML += `
    <tr>
    <td>${reserva.hora}</td>
    <td>${reserva.especialista}</td>
    <td>${reserva.paciente}</td>
    <td>${reserva.rut}</td>
    <td>${reserva.prevision}</td>
    </tr>`
});